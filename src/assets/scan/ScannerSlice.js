import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ConvertApi from 'convertapi-js';
const api_key = process.env.CONVERT_API_KEY;

// Initialize ConvertAPI
const convertApi = ConvertApi.auth(api_key);

// Async thunk for uploading file
export const uploadFile = createAsyncThunk(
  'upload/uploadFile',
  async (file, { rejectWithValue }) => {
    try {
      let params = convertApi.createParams();
      params.add('file', file);

      const result = await convertApi.convert('pdf', 'xlsx', params); // Adjust 'docx' and 'pdf' according to your needs

      // Get result file URL
      const url = result.files[0].Url;

      return { url };
    } catch (error) {
      return rejectWithValue(error.message || 'Upload failed');
    }
  }
);

export const uploadSlice = createSlice({
  name: 'upload',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.url;
        window.alert("Conversion Complete, please download file")
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        window.alert("Conversion failed. Plsease choose another file, or try again!!!")
      });
  },
});

export default uploadSlice.reducer;
export const selectData = (state) => state.uploadSlice.data;
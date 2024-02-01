
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const getAccountInfo = createAsyncThunk(
  'account/info',
  async (userData) => {
    try {
        const response = await fetch("http://localhost:3000/account/info", {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);


const AccountInfoSlice = createSlice({
  name: 'user_info',
  initialState: {
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAccountInfo.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(getAccountInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default AccountInfoSlice.reducer;

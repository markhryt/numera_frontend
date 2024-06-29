
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const logoutuser = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
        const response = await fetch("http://localhost:3000/logout", {
            method: 'POST',
            credentials: 'include', // This is crucial for cookies
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json(); // Assuming the server sends back JSON
        return data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);



const logoutSlice = createSlice({
  name: 'user_info',
  initialState: {
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutuser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutuser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(logoutuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default logoutSlice.reducer;

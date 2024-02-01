
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData) => {
    try {
        const response = await fetch("http://localhost:3000/register", {
            method: 'POST',

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


const registerUserSlice = createSlice({
  name: 'user_info',
  initialState: {
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default registerUserSlice.reducer;

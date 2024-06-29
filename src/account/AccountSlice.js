
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const getAccountInfo = createAsyncThunk(
  'account/info',
  async () => {
    const url = `http://localhost:3000/account/info`; // Append query string to URL
    try {
        const response = await fetch(url, {
            method: 'GET',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json(); // Ensure the response is parsed as JSON
        return data; // Return the parsed data
    } catch (error) {
      throw Error(error.message);
    }
  }
);



const AccountInfoSlice = createSlice({
  name: 'user_info',
  initialState: {
    loading: false,
    error: null,
    userData:{

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAccountInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(getAccountInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default AccountInfoSlice.reducer;
export const selectUserData = (state) => state.AccountSlice.userData
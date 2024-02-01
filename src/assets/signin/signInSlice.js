
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const signIn = createAsyncThunk(
    'auth/signin',
    async (userData) => {
      try {
          const response = await fetch("http://localhost:3000/signin", {
              method: 'POST',
              credentials: "include",
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const responseData = await response.json();
          return responseData;
      } catch (error) {
        throw Error(error.message);
      }
    }
  );
  export const signOut = createAsyncThunk(
    'auth/signout',
    async () => {
      try {
          const response = await fetch("http://localhost:3000/signout", {
              method: 'POST',
              credentials: "include",
          });
  
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const responseData = await response.json();
          return responseData;
      } catch (error) {
        throw Error(error.message);
      }
    }
  );
  
  export const signInCheck = createAsyncThunk(
    'auth/signin/check',
    async () => {
      try {
          const response = await fetch("http://localhost:3000/signin/check", {
              method: 'GET',
              credentials: "include",
          });
          const responseData = await response.json();
          return responseData;
      } catch (error) {
        throw Error(error.message);
      }
    }
  );
  


const signInSlice = createSlice({
  name: 'user_info',
  initialState: {
    loading: false,
    error: null,
    loggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signInCheck.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInCheck.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = action.payload;
      })
      .addCase(signInCheck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.loading = false;
        state.loggedIn = action.payload;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      
  }
});


export default signInSlice.reducer;

export const selectIsLoggedIn = (state) => state.signInSlice.loggedIn;
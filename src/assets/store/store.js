import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../register/registerSlice";
import signInSlice from "../signin/signInSlice";
import AccountSlice from "../../account/AccountSlice";
export default configureStore({
    reducer:{
        registerSlice: registerSlice,
        signInSlice: signInSlice,
        AccountSlice: AccountSlice,
    }
});
import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../register/registerSlice";
import signInSlice from "../signin/signInSlice";
import AccountSlice from "../../account/AccountSlice";
import logoutSlice from "../../logout/logoutSlice";
import uploadSlice from "../scan/ScannerSlice";
export default configureStore({
    reducer:{
        registerSlice: registerSlice,
        signInSlice: signInSlice,
        AccountSlice: AccountSlice,
        logoutSlice: logoutSlice,
        uploadSlice: uploadSlice,
    }
});
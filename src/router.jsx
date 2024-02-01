import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Register from "./assets/register/register";
import SignIn from "./assets/signin/signIn";
import Account from "./account/Account";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "login",
    element: <SignIn/>,
  },
  {
    path: "account",
    element: <Account/>,
  },
  
]);

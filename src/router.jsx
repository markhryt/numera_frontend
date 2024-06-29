import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Register from "./assets/register/register";
import SignIn from "./assets/signin/signIn";
import Account from "./account/Account";
import About from "./assets/about/AboutUs";
import Scan_price from "./assets/scan_price/Scan_price";
import Scanner from "./assets/scan/Scanner";
import Downloadfile from "./assets/scan/downloadfile";
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
  {
    path: "about",
    element: <About/>
  },
  {
    path: 'scan_price',
    element: <Scan_price/>
  },
  {
    path: "scan",
    element: <Scanner/>
  },
  {
    path: "scan/downloadfile",
    element: <Downloadfile/>
  },
  
]);

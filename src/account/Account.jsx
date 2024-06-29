import Logout from "../logout/logout";
import { getAccountInfo } from "./AccountSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { selectUserData } from "./AccountSlice";
export default function Account(){
    const dispatch = useDispatch();
    let userData = useSelector(selectUserData)
    useEffect(()=>{
        dispatch(getAccountInfo())
    }, [])

   
    return(
        <div>
            <h1 className="text-center">Account Information</h1>
            <div className="mt-5 text-center container">
                <div className="row">
                    <p>First Name: {userData.firstName}</p>
                </div>
                <div className="row">
                    <p>Last Name:{userData.LastName}</p>
                </div> 
                <div className="row">
                    <p>Adress: {userData.address}</p>
                </div> 
                <div className="row">
                    <Logout/>
                </div> 
            </div>
          
        </div>
    );
}
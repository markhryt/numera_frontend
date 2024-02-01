import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
const account_picture = 'https://cdn-icons-png.flaticon.com/512/61/61205.png';
const login_picture = "https://www.freeiconspng.com/thumbs/login-icon/black-login-icon--0.png";
const signUp_picture = "https://static.thenounproject.com/png/736543-200.png";
import { selectIsLoggedIn } from '../../signin/signInSlice';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInCheck } from '../../signin/signInSlice';
export default function Authenticated(){
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(signInCheck());
    }, []);

    let isLoggedIn = useSelector(selectIsLoggedIn);
    if(isLoggedIn){
        return(
            <div className="account col-1">
            <Link to = "/account">
              <Avatar
                  alt="Remy Sharp"
                  src={account_picture}
                >
                  B
                </Avatar>
            </Link>
            </div>
        )
    }
    return(
        <div className='row'>
            <Link to = "/login" className='col'>
                <Avatar  variant="square" alt = "login" src = {login_picture}>
                    login
                </Avatar>
            </Link>
            <Link to="register" className='col'>
                <Avatar  variant="square" alt = "login" src = {signUp_picture}>
                    login
                </Avatar>
            </Link>
        </div>
    )
}
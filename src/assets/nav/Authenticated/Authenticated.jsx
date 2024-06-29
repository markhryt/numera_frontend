import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
const account_picture = 'https://cdn-icons-png.flaticon.com/512/61/61205.png';
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
            <div className="account">
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
        <div className='authenticated'>
            <ul>
                <li>
                    <Link to = "/login">
                    <   button id = "login-button">Login</button>
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        <button id = "register-button">Sign Up</button>
                    </Link>
                </li>
            </ul>
     
        </div>
    )
}
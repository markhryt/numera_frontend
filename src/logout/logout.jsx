import { useDispatch } from "react-redux";
import { logoutuser } from "./logoutSlice";
import { useNavigate } from "react-router";
export default function Logout(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleLogOut(){
        dispatch(logoutuser());
        navigate('/');
        console.log('loged out')
    }
    return(
        <div>
            <p>Logout</p>
            <button type="button" class="btn btn-danger" onClick={handleLogOut}>logout</button>
        </div>
    );
}
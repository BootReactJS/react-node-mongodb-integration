import "./Profile.css"
import { Link, Outlet } from "react-router-dom";

export function Profile(){
    return (
        <div className="profile">
            <div className="gridmenus">
                <Link to="pdetails">Personal Details</Link>
                <Link to="orders">Orders</Link>
                <Link to="payments">Payments</Link>
                <Link to="cpwd">Change Password</Link>
                <Link to="logout">Logout</Link>
                <Link to="use-ref">useRef Hook</Link>
                <Link to="use-reducer">useReducer Hook</Link>
                <Link to="use-context">useContext</Link>

            </div>
            <div className="gridcomponents">
                <Outlet />
            </div>
        </div>
    );
}
export default Profile
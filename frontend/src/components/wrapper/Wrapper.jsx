import ContactUs from "../contactus/ContactUs";
import Signin from '../login/Signin';
import Signup from '../login/Signup';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from  "../profile/Profile.jsx";

import PersonalDetails from  "../profile/PersonalDetails.jsx";
import Orders from  "../profile/Orders.jsx";
import Payments from  "../profile/Payments.jsx";
import Logout from  "../profile/Logout.jsx";
import ChangePassword from  "../profile/ChangePassword.jsx";
import UseRef from "../profile/UseRef.jsx";
import A from "../profile/context-api/A.jsx";

import Home from '../home/Home.jsx';
import Apis from '../home/apis/Apis.jsx';

import Name from "../../redux/components/Name.jsx";
import Details from "../../redux/components/Details.jsx";

import Counter from  "../use-reducer/Counter.jsx";

export function Wrapper( {isLoggedIn} ){
    return (
        <div className="container">
             <Routes>
                <Route path={"/"} element={ isLoggedIn? <Home /> : <Signin />}/>
                <Route path={"/products"} element={<Apis />}/>
                 <Route
                        path={"/redux"}
                        element={
                        <>
                            <Name />
                            <Details />
                        </>
                        }
                    />


                <Route path={"/signin"} element={<Signin />}/>
                <Route path={"/contactus"} element={<ContactUs />}/>
                <Route path={"/signup"} element={<Signup />}/>
                <Route path={"/optional"} element={<Profile />}>
                    <Route path={""} element={<PersonalDetails />}/>
                    <Route path={"pdetails"} element={<PersonalDetails />}/>
                    <Route path={"orders"} element={<Orders />}/>
                    <Route path={"payments"} element={<Payments />}/>
                    <Route path={"cpwd"} element={<ChangePassword />}/>
                    <Route path={"logout"} element={<Logout />}/>
                    <Route path={"use-ref"} element={<UseRef />} />
                    <Route path={"use-context"} element={<A />} />
                    <Route path={"use-reducer"} element={<Counter />} />

                </Route>

             <Route path={"/contactus"} element={<ContactUs />} />
            <Route path={"/signup"} element={<Signup />} />
          </Routes>
      
        </div>
       
    );
}
export default Wrapper;

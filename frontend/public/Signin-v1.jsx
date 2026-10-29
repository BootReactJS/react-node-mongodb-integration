import './Signin.css';
import AuthContext from "../src/context/AuthContext.js";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"
import axios from "axios";
import {  useState, useContext } from "react";
import Wrapper from  "../src/components/wrapper/Wrapper.jsx";


const url = "http://localhost:4936/api/auth/sign-in";

const Signin = () => {
      const formObject = {
        email :"",
        password: ""
      }


const [stateObject, setStateObject]   = useState(formObject)
const [state, setState] = useState({ email: "", password: "" });
const login = useContext(AuthContext);

  const SigninBasic = () =>{
        /* const data = {
          "email":"aj@gmail.com",
          "password":""
        } */

        axios.post(url, state)
          .then( (response)=> {
          //console.log(response);
          toast.success("Successfully logged in");
          //login();
      })
        .catch( (error)=>{
        //console.log(error);
        toast.error(error.message)
    });

  }

  const handleForm = () =>{
        //toast.success(event.target.value);
        //toast.success(stateObject);

        setStateObject({ ...stateObject, [event.target.name]: event.target.value });
        setState({ ...state, [event.target.name]: event.target.value });
       // toast.success(state);
       

  }

  return (
    <div className="auth-page">
      <div className="auth-card sign-in-card">
        <div className="auth-illustration">
          <span className="badge">Welcome back</span>
          <h1>Sign in to continue</h1>
          <p>Access your dashboard and manage everything in one place.</p>
        </div>

        <div className="auth-form-panel">
          <h2>Sign In</h2>
          <p className="subtitle">Use your account details below</p>

          <form className="auth-form">
            <div className="input-group">
              <label htmlFor="signin-email">Email</label>
              <input
                id="signin-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleForm}
              />
            </div>

            <div className="input-group">
              <label htmlFor="signin-password">Password</label>
              <input
                id="signin-password"
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleForm}
              />
            </div>

            <div className="form-row">
              <label className="checkbox-wrap">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button  onClick={SigninBasic} type="submit" className="primary-btn">
              Sign In
            </button>
          </form>

          <p className="switch-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
import "./Signin.css";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useState, useContext } from "react";
import Wrapper from "../wrapper/Wrapper.jsx";

const url = "http://localhost:4936/api/auth/sign-in";

const Signin = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const login = useContext(AuthContext);

  const handleForm = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const SigninBasic = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(url, state);
      //console.log(response);

      toast.success("Successfully logged in");
      setLoggedIn(true);

     /*  console.log(response.data.token);
      localStorage.setItem("token", response.data.token); */

       const token = response?.data?.token;

        if (token && typeof window !== "undefined") {
          try {
            window.localStorage.setItem("token", token);
          } catch (err) {
            console.error("Local storage is not available:", err);
          }
        }

      if (typeof login === "function") {
        login(); // only if AuthContext provides a function
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // Render Wrapper only after successful login
  if (loggedIn) {
    return <Wrapper isLoggedIn={true} />;
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

          <form className="auth-form" onSubmit={SigninBasic}>
            <div className="input-group">
              <label htmlFor="signin-email">Email</label>
              <input
                id="signin-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleForm}
                value={state.email}
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
                value={state.password}
              />
            </div>

            <div className="form-row">
              <label className="checkbox-wrap">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="primary-btn">
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
import './Signup.css';
import { Link } from "react-router-dom";
import { useRef } from "react";
import { getUserData } from "./SignupService";


const Signup = () => {
   const firstName = useRef(null);
   const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);


  return (
    <div className="auth-page">
      <div className="auth-card sign-up-card">
        <div className="auth-form-panel">
          <h2>Create Account</h2>
          <p className="subtitle">Fill in the details to get started</p>

          <form className="auth-form">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="signup-firstname">First name</label>
                <input
                  id="signup-firstname"
                  type="text"
                  placeholder="First name"
                    ref={firstName}
                />
              </div>

              <div className="input-group">
                <label htmlFor="signup-lastname">Last name</label>
                <input
                  id="signup-lastname"
                  type="text"
                  placeholder="Last name"
                    ref={lastName}
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="Enter your email"
                 ref={email}
              />
            </div>

            <div className="input-group">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                type="password"
                placeholder="Create password"
                ref={password}
              />
            </div>

            <div className="input-group">
              <label htmlFor="signup-confirm-password">Confirm password</label>
              <input
                id="signup-confirm-password"
                type="password"
                placeholder="Confirm password"
                ref={confirmPassword}
              />
            </div>

            <label className="checkbox-wrap terms">
              <input type="checkbox" />
              <span>I agree to the Terms and Privacy Policy</span>
            </label>

             

            <button type="button" className="primary-btn"
                onClick={() => {
                    getUserData(firstName, lastName, email, password, confirmPassword);
                  }}
            >
              Sign Up
            </button>
          </form>

          <p className="switch-text">
            Already have an account? <Link to="/">Sign in</Link>
          </p>
        </div>

        <div className="auth-illustration">
          <span className="badge">Join us</span>
          <h1>Start your journey</h1>
          <p>
            Build your profile, connect with people, and grow with us every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
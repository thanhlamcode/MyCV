import React, { useState } from "react";
import "./Auth.css";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth-container">
      <div
        className={`auth-card ${isSignIn ? "sign-in-mode" : "sign-up-mode"}`}
      >
        <div className="left-side">
          {isSignIn ? (
            <div className="toggle-container">
              <h2>Hello, Friend!</h2>
              <p>Register to access all features</p>
              <button className="toggle-btn" onClick={toggleAuthMode}>
                SIGN UP
              </button>
            </div>
          ) : (
            <form className="sign-up-form">
              <h1>Create Account</h1>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>SIGN UP</button>
            </form>
          )}
        </div>
        <div className="right-side">
          {isSignIn ? (
            <form className="sign-in-form">
              <h1>Sign In</h1>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>SIGN IN</button>
            </form>
          ) : (
            <div className="toggle-container">
              <h2>Welcome Back!</h2>
              <p>Sign in to continue</p>
              <button className="toggle-btn" onClick={toggleAuthMode}>
                SIGN IN
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;

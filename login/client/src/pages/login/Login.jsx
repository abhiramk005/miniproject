import React from "react";
import "./Login.css"; // Import the CSS file

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />

          <label>Password</label>
          <input type="password" placeholder="Enter Password" />

          <button className="login-btn">Login</button>
        </form>

        <p className="register-text">Don't have an account?</p>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "./Login.css"; // Import the CSS file

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>UserID</label>
          <input type="email" placeholder="Enter userID" />

          <label>Password</label>
          <input type="password" placeholder="Enter Password" />

          <button className="login-btn">Login</button>
        </form>
        <button className="register-btn">Register</button>
      </div>
    </div>
  );
}

export default Login;

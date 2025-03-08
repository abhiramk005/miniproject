import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log("Sending data:", { name, email, password }); // Debugging
    
      axios.post(
        'http://localhost:4000/register', 
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      )
        .then(result => {
          console.log("Response:", result);
          navigate('/login');
        })
        .catch(err => console.error("Error:", err.response ? err.response.data : err.message));
    };
    

    return(
        <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>

          <label>Email</label>
          <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />

          <button className="register-btn">Register</button>
        </form>

        <p className="login-text">Already Have an Account?</p>
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </div>
    )
}

export default Signup;
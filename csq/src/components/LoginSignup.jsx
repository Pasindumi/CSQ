import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginSignup.css';

import user_icon from '../components/assets/name.png';
import email_icon from '../components/assets/email.png';
import password_icon from '../components/assets/password.png';

const LoginSignup = () => {
  const [formData, setFormData] = useState({ user: '', email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      alert(response.data); 
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User Icon" />
          <input
            type="text"
            name="user"
            placeholder="Enter Your Name"
            value={formData.user}
            onChange={handleInputChange}
          />
        </div>

        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="forgot_password">Lost Password? <span>Click Here!</span></div>
      <div>
        <button className="signup" onClick={handleSignup}>Sign Up</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default LoginSignup;

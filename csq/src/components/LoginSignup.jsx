import React from 'react';
import '../styles/LoginSignup.css';

import user_icon from '../components/assets/name.png';
import email_icon from '../components/assets/email.png';
import password_icon from '../components/assets/password.png';

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="user" placeholder='Enter Your Name'/>
        </div>

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Enter Your Email' />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Enter Your Password'/>
        </div>
      </div>
                  <div>
                  <button className="signup">Sign Up</button>
                  <button className="login">Login</button>
                  </div>


    </div>
  );
};

export default LoginSignup;

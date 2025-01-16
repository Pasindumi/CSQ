import React, { useState } from 'react'
import './LoginSignup.css'




import user_icon from '../Assets/name.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


const LoginSignup = () => {

         const[action, setAction] = useState("Sign Up");



  return (
    <div className='container'>
         <div className='header'>
                  <div className="text">{action}</div>
                  <div className="underline"></div>
         </div>
         <div className="inputs">
                  <div className="input">
                           <img src={user_icon}  alt="" />
                           <input type="user" placeholder='Enter Your Name'/>
                  </div>

                  <div className="input">
                           <img src={email_icon}  alt="" />
                           <input type="email" placeholder='Enter Your E-Mail'/>
                  </div>

                  <div className="input">
                           <img src={password_icon} alt="" />
                           <input type="password" placeholder='Enter Your Password' />
                  </div>
         </div>
         <div className="forgot_password">Lost Password? <span> Click Here! </span></div>
         <div className="submit_buttons">
                  <div className={action==="Login"?"Sumbit chng": "submit"}>Sign Up</div>
                  <div className={action==="Sign Up"?"Sumbit chng": "submit"}>Login</div>
         </div>
         </div>

        
  )
}
export default LoginSignup
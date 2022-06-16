import React from 'react'
import "./Register.css"

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Mahoroba</h3>
                <span className='loginDesc'>Great and splendid land</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <p className='loginMsg'>Create your account</p>
                    <input type="text" className='loginInput' placeholder='Username'/>
                    <input type="text" className='loginInput' placeholder='Email'/>
                    <input type="text" className='loginInput' placeholder='Password'/>
                    <input type="text" className='loginInput' placeholder='Password (Confirm)'/>
                    <button className='loginButton'>Sign up</button>
                    <button className='registerButton'>Create your account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

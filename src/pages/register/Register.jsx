import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Register.css"

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirm = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //パスワードと確認用パスワードの照合
        if(password.current.value !== passwordConfirm.current.value) {
            passwordConfirm.current.setCustomValidity("パスワードが違います")
        } else {
            try {
                //regsterAPI
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value
                }
                await axios.post("/auth/register", user);
                navigate("/login")
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Mahoroba</h3>
                <span className='loginDesc'>Great and splendid land</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e) => handleSubmit(e)} >
                    <p className='loginMsg'>Create your account</p>
                    <input 
                        type="username" 
                        className='loginInput' 
                        placeholder='Username'
                        required
                        ref={username}
                    />
                    <input
                        type="email" 
                        className='loginInput' 
                        placeholder='Email'
                        required
                        ref={email}
                    />
                    <input
                        type="password" 
                        className='loginInput' 
                        placeholder='Password'
                        required
                        minLength="6"
                        ref={password}
                    />
                    <input 
                        type="password" 
                        className='loginInput' 
                        placeholder='Password (Confirm)'
                        required
                        minLength="6" 
                        ref={passwordConfirm}
                    />
                    <button className='loginButton' type='submit'>Sign up</button>
                    <button className='registerButton'>Create your account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

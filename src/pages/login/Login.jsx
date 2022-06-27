import React from 'react'
import { useContext } from 'react';
import { useRef } from 'react'
import { loginCall } from '../../dispatch';
import { AuthContext } from '../../states/AuthContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Login.css"

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email.current.value)
        // console.log(password.current.value)
        loginCall(
            {
                email: email.current.value,
                password: password.current.value, 
            },dispatch
        )
    }

    console.log(user)

    return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Mahoroba</h3>
                <span className='loginDesc'>Great and splendid land</span>
                <a 
                    href='https://github.com/misakiishihara/mahoroba-f' 
                    target='_blank'
                    className='githubicon'
                >
                    github
                    <GitHubIcon />
                </a>
                
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                    <p className='loginMsg'>Login</p>
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
                    <button className='loginButton'>Login</button>
                    <span className="loginForgot">Forgot password ?</span>
                    <button className='registerButton'>Create your account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

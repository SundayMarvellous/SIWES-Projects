import React from 'react';
import {ReactComponent as Movieicon} from '../assets/Movie.icon.svg';
import { useNavigate } from "react-router-dom";



function Login() {
    const navigate = useNavigate();
    const handleToSignUp = () => {navigate('/signup')};
    const handleToHome = () => {navigate('/home')};
  return (
    <div className='Login'>
        <div className='FormContainer'>
            <Movieicon className='movieicon'/>
            <div className='Form'>
                <h2>Login</h2>
                <input type='email'placeholder='Email address' className='Email input'/>
                <input type='password' placeholder='Password'className='Password input'/>
                <button type='submit' onClick={handleToHome}>Login to your account</button>
                <p>Don't have an account ? 
                <span className='Formlink' onClick={handleToSignUp}>  SignUp</span></p>
            </div>

        </div>
    </div>
  )
}

export default Login
import React from 'react';
import {ReactComponent as Movieicon} from '../assets/Movie.icon.svg';
import { useNavigate } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();
    const handleToLogin = () => {navigate('/')}
  return (
    <div className='SignUp'>
        <div className='FormContainer'>
            <Movieicon className='movieicon'/>
            <div className='Form'>
                <h2>Sign Up</h2>
                <input type='email'placeholder='Email address' className='Email input'/>
                <input type='password' placeholder='Password'className='Password input'/>
                <input type='password' placeholder='Repeat Password'className='Password input'/>
                <button type='submit' onClick={handleToLogin}>Create an account</button>
                <p>Already have an account ?  
                    <span className='Formlink' onClick={handleToLogin}>  Login</span>
                </p>
            </div>

        </div>
    </div>
  )
}

export default SignUp
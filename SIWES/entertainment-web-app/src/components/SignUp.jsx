import React, {useState} from 'react';
import {ReactComponent as Movieicon} from '../assets/Movie.icon.svg';
import { useNavigate } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const handleToSignUp = () => {
    navigate('/');
  };
  const handleToHome = () => {
    if (email.trim() === '' || password.trim() === '') {
      setShowError(true);
    } 
    else {
      // Perform your login logic here
      navigate('/home');
    }
  };
  return (
    <div className='SignUp'>
        <div className='FormContainer'>
            <Movieicon className='movieicon'/>
            <div className='Form'>
                <h2>Sign Up</h2>
                <div className='InputContainer'>
                <input
                    type='email'
                    placeholder='Email address'
                    className={`Email input ${showError && email.trim() === '' ? 'error' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {showError && email.trim() === '' && <p className='ErrorMessage'>Can't be empty</p>}
                </div>
                <div className='InputContainer'>
                <input
                    type='password'
                    placeholder='Password'
                    className={`Password input ${showError && password.trim() === '' ? 'error' : ''}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                    {showError && password.trim() === '' && <p className='ErrorMessage'>Can't be empty</p>}
                </div>
                <div className='InputContainer'>
                <input
                    type='password'
                    placeholder='Repeat Password'
                    className={`Password input ${showError && password.trim() === '' ? 'error' : ''}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                    {showError && password.trim() === '' && <p className='ErrorMessage'>Can't be empty</p>}
                </div>
                <button type='submit' onClick={handleToHome}>
                    Create an account
                </button>
                <p>
                Already have an account?{' '}
                <span className='Formlink' onClick={handleToSignUp}>
                    Login
                </span>
                </p>
            </div>

        </div>
    </div>
  )
}

export default SignUp

 
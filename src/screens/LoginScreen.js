import React, { useState } from 'react';
import './Loginscreen.css';
import SignInScreen from './SignInScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    // Basic email validation pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      setSignIn(true);
    } else {
      alert('Invalid email address');
    }
  };

  return (
    <div className='loginScreen'>
      <div className='loginScreen__background'>
        <img
          className='loginScreen_logo'
          src='https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png'
          alt=''
        />
        <button className='loginScreen_button' onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className='loginScreen_gradient' />
      </div>
      <div className='loginScreen_body'>
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginScreen_input'>
              <form>
                <input
                  type='email'
                  placeholder='email_address'
                  value={email}
                  onChange={handleEmailChange}
                  required
                  pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                />
                <button className='loginScreen_getstarted' onClick={handleGetStarted}>
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;

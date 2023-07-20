import React, { useRef, useState } from 'react';
import './signinscreen.css';
import { auth } from '../firebase';

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [passwordError, setPasswordError] = useState(false);

  const handlePasswordChange = () => {
    const password = passwordRef.current.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  const register = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;

    if (passwordError || password.length < 8) {
      alert('Password does not meet the requirements.');
      return;
    }

    auth
      .createUserWithEmailAndPassword(emailRef.current.value, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const isInvalid = passwordError || !passwordRef.current?.value;

  return (
    <div className='signinScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input
          ref={passwordRef}
          placeholder='Password'
          type='password'
          onChange={handlePasswordChange}
          style={{ borderColor: passwordError ? 'red' : 'inherit' }}
        />
        {passwordError && passwordRef.current?.value && (
          <p className='password_error'>Password does not meet the requirements</p>
        )}
        <button type='submit' onClick={signIn} >
          Sign In
        </button>
        <h4>
          <span className='signinscreen_gray'>New to Netflix?</span>
          <span className='signup_link' onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;

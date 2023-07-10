import React from 'react'
import './signinscreen.css'

function SignInScreen() {
    const register = (e) =>{
        e.preventDefault();
    }

    const signIn =(e) =>{
        e.preventDefault();
    }
  return (
    <div className='signinScreen'>
    <form>
    <h1>Sign In</h1>
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4>
        <span className='signinscreen_gray'>New ro Netflix?</span> 
        <span className='signup_link' onClick={register}> Sign up now.</span></h4>
    </form>
    </div>
  )
}

export default SignInScreen

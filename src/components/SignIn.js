import React, { useState } from 'react';
import { signInWithGoogle } from '../firebase';



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEmail("")
    setPassword("")
  }

  function handleEmailChange(event) {
    const {value} = event.target
    
    setEmail(value)
  }

  function handlePasswordChange(event) {
    const {value} = event.target
    
    setPassword(value)
  }

  return (
    <form onSubmit={handleSubmit} className='signIn-container'>
      <h2 className='signIn-header'>Sign In</h2>
      <input 
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className='auth-input'
        />
        <input 
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        className='auth-input'
        />
        <input type="submit" value="Sign In" className='auth-button'/>
        <button 
          onClick={signInWithGoogle}
          className='auth-button'
        >
        Sign In With Google
        </button>
    </form>
  )
}

export default SignIn;
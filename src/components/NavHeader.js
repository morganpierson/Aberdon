import React from 'react';
import { Link } from '@reach/router'

const HeaderNav = () => {
  return (
    <div className='header-container'>
      <Link to='/' style={{"textDecoration": "none"}}>
      <h1 className='text'>ACRE</h1>
      </Link>
      
      <div className='nav-items'>
        <Link className='nav-item' to='/authentication/signup'>Sign up</Link>
        <Link className='nav-item' to='/authentication/login'>Log in</Link>
        <Link className='nav-item' to='/about-us'>About us</Link>
      </div>
    </div>
  )
}

export default HeaderNav
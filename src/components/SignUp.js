import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../firebase';
import { navigate } from '@reach/router'

class SignUp extends Component {
  state = { displayName: '', email: '', password: '' };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password, displayName } = this.state;

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)

      await user.updateProfile({ displayName })

      await createUserProfileDocument(user, {displayName})
      await navigate(`/user/${user.uid}`)
    } catch(error) {
      console.error(error);
    }

    this.setState({ displayName: '', email: '', password: '' });
  };

  render() {
    const { displayName, email, password } = this.state;

    return (
      <form className="signIn-container" onSubmit={this.handleSubmit}>
        <h2 className='signIn-header'>Sign Up</h2>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={this.handleChange}
          className='auth-input'
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          className='auth-input'
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleChange}
          className='auth-input'
        />
        <input type="submit" value="Sign Up" className='auth-button'/>
      </form>
    );
  }
}

export default SignUp;

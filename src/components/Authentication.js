import React, {useContext} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp'
import { UserContext } from '../providers/UserProvider'

const Authentication = ({type}) => {
  
  return ( 
    <div>
      {type === 'login' ? <SignIn /> : <SignUp />}
    </div>
    );
}

export default Authentication;
import React, { useEffect, useState, useContext } from 'react';

import moment from 'moment';
import { signOut } from '../firebase';
import { UserContext } from '../providers/UserProvider'

const CurrentUser = (props) => {
  const [userData, setUserData] = useState(false);
  const user = useContext(UserContext)

  useEffect(() => {
    setUserData(true)
    console.log("user ", user)
  }, [user])
  if(!user) return <div>Loading...</div>
  return(
    
    <div>
    <div>
      {user.displayName}
      <img src={user.photoURL} alt={user.displayName}/>
      <div>{user.email}</div>
      <div>{moment(user.createdAt).calendar()}</div>
    </div>
    <div>   
        <button onClick={signOut}>Sign Out</button>
      </div>
  </div>
    
  ) 
}


// CurrentUser.defaultProps = {
//   displayName: 'Bill Murray',
//   email: 'billmurray@mailinator.com',
//   photoURL: 'https://www.fillmurray.com/300/300',
//   createdAt: new Date(),
// };

export default CurrentUser;
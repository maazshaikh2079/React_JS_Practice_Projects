import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext.js'

function Profile() {

  const { user } = useContext(UserContext);

  if (!user?.username?.trim() || !user?.password?.trim()) {
    return <h2>Not logged-in</h2>;
  }

  return (
    <div>
        <h2>Profile: {user.username}</h2>
    </div>
  )
}

export default Profile

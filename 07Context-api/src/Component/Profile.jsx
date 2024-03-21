import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Profile() {

    const {user} =useContext(UserContext)

    if(!user) return <div>Please Login</div>


  return (
    <div>Welcome {user.username}|| password:{user.password}||{user.password1}</div>
  )
}

export default Profile;
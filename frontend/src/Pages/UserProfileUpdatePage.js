
import React from 'react'
import Userdashboard from '../features/Userdashboard/components/Userdashboard'
import UserProfile from '../features/UserUpdate/Components/UserProfile'
const UserProfileUpdatePage = () => {
  return (
    <div>
      <Userdashboard>
        <UserProfile></UserProfile>
      </Userdashboard>
    </div>
  )
}

export default UserProfileUpdatePage

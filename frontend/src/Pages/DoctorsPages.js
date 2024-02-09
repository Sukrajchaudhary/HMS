import React from 'react'
import Doctors from '../features/Doctors/components/Doctors'
import Userdashboard from '../features/Userdashboard/components/Userdashboard'
const DoctorsPages = () => {
  return (
    <div>
      <Userdashboard>
        <Doctors></Doctors>
      </Userdashboard>
    </div>
  )
}

export default DoctorsPages

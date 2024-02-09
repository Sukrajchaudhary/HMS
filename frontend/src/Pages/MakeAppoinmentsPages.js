import React from 'react'
import Userdashboard from '../features/Userdashboard/components/Userdashboard'
import MakeAppoinments from '../features/Appoinments/Components/MakeAppoinments'
const MakeAppoinmentsPages = () => {
  return (
    <div>
      <Userdashboard>
        <MakeAppoinments></MakeAppoinments>
      </Userdashboard>
    </div>
  )
}

export default MakeAppoinmentsPages

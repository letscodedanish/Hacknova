import React from 'react'
import Sidebar from '../Components/Sidebar'
import Toolbar from '../Components/Toolbar'
import DoctorGrid from '../Components/DoctorGrid'
import Alan from '../Components/Alan'

const ChooseDoctor = () => {
  return (
    <>
      <Alan style={{ position: 'fixed' }} />
      <Toolbar />
      <Sidebar>
        <DoctorGrid />
      </Sidebar>
    </>
  )
}

export default ChooseDoctor

import React from 'react'
import Sidebar from '../Components/Sidebar'
import Toolbar from '../Components/Toolbar'
import SpecialityGrid from '../Components/SpecialityGrid'
import Alan from '../Components/Alan'

const ChooseSpeciality = () => {
  return (
    <>
      <Alan style={{ position: 'fixed' }} />
      <Toolbar />
      <Sidebar>
        <SpecialityGrid />
      </Sidebar>
    </>
  )
}

export default ChooseSpeciality
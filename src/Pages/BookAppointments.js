import React from 'react'
import Sidebar from '../Components/Sidebar'
import Toolbar from '../Components/Toolbar'
import SpecialityGrid from '../Components/SpecialityGrid'
import Alan from '../Components/Alan'
import Scheduler from '../Components/Scheduler'
import Events from '../Components/Events'

const BookAppointments = () => {
  return (
    <>
      <Alan style={{ position: 'fixed' }} />
      <Toolbar />
      <Sidebar>
        <Events />
        {/* <SpecialityGrid /> */}
        {/* <Scheduler /> */}
      </Sidebar>
    </>
  )
}

export default BookAppointments

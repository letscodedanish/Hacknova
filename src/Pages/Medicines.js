import React from 'react'
import Sidebar from '../Components/Sidebar'
import Toolbar from '../Components/Toolbar'
import MedsMarketplace from '../Components/MedsMarketplace'
import Alan from '../Components/Alan'


const ChooseDoctor = () => {
  return (
    <>
      <Alan style={{ position: 'fixed' }} />
      <Toolbar />
      <Sidebar>
        Medicines marketplace
        {/* <MedsMarketplace /> */}
      </Sidebar>
    </>
  )
}

export default ChooseDoctor

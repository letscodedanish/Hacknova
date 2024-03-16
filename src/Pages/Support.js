import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Sidebar from '../Components/Sidebar'
import Toolbar from '../Components/Toolbar'
import Deposits from '../Components/Deposits'
import Alan from '../Components/Alan'
import Connect from '../Components/Connect'

const Support = () => {
  return (
    <>
      <Alan style={{ position: 'fixed' }} />
      <Toolbar />
      <Sidebar>
        <Connect />
      </Sidebar>
    </>
  )
}

export default Support

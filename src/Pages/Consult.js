import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Sidebar from "../Components/Sidebar";
import Toolbar from "../Components/Toolbar";
import Deposits from "../Components/Deposits";
import Card from "../Components/ConsultCard";
import Specialities from '../Components/Specialities'
import HowItWorks from '../Components/HowItWorks'
import Alan from "../Components/Alan"


const Consult = () => {
  const fragment = <>Consult</>
  return (
    <>
      <Alan style={{ position: 'fixed' }} />
      <Toolbar />
      <Sidebar>
        <Card />
        <Specialities />
        <HowItWorks />
      </Sidebar>
    </>
  )
}

export default Consult
import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import VerifiedIcon from '@mui/icons-material/Verified'
import FeedIcon from '@mui/icons-material/Feed'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'

import docImg from '../Images/doctor.jpg'
import '../Assets/Blob.css'



const card = (
  <React.Fragment>
    <div
      style={{
        // width: '100%',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <CardContent sx={{ height: '280px', paddingLeft: '70px' }}>
        <div style={{ width: '100%' }}>
          <Typography
            sx={{ fontSize: 14, margin: '20px' }}
            color="text.secondary"
            gutterBottom
          ></Typography>

          <Typography variant="h3" component="div" className = "">
            Doctor on Call!
            
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary"></Typography>
          <Typography variant="h6">
            Get medical facilities at the comfort of your home.
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="h6">200+ Doctors online now.</Typography>
            <div class="blob" />
          </div>

          <Button variant="contained" style={{ backgroundColor: 'black', marginTop: '15px' }} href='/chooseSpeciality' className = "bg-black" >
            Consult Now
          </Button>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: '20px',
            }}
          >
            <VerifiedIcon fontSize="small" />
            <Typography
              variant="body2"
              color="#9696A3"
              sx={{ padding: '2px 6px' }}
            >
              Verified Doctors
            </Typography>

            <FeedIcon fontSize="small" />
            <Typography
              variant="body2"
              color="#9696A3"
              sx={{ padding: '2px 6px' }}
            >
              Digital Prescription
            </Typography>

            <LaptopChromebookIcon fontSize="small" />
            <Typography
              variant="body2"
              color="#9696A3"
              sx={{ padding: '2px 6px' }}
            >
              Book Appointments
            </Typography>
          </div>
        </div>
      </CardContent>
      <div style={{ paddingRight: '260px' }}></div>
      <div
        style={{
          padding: '10px',
          width: '10%',
          float: 'right',
          paddingTop: '30px',
        }}
      >
        <img src={docImg} width={330} height={220} alt="doctor" />
      </div>
    </div>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
)

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  )
}

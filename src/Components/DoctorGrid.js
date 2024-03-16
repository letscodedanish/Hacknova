import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import VerifiedIcon from '@mui/icons-material/Verified'
import Rating from '@mui/material/Rating'

import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Tasks = [
  {
    id: 0,
    image:
      'https://t4.ftcdn.net/jpg/01/85/39/55/360_F_185395570_wUzaCFaFP6Nm7NxWvk5xCMLAdh12nSCZ.jpg',
    name: 'Sarthak Bhan',
    degree: 'MBBS',
    experience: '13 Years Experience Overall',
    location: 'Andheri West, Mumbai',
    timing: 'Mon-Sat 9:00am - 4:00pm',
    price: '500',
    rating: '4.5',
    btnTxt: 'Consult Now',
  },
  {
    id: 1,
    image:
      'https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.jpg?s=612x612&w=0&k=20&c=nD_1Tn11kWcMZwZfnyA-lYAvNKcBeoEK_KLObBnN6Jg=',
    name: 'Lokita Varma',
    degree: 'MD, MBBS',
    experience: '17 Experience Overall',
    location: 'Lower Parel, Mumbai',
    timing: 'Mon-Sat 9:00am - 3:00pm',
    price: '300',
    rating: '4.2',
    btnTxt: 'Consult Now',
  },
  {
    id: 2,
    image:
      'https://thumbs.dreamstime.com/b/male-doctor-arms-folded-cheerful-young-56745126.jpg',
    name: 'Raman Kumar',
    degree: 'MD, MBBS',
    experience: '9 Experience Overall',
    location: 'Kandivali, Mumbai',
    timing: 'Mon-Sat 9:00am - 3:00pm',
    price: '450',
    rating: '2.6',
    btnTxt: 'Consult Now',
  },
  {
    id: 3,
    image:
      'https://st.depositphotos.com/1258191/3501/i/600/depositphotos_35019551-stock-photo-female-doctor.jpg',
    name: 'Sheetal Mishra',
    degree: 'MD, MBBS',
    experience: '11 Experience Overall',
    location: 'Malad, Mumbai',
    timing: 'Mon-Sat 9:00am - 3:00pm',
    price: '550',
    rating: '4.7',
    btnTxt: 'Consult Now',
  },
  {
    id: 4,
    image:
      'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000',
    name: 'Vaishnavi Yaade',
    degree: 'MBBS',
    experience: '15 Experience Overall',
    location: 'Dadar, Mumbai',
    timing: 'Mon-Sat 9:00am - 3:00pm',
    price: '510',
    rating: '3.1',
    btnTxt: 'Consult Now',
  },
  {
    id: 5,
    image:
      'https://thumbs.dreamstime.com/b/asian-male-doctor-holding-medical-chart-hospital-wearing-mask-173720135.jpg',
    name: 'Kush Maniar',
    degree: 'MBBS',
    experience: '12 Experience Overall',
    location: 'Dadar, Mumbai',
    timing: 'Mon-Sat 9:00am - 3:00pm',
    price: '550',
    rating: '4.4',
    btnTxt: 'Consult Now',
  },
]

export default function ResponsiveGrid() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Tasks.map((task) => {
          return (
            <Paper
              elevation={3}
              sx={{ width: 370, height: 370, margin: 2, borderRadius: '15px' }}
            >
              {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
              <div
                style={{
                  marginLeft: '35px',
                  marginTop: '20px',
                }}
              >
                <img src={task.image} height={150} width={300} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography variant="h6" color="initial">
                    <b>Dr. {task.name}</b>
                  </Typography>
                  <VerifiedIcon
                    style={{
                      marginLeft: '6px',
                      marginTop: '4px',
                      color: '#0550C9',
                    }}
                  />
                </div>
                <Typography variant="body1" color="initial">
                  {task.degree}
                </Typography>
                <Typography
                  sx={{ marginTop: '5px' }}
                  variant="body2"
                  color="#9696A3"
                >
                  {task.experience}
                </Typography>
                <Typography
                  sx={{ marginTop: '5px' }}
                  variant="body2"
                  color="initial"
                >
                  {task.location}
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Typography
                    sx={{ marginTop: '5px' }}
                    variant="body2"
                    color="initial"
                  >
                    {task.timing}
                  </Typography>
                  <Typography
                    sx={{ marginLeft: '80px', marginTop: '5px' }}
                    variant="body2"
                    color="initial"
                  >
                    Rs. {task.price}
                  </Typography>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Rating
                    sx={{ marginTop: '10px' }}
                    name="read-only"
                    value={task.rating}
                    readOnly
                  />
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#0550C9',
                      marginTop: '10px',
                      marginLeft: '100px',
                      float: 'right',
                    }}
                    onClick={handleClickOpen}
                  >
                    Consult
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {
                        'The Doctor is available right now. Would you like to talk now or book an appointment?'
                      }
                    </DialogTitle>
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        href="https://console.agora.io/invite?sign=0535b61d1e6d22ab32e27bd16b1f181e%253A4db31330d68186d59fb2868a1b09b4589b7d13be79eb0e425ad4c4313cb699e0"
                        target="_blank"
                      >
                        Talk Now
                      </Button>
                      <Button onClick={handleClose} autoFocus href="/bookAppt">
                        Book Appointment
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </Paper>
          )
        })}
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}></Grid>
        ))}
      </Grid>
    </Box>
  )
}

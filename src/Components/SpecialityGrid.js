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
    image: 'https://www.venkateshwarhospitals.com/images/icons/orthopedics.jpg',
    taskName: 'Orthopedics',
    btnTxt: 'Consult Now',
  },
  {
    id: 1,
    image:
      'https://www.venkateshwarhospitals.com/images/icons/obstetrics-and-gynaecology.jpg',
    taskName: 'Gynecology',
    btnTxt: 'Consult Now',
  },
  {
    id: 2,
    image:
      'https://www.venkateshwarhospitals.com/images/icons/ophthalmology.jpg',
    taskName: 'Opthalmology',
    btnTxt: 'Consult Now',
  },
  {
    id: 3,
    image: 'https://www.venkateshwarhospitals.com/images/icons/pulmonology.jpg',
    taskName: 'Pulmonology',
    btnTxt: 'Consult Now',
  },
  {
    id: 4,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbHmc06bVP_lGjGBiHZdPiFCJQYRi-DbNGg&usqp=CAU',
    taskName: 'Radiology',
    btnTxt: 'Consult Now',
  },
  {
    id: 5,
    image:
      'https://www.venkateshwarhospitals.com/images/icons/plastic-reconstructive-and-cosmetic-surgery.jpg',
    taskName: 'Facial Surgery',
    btnTxt: 'Consult Now',
  },
  {
    id: 6,
    image:
      'https://www.venkateshwarhospitals.com/images/icons/gasteroenterology.jpg',
    taskName: 'Gastroentology',
    btnTxt: 'Consult Now',
  },
  {
    id: 7,
    image:
      'https://www.venkateshwarhospitals.com/images/icons/cardio-thoracic.jpg',
    taskName: 'Cardiology',
    btnTxt: 'Consult Now',
  },
  {
    id: 8,
    image:
      'https://www.venkateshwarhospitals.com/images/icons/paediatrics-and-neonatology.jpg',
    taskName: 'Paediatrics',
    btnTxt: 'Consult Now',
  },
]

export default function ResponsiveGrid() {
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
              sx={{ width: 370, height: 195, margin: 2, borderRadius: '15px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                  <img src={task.image} height={130} width={130} />
                </div>
                <div >
                  <Typography
                    variant="h6"
                    color="initial"
                    sx={{ marginTop: '30px', marginLeft: '45px' }}
                  >
                    <b>{task.taskName}</b>
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/chooseDoc"
                    sx={{
                      marginTop: '30px',
                      marginLeft: '45px',
                      backgroundColor: '#EBEDF2',
                      color: '#12295C',
                    }}
                  >
                    <b>Proceed</b>
                  </Button>
                </div>
              </div>
            </Paper>
          )
        })}
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            
          
         
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

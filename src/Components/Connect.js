import { TextField, Grid, Button } from '@mui/material'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import LockIcon from '@mui/icons-material/Lock'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import UpdateIcon from '@mui/icons-material/Update'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Container from '@mui/material/Container'
import FAQs from './Faqs'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme();


function Connect() {
  const [person, setPerson] = useState({
    email: '',
    name: '',
    lastname: '',
    phonenumber: '',
  })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = () => {
    console.log(person)
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ThemeProvider theme={theme}>
          <Container
            component="main"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            {/* <CssBaseline /> */}
            <Box
              sx={{
                // marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                maxWidth: '50%',
                marginRight: '20px',
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar> */}
              <Paper sx={{ padding: '20px' }}>
                <Typography component="h1" variant="h5" color="#0550C9">
                  <b>Post a Query</b>
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="number"
                        label="Phone Number"
                        name="number"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="Query"
                        label="Query"
                        type="query"
                        id="query"
                        autoComplete="new-query"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {/* <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    /> */}
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Post
                  </Button>
                  <Grid container justifyContent="flex-end"></Grid>
                </Box>
              </Paper>
            </Box>
            <Box>
              <div>
                <Paper
                  sx={{ padding: '20px', width: '600px', height: '390px' }}
                >
                  <Typography variant="h5" color="#0550C9">
                    <b>WeCare Guarantees</b>
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '20px',
                    }}
                  >
                    <LockIcon sx={{ color: '#12295C' }} />
                    <Typography
                      sx={{ paddingLeft: '20px' }}
                      variant="body1"
                      color="initial"
                    >
                      100% privacy protection
                    </Typography>
                  </div>
                  <Typography
                    sx={{ paddingLeft: '70px' }}
                    variant="body1"
                    color="initial"
                  >
                    We maintain your privacy and data confidentiality.
                  </Typography>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '20px',
                      paddingTop: '30px',
                    }}
                  >
                    <LocalHospitalIcon sx={{ color: '#12295C' }} />
                    <Typography
                      sx={{ paddingLeft: '20px' }}
                      variant="body1"
                      color="initial"
                    >
                      Verified Doctors
                    </Typography>
                  </div>
                  <Typography
                    sx={{ paddingLeft: '70px' }}
                    variant="body1"
                    color="initial"
                  >
                    All Doctors go through a stringent verification process.
                  </Typography>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      padding: '20px',
                      paddingTop: '30px',
                    }}
                  >
                    <UpdateIcon sx={{ color: '#12295C' }} />
                    <Typography
                      sx={{ paddingLeft: '20px' }}
                      variant="body1"
                      color="initial"
                    >
                      Quick responses
                    </Typography>
                  </div>
                  <Typography
                    sx={{ paddingLeft: '70px' }}
                    variant="body1"
                    color="initial"
                  >
                    You will receive responses to your health queries within
                    6-24 hours.
                  </Typography>
                </Paper>
              </div>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
      <FAQs />
    </>
  )
}

export default Connect

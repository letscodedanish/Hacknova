// import { Grid } from '@material-ui/core'
import Grid from '@mui/material/Grid'
import { Card, CardContent, Paper, Chip, Button } from '@mui/material'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ViewState } from '@devexpress/dx-react-scheduler';
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import {
    Scheduler,
    DayView,
    Appointments,
    MonthView,
} from '@devexpress/dx-react-scheduler-material-ui';

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
const currentDate = `${year}-${month}-${date}`;

const EventsData = [
  {
    id: 0,
    startTime: '2023-01-21T09:45',
    endTime: '2023-01-21T11:00',
    date: '21-01-2023'
  },
  {
    id: 1,
    startTime: '2023-01-23T11:15',
    endTime: '2023-01-23T13:00',
    date: '23-01-2023'
  },
  {
    id: 2,
    startTime: '2023-01-21T13:30',
    endTime: '2023-01-21T15:00',
    date: '21-01-2023'
  },
  {
    id: 3,
    startTime: '2023-01-22T15:30',
    endTime: '2023-01-22T17:00',
    date: '22-01-2023'
  },
  {
    id: 4,
    startTime: '2023-01-21T09:45',
    endTime: '2023-01-21T11:00',
    date: '21-01-2023'
  },
]

function Events() {
    const [addedEvents, setAddedEvent] = useState([])
    const [mapEvents, setMapEvents] = useState([])

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
      setOpen(true)
    }

    const handleClose = () => {
      setOpen(false)
    }

    const addEvent = (id) => {
        const filteredEvent = EventsData.filter((event) => event.id === id)
        setAddedEvent([...addedEvents, filteredEvent])
        setMapEvents([...mapEvents, { startDate: filteredEvent[0].startTime, endDate: filteredEvent[0].endTime, title: filteredEvent[0].eventName }])
    }
    console.log(addedEvents);
    console.log(mapEvents);
    return (
      <>
        <div style={{ marginBottom: '3%' }}>
          <Typography
            variant="h6"
            color="initial"
            sx={{ paddingBottom: '10px' }}
          >
            {' '}
            Available Date and Time Slots for booking:
          </Typography>
          <Grid container columns={10} spacing={6}>
            {EventsData.map((event) => {
              let start = event.startTime.split('T')[1]
              let end = event.endTime.split('T')[1]
              let time = `${start}-${end}`
              return (
                <Grid item md={2} key={event.id}>
                  <Grid
                    container
                    sx={{
                      display: 'flex',
                      backgroundColor: 'white',
                      borderRadius: '4px',
                      height: '100%',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '10px',
                      alignContent: 'space-between',
                      // padding: '20px'
                    }}
                  >
                    <Grid item>
                      <Grid container>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                          }}
                        >
                          <div>
                            <Grid item>
                              <h5
                                style={{
                                  margin: '0px',
                                  padding: '7px',
                                  marginTop: '0px',
                                }}
                              >
                                {event.date}
                              </h5>
                            </Grid>
                          </div>
                          <div>
                            <Grid
                              item
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Chip
                                icon={<AccessTimeIcon />}
                                label={time}
                                sx={{ fontSize: '10px' }}
                              />
                            </Grid>
                          </div>
                        </div>
                        <Button
                          style={{
                            fontSize: '10px',
                            backgroundColor: '#0550C9',
                            marginLeft: '65px',
                            marginTop: '10px',
                          }}
                          onClick={() => {
                            addEvent(event.id)
                            handleClickOpen()
                          }}
                          variant="contained"
                        >
                          Book
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </div>
        <Paper sx={{ borderRadius: '20px' }}>
          <Scheduler style={{ borderRadius: '20px' }} data={mapEvents}>
            <ViewState
              style={{ borderRadius: '20px' }}
              currentDate={currentDate}
            />
            <MonthView />
            <Appointments />
          </Scheduler>
        </Paper>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Confirm Appointment?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to confirm and proceed to payment?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={handleClose}
              autoFocus
              href="https://49d3-123-252-147-170.in.ngrok.io/payment"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
}

export default Events
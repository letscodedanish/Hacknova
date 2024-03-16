import * as React from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Title from './Title'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import docImg from '../Images/doctor.jpg'


// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount }
}

const today = new Date()
const yyyy = today.getFullYear()
let hh = today.getHours()
let mm = today.getMinutes()

// if (dd < 10) dd = '0' + dd
// if (mm < 10) mm = '0' + mm
var formattedTime = 0
if (hh>=13) {
  hh = hh-12
  formattedTime = hh + ':' + mm + 'PM'
} else {
  formattedTime = hh + ':' + mm + 'PM'
}

// var formattedTime = hh + ':' + mm

const rowsU = [
  createData(0, 'Dr. Sarthak Bhan', '23 Jan, 2023', '11:15AM', 'Pending'),
  createData(1, 'Dr. Lokita Varma', '25 Jan, 2023', '7:00PM', 'Pending'),
  createData(2, 'Dr. Ishita Goyal', '16 Feb, 2023', '10:00AM', 'Pending'),
  createData(3, 'Dr. Aditya Jain', '1 Mar, 2023', '12 Noon', 'Pending'),
  createData(4, 'Dr. Ruhini Kumari', '15 Mar, 2023', '4:00PM', 'Pending'),
]

const rowsP = [
  createData(0, 'Dr. Lokita Varma', '21 Jan, 2023', formattedTime, 'Visited', 400),
  createData(1, 'Dr. Sarthak Bhan', '6 Dec, 2022', '3:00PM', 'Visited', 500),
  createData(2, 'Dr. Ishita Goyal', '16 Nov, 2022', '10:00AM', 'Visited', 400),
  createData(3, 'Dr. Aditya Jain', '1 Nov, 2022', '12 Noon', 'Visited', 200),
  createData(
    4,
    'Dr. Ruhini Kumari',
    '15 Oct, 2022',
    '4:00PM',
    'Visited',
    350
  ),
]

function preventDefault(event) {
  event.preventDefault()
}

export default function Orders() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <React.Fragment>
      <Title>Upcoming Appointments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Doctor Name</b>
            </TableCell>
            <TableCell>
              <b>Date</b>
            </TableCell>
            <TableCell>
              <b>Time</b>
            </TableCell>
            <TableCell>
              <b>Status</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsU.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell lign="right">{row.paymentMethod}</TableCell>
              {/* <TableCell align="right">{`Rs. ${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
      <Title>Past Appointments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Doctor Name</b>
            </TableCell>
            <TableCell>
              <b>Date</b>
            </TableCell>
            <TableCell>
              <b>Time</b>
            </TableCell>
            <TableCell>
              <b>Status</b>
            </TableCell>
            <TableCell>
              <b>Amount</b>
            </TableCell>
            <TableCell sx={{ paddingLeft: '60px' }}>
              <b>Prescription</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsP.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{`Rs. ${row.amount}`}</TableCell>
              <TableCell>
                <Button
                  sx={{ paddingLeft: '10px' }}
                  variant="text"
                  color="primary"
                  size="small"
                  onClick={handleClickOpen}
                >
                  View Prescription
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {'Prescription'}
                  </DialogTitle>
                  <DialogContent>
                    <img
                      src={
                        'https://49d3-123-252-147-170.in.ngrok.io/api/report'
                      }
                      width={500}
                      height={530}
                      alt="doctor"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

import React from 'react'
import Link from '@mui/material/Link'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Title from './Title'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import docImg from '../Images/doctor.jpg'



function createData(id, name, targetMuscles, duration, action) {
  return { id, name, targetMuscles, duration, action }
}

const rows = [
  createData(0, 'Push Ups', 'Shoulders, Triceps, Pectoral Muscles', '10 minutes'),
  createData(
    1,
    'Bicep Curls',
    'Biceps, Muscles at the front of the arms',
    '10 minutes'
  ),
  createData(2,
    'Crunches',
    'internal and external obliques, transversus abdominis, hip flexors',
    '7 minutes'
  ),
  createData(3,
    'Lunges',
    'hamstrings, quadriceps, and calves',
    '8 minutes'
  ),
]

const Exercise = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img
          src={
            'https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }
          height={317}
          width={415}
        />
        <img
          src={
            'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80'
          }
          height={317}
          width={415}
        />
        <img
          src={
            'https://media.istockphoto.com/id/1184835694/photo/group-of-mature-men-and-women-in-class-at-outdoor-yoga-retreat.jpg?s=612x612&w=0&k=20&c=jC5ey5LVDAA_Xosd5EWj61x2RmjN5TsoIlJdCFSES5Y='
          }
          height={317}
          width={415}
        />
      </div>
      {/* <img
        src={
          'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/07/scene2.jpg?w=750'
        }
        height={300}
        // width={410}
      /> */}
      <Paper sx={{ padding: '20px' }}>
        <Title>
          <b>Exercises to perform</b>
        </Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Exercise Name</b>
              </TableCell>
              <TableCell>
                <b>Target Muscles</b>
              </TableCell>
              <TableCell>
                <b>Duration</b>
              </TableCell>
              <TableCell style={{ paddingLeft: '90px' }}>
                <b>Status</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.targetMuscles}</TableCell>
                <TableCell>{row.duration}</TableCell>
                <TableCell style={{ paddingLeft: '50px' }}>
                  <Button
                    href="http://192.168.137.249:5000/cool"
                    variant="text"
                    color="primary"
                  >
                    Start now
                  </Button>
                </TableCell>
                {/* <TableCell align="right">{`Rs. ${row.amount}`}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

export default Exercise
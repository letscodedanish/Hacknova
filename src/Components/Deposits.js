import * as React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Title from './Title'
import Button from '@mui/material/Button'

function preventDefault(event) {
  event.preventDefault()
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title sx={{ color: '#0550C9' }}>Recent Donations</Title>
      <Typography component="p" variant="h4">
        Rs. 400.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 20 January, 2023
      </Typography>
      <div>
        <Button
          href="https://49d3-123-252-147-170.in.ngrok.io/payment/donate/"
          variant="contained"
          sx={{ backgroundColor: '#0550C9' }}
        >
          Donate Now
        </Button>
      </div>
    </React.Fragment>
  )
}

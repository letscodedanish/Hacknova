import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts'
import Paper from '@mui/material/Paper'
import Title from './Title'

// Generate Sales Data
function createData(time, amount) {
  return { time, amount }
}

const data = [
  createData('Monday', 104),
  createData('Tuesday', 96),
  createData('Wednesday', 20),
  createData('Thursday', 134),
  createData('Friday', 188),
  createData('Saturday', 10),
  createData('Sunday', 0),
]

export default function Chart() {
  const theme = useTheme()

  return (
    <React.Fragment>
      {/* <Paper sx={{height: '200px'}}> */}
      <Title sx={{ color: '#0550C9' }}>Fitness Tracker this Week</Title>
      <ResponsiveContainer sx={{ width: '40%' }}>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <Label
            // angle={270}
            // position="left"
            style={{
              textAnchor: 'middle',
              fill: theme.palette.text.primary,
              ...theme.typography.body1,
            }}
          >
            Day of the week
          </Label>
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Calories burnt
            </Label>
          </YAxis>
          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
            sx={{ color: '#0550C9' }}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* </Paper> */}
    </React.Fragment>
  )
}

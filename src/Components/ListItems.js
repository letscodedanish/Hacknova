import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ScienceIcon from '@mui/icons-material/Science'
import DashboardIcon from '@mui/icons-material/Dashboard'
import MedicationIcon from '@mui/icons-material/Medication'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import PeopleIcon from '@mui/icons-material/People'
import HelpIcon from '@mui/icons-material/Help'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import AssignmentIcon from '@mui/icons-material/Assignment'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="/">
      <ListItemIcon>
        <VideoCallIcon sx={{ color: '#12295C' }} />
      </ListItemIcon>
      <ListItemText primary="Consult a Doctor" />
    </ListItemButton>

    <ListItemButton href="/myAccount">
      <ListItemIcon>
        <AccountCircleIcon sx={{ color: '#12295C' }} />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItemButton>

    {/* <ListItemButton href="/medicines">
      <ListItemIcon>
        <MedicationIcon sx={{ color: '#12295C' }} />
      </ListItemIcon>
      <ListItemText primary="Medicines" />
    </ListItemButton> */}

    <ListItemButton href="/exercise">
      <ListItemIcon>
        <FitnessCenterIcon sx={{ color: '#12295C' }} />
      </ListItemIcon>
      <ListItemText primary="Exercise" />
    </ListItemButton>

    <ListItemButton href="/community">
      <ListItemIcon>
        <PeopleIcon sx={{ color: '#12295C' }} />
      </ListItemIcon>
      <ListItemText primary="Community" />
    </ListItemButton>

    <ListItemButton href="/support">
      <ListItemIcon>
        <HelpIcon sx={{ color: '#12295C' }} />
      </ListItemIcon>
      <ListItemText primary="Support" />
    </ListItemButton>
  </React.Fragment>
)

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader> */}
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
)

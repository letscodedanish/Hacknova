import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import logo from '../Images/logo.png'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'
import { useTheme } from '@mui/material/styles'
import { Button, Popover } from '@mui/material'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { mainListItems, secondaryListItems } from '../Components/ListItems'
import { useNavigate } from 'react-router'

const drawerWidth = 240

function ResponsiveDrawer(props) {
  let navigate = useNavigate()
  const { windows } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { children } = props
  const [value, setValue] = React.useState(0)
  const theme = useTheme()
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Box className="logoBox">{/* <img src={logo} className="logo" /> */}</Box>
      <IconButton>
        <div
          style={{
            paddingTop: '10px',
            paddingLeft: '30px',
            align: 'center',
          }}
        >
          <img src={logo} width={160} height={40} alt="logo" />
        </div>
        {/* <ChevronLeftIcon /> */}
      </IconButton>
      <List component="nav">
        <div style={{ paddingTop: '20px' }}>
          {mainListItems}
          {/* <Divider sx={{ my: 1 }} /> */}
          {/* {secondaryListItems} */}
        </div>
      </List>
      <Button
        href="/signIn"
        sx={{
          marginTop: '270px',
          marginLeft: '79px',
          backgroundColor: '#FF5C5D',
        }}
        variant="contained"
        color="primary"
        href="https://facc-123-252-147-170.in.ngrok.io/whatsapp/sos"
      >
        SOS
      </Button>
      <Button
        href="/signIn"
        sx={{
          marginTop: '20px',
          marginLeft: '65px',
          backgroundColor: '#12295C',
        }}
        variant="contained"
        color="primary"
      >
        Logout
      </Button>
    </div>
  )

  const container =
    windows !== undefined ? () => windows().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#EBEDF2',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}

ResponsiveDrawer.propTypes = {
  windows: PropTypes.func,
}

export default ResponsiveDrawer

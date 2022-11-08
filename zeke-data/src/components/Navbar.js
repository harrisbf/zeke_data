import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider } from '@mui/material/styles';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import logo from '../assets/zekelogo.png';
import theme from '../themes/theme'

const pages = ['Dashboard', 'About', 'Docs'];
const settings = ['Logout'];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
  return (
    !isAuthenticated ?
        <ThemeProvider theme={theme}>
            <Box>
            <AppBar position="static"  sx={{backgroundColor: theme.palette.primary.main}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"s
                >
                    <img src={logo} alt="zeke logo" className="nav_logo" />
                </IconButton>
                <Typography variant="h5" component="div" sx={{marginTop: "1rem", marginLeft: "2rem"}}>
                    Welcome
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: "2rem" }}>
                </Typography>
                <Button color="inherit" onClick={() => loginWithRedirect()}>Login</Button>
            </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
     : <ThemeProvider theme={theme}>
        <Box>
            <AppBar position="static"  sx={{backgroundColor: theme.palette.primary.main}}>
                <Toolbar>
                <img src={logo} alt="zeke logo" className="nav_logo" />
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }} >
                    <Link to="/dashboard" className="link">
                        Dashboard
                    </Link>
                </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to="/about" className="link">
                        About
                    </Link>
                </Button>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to="/docs" className="link">
                        Docs
                    </Link>
                </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar>
                        {user.profile}
                    </Avatar>
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => logout({ returnTo: window.location.origin })}>
                    <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </ThemeProvider>
  )
}

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';


// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary:{
//       main:'#142444'
//     },
//     secondary:{
//       main: '#445484'
//     }
//   }
// })

const AppBarComponent = () => {

   
   
    
        const [anchorElNav, setAnchorElNav] = useState(null);
       
      
        const handleOpenNavMenu = (event) => {
          setAnchorElNav(event.currentTarget);
        };
       
      
        const handleCloseNavMenu = () => {
          setAnchorElNav(null);
        };
      
       
   
    return(

    <div>
      
      <AppBar position="static" sx={{ backgroundColor: '  #1D3E53',}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters >
            <AirportShuttleIcon sx={{ display: { xs: 'none', md: 'flex'}, mr: 2, fontSize: '25px'  }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontSize: '25px',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CUMBIEROS - RUTA 92
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            
            </Box>
            <AirportShuttleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CUMBIEROS - RUTA 92
            </Typography>
            
           
            
          </Toolbar>
        </Container>
      </AppBar>
  
    </div>
  )
}

export default AppBarComponent;
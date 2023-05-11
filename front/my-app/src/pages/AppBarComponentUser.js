import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
//
import { Link } from "react-router-dom";


//cookies
import Cookies from "universal-cookie";
// impo
const cookies = new Cookies();

const AppBarComponentUser = () => {
  const pages = [
    "Inicio",
    "Ruta",
    "Unidades", 
    "Contactanos",
  ];

  const componente = [
    "/homeUser",
    "/RutaUser",
    "/UnidadesUsuario",
    "/Contactanos",
    "/unidades",
    "/contactanos",
  ];
  const settings = ["Perfil", ];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    // alert('hi')
  };

  const handleCloseUserMenu = (id) => {
    setAnchorElUser(null);
    if (id === 3) {
      Logout();
    }
  };

  const Logout = () => {
    cookies.remove("id", { path: "/" });
    // cookies.remove('apellido_paterno', {path: "/"});
    // cookies.remove('apellido_materno', {path: "/"});
    cookies.remove("nombre", { path: "/" });
    cookies.remove("correo", { path: "/" });
    window.location.href = "./";
  };
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "  #1D3E53" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AirportShuttleIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                fontSize: "25px",
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontSize: "25px",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CUMBIEROS
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", color: "red" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ fontSize: "150px" }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: "25px",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CUMBIEROS
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontSize: "25px",
              }}
            >
              {pages.map((page, id) => (
                <Link
                  key={page}
                  onClick={handleCloseNavMenu}
                  to={componente[id]}
                  // sx={{ my: 2, color: "white", display: "block" }}
                  className="Btn_Appbar"
                >
                  {page}
                </Link>

              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, id) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
                <Button onClick={()=>Logout()}>Cerrar sesión</Button>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default AppBarComponentUser;

import * as React from "react";
import "../../css/nav.css";


import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";

import AssignmentIcon from "@mui/icons-material/Assignment";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import WorkIcon from "@mui/icons-material/Work";
import { Link, NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function MainListItems() {
  return (
    <React.Fragment >
      <NavLink to="/home" classActive="active"  >
        <ListItemButton >
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#1D3E53" }} />
          </ListItemIcon>
          <ListItemText primary="INICIO" />
        </ListItemButton>
      </NavLink>
      {cookies.get("rol") == 1 ? (
        <>
          <NavLink to="/checadores" classActive="active" >
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>

              <ListItemText primary="CHECADORES" />
            </ListItemButton>
          </NavLink>
          <NavLink to="/choferes" classActive="active">
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <ListItemText primary="CONDUCTORES" />
            </ListItemButton>
          </NavLink>
          <NavLink to="/sansiones" classActive="active">
            <ListItemButton>
              <ListItemIcon>
                <BusAlertIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <ListItemText primary="SANCIONADES" />
            </ListItemButton>
          </NavLink>
          <NavLink to="/dueños" classActive="active">
            <ListItemButton>
              <ListItemIcon>
                <WorkIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <ListItemText primary="PROPIETARIOS" />
            </ListItemButton>
          </NavLink>
          <NavLink to="/unidades" classActive="active">
            <ListItemButton>
              <ListItemIcon>
                <AirportShuttleIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <ListItemText primary="UNIDADES" />
            </ListItemButton>
          </NavLink>
        </>
      ) : null}

      {cookies.get("rol") == 2 ? (
        <>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <ListItemText primary="CHOREFES" />
            </ListItemButton>
          </Link>
        </>
      ) : null}

      {cookies.get("rol") == 3 ? (
        <>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <AirportShuttleIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <ListItemText primary="MIS UNIDADES" />
            </ListItemButton>
          </Link>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <PeopleIcon primary="MIS CHOFERES" />
            </ListItemButton>
          </Link>
        </>
      ) : null}

      {cookies.get("rol") == 4 ? (
        <>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <ListItemText primary="CASTIGOS" />
            </ListItemButton>
          </Link>
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <LocalLibraryIcon sx={{ color: "#1D3E53" }} />
              </ListItemIcon>
              <ListItemText primary="MIS TIEMPOS" />
            </ListItemButton>
          </Link>
        </>
      ) : null}
    </React.Fragment>
  );
}

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      REPORTES
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="REPORTE SEMANAL" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="REPORTE MENSUAL" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="REPORTE ANUAL" />
    </ListItemButton>
  </React.Fragment>
);

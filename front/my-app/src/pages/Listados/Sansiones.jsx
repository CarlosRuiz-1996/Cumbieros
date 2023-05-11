
import React, { useState } from "react";
import Cookies from "universal-cookie";
import "bootstrap/dist/css/bootstrap.min.css";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

// import Mapa from "../img/mapa3.jpg";
// import BodyComponent from "./BodyComponent";
// import AppBarComponentUser from "./AppBarComponentUser";
// import Dashboard from "./Dashboard/Dashboard";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Cards from "../Components/CardsComponent";
import Paper from "@mui/material/Paper";
import Chart from "../Dashboard/Chart";
import Deposits from "../Dashboard/Deposits";
import Orders from "../Dashboard/Orders";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const cookies = new Cookies();

const mdTheme = createTheme();

function Sansiones() {
  
  return (
    <>
    
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <h1>Estadistica de los castigados</h1>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
            <h1>Tiempo en castigos</h1>

              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <h1>Estadistica de los castigados</h1>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
            <h1>Monto de castigos</h1>

              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <h1>Los mas castigados</h1>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
     
    </>
  );
}

export default Sansiones;

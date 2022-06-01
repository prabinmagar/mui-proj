import { Box, Toolbar, Container, Grid, Paper, Typography, Chip } from "@mui/material";
import React from "react";
import Chart from "../../components/chart/Chart";
import Deposits from '../../components/deposits/Deposits';
import Orders from '../../components/orders/Orders';
import pose1 from "../../assets/images/pose_1.png";
import pose2 from "../../assets/images/pose_2.png";
import { Copyright, useStyles } from "./dashboardStyles";

const DashboardMain = () => {
    const classes = useStyles();
    return (
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Toolbar />

          <Container maxWidth = "lg">
            <Grid container spacing = {3}>
              <Grid item xs = {12} md = {6} lg = {3}>
                <Paper sx = {{
                  backgroundColor: "#9155FD"
                }} className = {classes.box}>
                  <Typography className = {classes.boxTitle}>
                    Ratings
                  </Typography>
                  <Typography mt = {3} mb = {1} variant = "h5" color = "white">
                    13.7k
                  </Typography>
                  <Chip label = "Year of 2022" size = "small" sx = {{
                    backgroundColor: "white",
                  }} />

                  <Box component = "img" className={classes.boxImage} alt = "pose 1 image" src = {pose1}
                    ></Box>
                </Paper>
              </Grid>

              <Grid item xs = {12} md = {6} lg = {3}>
                <Paper className = {classes.box}>
                  <Typography sx = {{
                    color: "black"
                  }} className = {classes.boxTitle}>
                    Sessions
                  </Typography>
                  <Typography mt = {3} mb = {1} variant = "h5" sx = {{
                  }}>
                    24.5k
                  </Typography>
                  <Chip label = "Year of 2022" size = "small" />

                  <Box component = "img" className = {classes.boxImage} alt = "pose 2 image" src = {pose2}></Box>
                </Paper>
              </Grid>

              <Grid item xs = {12} md = {6} lg = {6}>
                <Paper sx = {{
                  backgroundColor: "#FFB400",
                }} className = {classes.box}>
                  <Typography className = {classes.boxTitle}>
                    Statistics Card
                  </Typography>
                  <Typography mt = {3} mb = {1} variant = "h5" color = "white">
                    13.7k
                  </Typography>
                  <Chip sx = {{
                    background: "white"
                  }} label = "Year of 2022" size = "small" />
                </Paper>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Recent Orders */}
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
    )
}

export default DashboardMain;
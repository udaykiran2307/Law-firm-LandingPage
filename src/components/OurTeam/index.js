/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./OurTeam.css";
const TeamCard = () => {
  return (
    <div className="team-card">
      <div className="team-card-img">
        <img
          src='https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D'
          alt="team-member"
        ></img>
      </div>
      <div className="team-member">
        <h5>Adam gilfoyle</h5>
        <p>301 cases</p>
      </div>
    </div>
  );
};

function TeamGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={6} md={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={6} md={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={6} md={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={6} md={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={6} md={4}>
          <TeamCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default () => {
  return (
    <div style={{marginTop:'6rem' ,padding:'3rem'}}>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3rem",
          marginBottom: "2rem",
        }}
      >
        Our Team
      </h1>
      <TeamGrid />
    </div>
  );
};

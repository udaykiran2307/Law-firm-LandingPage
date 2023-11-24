/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import './OurTeam.css'
const TeamCard = () => {
  return (
    <div className="team-card">
      <div className="team-card-img">
        <img src="" alt="team-member"></img>
      </div>
      <div className='team-member'>
        <h5>Team member name</h5>
        <p>301 cases</p>
      </div>
    </div>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TeamGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={4}>
          <TeamCard />
        </Grid>
        <Grid item xs={4}>
          <TeamCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default () => {
  return (
    <div>
      <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3rem',marginBottom:'2rem'}}>Our Team</h1>
      <TeamGrid/>
    </div>
  );
};

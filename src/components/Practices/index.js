/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Practices.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function PracticeGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding: "0px 6rem 0px 6rem" }}>
      <Grid container spacing={2}>
        <Grid item md={9} sx={12} className="item1">
          <img
            src="Rectangle 3652.png"
            alt="no-img"
            className="practice-img"
          ></img>
          <h5 className="practice-txt">BUSINESS LAW</h5>
        </Grid>
        <Grid item md={3} xs={12} className="item2">
          <img
            src="Rectangle 3651.png"
            alt="no-img"
            className="practice-img"
          ></img>
          <h5 className="practice-txt-item">Partnership LAW</h5>
        </Grid>
        <Grid item md={3} sx={12} className="item2">
          <img
            src="Rectangle 3653.png"
            alt="no-img"
            className="practice-img"
          ></img>
          <h5 className="practice-txt-item">REAL ESTATE LAW</h5>
        </Grid>
        <Grid item md={9} sx={12} className="item1">
          <img
            src="Rectangle 3654.png"
            alt="no-img"
            className="practice-img"
          ></img>
          <h5 className="practice-txt">BUSINESS LAW</h5>
        </Grid>
        <Grid item md={9} sx={12} className="item1">
          <img
            src="Rectangle 3656.png"
            alt="no-img"
            className="practice-img"
          ></img>
          <h5 className="practice-txt">LANDLORD DISPUTES</h5>
        </Grid>
        <Grid item md={3} sx={12} className="item2">
          <img
            src="Rectangle 3655.png"
            alt="no-img"
            className="practice-img"
          ></img>
          <h5 className="practice-txt-item">ELDER ABUSE</h5>
        </Grid>
      </Grid>
    </Box>
  );
}

export default () => {
  return (
    <div className="practice-heading">
      <h1
        className="heading"
        style={{ marginBottom: "3rem", marginTop: "3rem" }}
      >
        Area of Practices
      </h1>
      <PracticeGrid />
    </div>
  );
};

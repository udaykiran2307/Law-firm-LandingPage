import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import "./Hero.css";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 350,
        borderRadius: "20px",
        color: "grey",
        backgroundColor:'#292929'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter your eamil address"
        color="#1D1D1D"
        inputProps={{ "aria-label": "search google maps" }}
      />

      <IconButton color="primary" sx={{ p: "5px" }} aria-label="directions">
        <p
          style={{ color: "black", fontSize: "1rem", p: "10px" }}
          className="hero-btn"
        >
          Let's Talk
        </p>
      </IconButton>
    </Paper>
  );
}

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import "./Hero.css";
import EmailIcon from '@mui/icons-material/Email';
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
        backgroundColor:'#292929',
        marginRight:'1rem'
      }}
    >
        <EmailIcon sx={{padding:'4px'}}/>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter your eamil address"
        color="#1D1D1D"
        inputProps={{ "aria-label": "search google maps" }}
      ></InputBase>

      <IconButton color="primary" sx={{ padding: "10px" }} aria-label="directions">
        <p
          style={{ color: "black", fontSize: "1rem",height:'2rem',paddingTop:'5px' }}
          className="hero-btn"
        >
          Let's Talk
        </p>
      </IconButton>
    </Paper>
  );
}

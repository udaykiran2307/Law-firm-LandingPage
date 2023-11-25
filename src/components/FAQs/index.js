/* eslint-disable import/no-anonymous-default-export */
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import "./faq.css";
export default () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div style={{ display: "flex" }} className="faq-section">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.{" "}
        </p>
        <div>
          <h3>Do I need a personal injury report?</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
          <Accordion
            sx={{
              backgroundColor: "#1D1D1D",
              color: "white",
              marginTop: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ControlPointIcon
                  sx={{ backgroundColor: "#E3B748", borderRadius: "50%" }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#1D1D1D",
              color: "white",
              marginTop: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ControlPointIcon
                  sx={{ backgroundColor: "#E3B748", borderRadius: "50%" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>What should I do right after car accidect</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#1D1D1D",
              color: "white",
              marginTop: "1rem",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ControlPointIcon
                  sx={{ backgroundColor: "#E3B748", borderRadius: "50%" }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

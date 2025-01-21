import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#D92531", // Transparent background
  color: "#FAFAFA", // White text
  boxShadow: "none", // No shadow
  "&:before": {
    display: "none", // Remove the divider line
  },
  "&.Mui-expanded": {
    margin: 0, // Prevent spacing on expand
  },
  "& .MuiAccordionSummary-root": {
    "&.Mui-expanded": {
      minHeight: "unset", // Adjust to fit content
    },
  },
}));

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: "#D92531",
  // Gradient background
  borderRadius: "8px", // Rounded corners
  minHeight: "40px",
  maxHeight: "40px",
  // padding: "8px", // Padding for header
  "& .MuiTypography-root": {
    fontSize: "18px", // Adjust heading font size
    fontWeight: 600, // Bold heading text
  },
  "&.Mui-expanded": {
    borderRadius: "8px 8px 0 0", // Top corners rounded when expanded
    maxHeight: "40px",
    minHeight: "40px",
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: "rgba(173, 216, 230, 0.2)", // Slightly tinted background for details
  padding: "4px 8px", // Padding for details with a small gap
  borderRadius: "0 0 8px 8px", // Rounded bottom corners
  // marginTop: "4px", // Gap between header and details
  "& .MuiTypography-root": {
    fontSize: "16px", // Adjust description font size
    lineHeight: 1.5, // Improve readability
  },
}));

const Help = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f4f8",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#f0f4f8",
          minHeight: "100vh",
          //   width: "1200px",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 4,
            textAlign: "center",
            color: "#333",
          }}
        >
          Get Started
        </Typography>

        {/* Form Fields */}
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: "600px",
            width: "100%",
            marginBottom: 4,
          }}
        >
          {/* First Row */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover fieldset": {
                    borderColor: "#00aaff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#555",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover fieldset": {
                    borderColor: "#00aaff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#555",
                },
              }}
            />
          </Grid>

          {/* Second Row */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover fieldset": {
                    borderColor: "#00aaff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#555",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              type="tel"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover fieldset": {
                    borderColor: "#00aaff",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#555",
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Text Area */}
        <TextField
          fullWidth
          label="How can we help you?"
          variant="outlined"
          multiline
          rows={4}
          sx={{
            maxWidth: "600px",
            width: "100%",
            marginBottom: 4,
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              "&:hover fieldset": {
                borderColor: "#00aaff",
              },
            },
            "& .MuiInputLabel-root": {
              color: "#555",
            },
          }}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            fontSize: "1rem",
            borderRadius: "8px",
            textTransform: "none",
            width: "100%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#D92531",
            "&:hover": {
              backgroundColor: "#0088cc",
            },
          }}
        >
          Submit
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1, // Space between accordions
        }}
      >
        <CustomAccordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>01. Comprehensive Subject Notes</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Typography>
              We handle the Dataflow verification process to ensure your
              credentials are validated correctly.
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>

        <CustomAccordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>02. Header</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>

        <CustomAccordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>03. Header</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>
        <CustomAccordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography>04. Header</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </CustomAccordionDetails>
        </CustomAccordion>
      </Box>
    </Box>
  );
};

export default Help;

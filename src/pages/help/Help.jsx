import {
  Box,
  Typography,
  IconButton,
  Grid2,
  TextareaAutosize,
  TextField,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

const Help = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        // alignItems: "center",
        // justifyContent: "center",
        padding: 4,
      }}
    >
      <Box
        sx={{
          marginBottom: 4, // Add spacing between text fields and FAQ section
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // fontSize: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: 600,
            marginBottom: 2,
            color: "#D92531",
          }}
        >
          Contact Us
        </Typography>
        <Grid2
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: {
              lg: "70%", // Laptop
              md: "70%", // Tablet
              sm: "80%", // Mobile
              xs: "100%", // Small mobile
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: "10px",
              flexWrap: "wrap", // Adjust for smaller screens
            }}
          >
            <Grid2 xs={12} sm={6} sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": { borderColor: "#D92531" },
                    "&.Mui-focused fieldset": { borderColor: "#D92531" },
                  },
                }}
              />
            </Grid2>
            <Grid2 xs={12} sm={6} sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": { borderColor: "#D92531" },
                    "&.Mui-focused fieldset": { borderColor: "#D92531" },
                  },
                }}
              />
            </Grid2>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",

              gap: "10px",
              flexWrap: "wrap", // Adjust for smaller screens
            }}
          >
            <Grid2 xs={12} sm={6} sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": { borderColor: "#D92531" },
                    "&.Mui-focused fieldset": { borderColor: "#D92531" },
                  },
                }}
              />
            </Grid2>
            <Grid2 xs={12} sm={6} sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                sx={{
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": { borderColor: "#D92531" },
                    "&.Mui-focused fieldset": { borderColor: "#D92531" },
                  },
                }}
              />
            </Grid2>
          </Box>
          <Grid2 xs={12} sx={{ marginTop: 2, width: "100%" }}>
            <TextareaAutosize
              minRows={4}
              placeholder="Your Message"
              style={{
                width: "100%", // Adjusts based on container's width
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                outlineColor: "#D92531",
              }}
            />
          </Grid2>
          <Grid2
            xs={12}
            sx={{
              marginTop: 3,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
                padding: "12px",
                backgroundColor: "#D92531",
                textAlign: "center",
                color: "white",
                fontSize: "1rem",
                fontWeight: 600,
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#a91c28")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#D92531")}
            >
              Submit
            </Button>
          </Grid2>
        </Grid2>
      </Box>

      <Grid2 container spacing={2} sx={{ width: "100%" }}>
        {/* Left Section */}
        <Grid2
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "flex-start",
            padding: 2,
            width: "auto",
          }}
        >
          <Typography
            sx={{
              color: "#D92531",
              fontSize: "2rem",
              fontWeight: 500,
              marginBottom: 1,
            }}
          >
            Answer All Your Questions
          </Typography>
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            Frequently <br />
            Asked Questions
          </Typography>
        </Grid2>

        {/* Right Section */}
        <Grid2
          xs={12}
          md={8}
          sx={{
            padding: 2,
            width: {
              lg: "60%",
              md: "50%",
              sm: "100%",
              xs: "100%",
              xl: "70%",
            },
          }}
        >
          <Box>
            {Array.from({ length: 10 }, (_, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    cursor: "pointer",
                  }}
                  onClick={() => handleToggle(index)}
                >
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 500,
                    }}
                  >
                    {`Question ${index + 1}`}
                  </Typography>
                  <IconButton
                    sx={{
                      // border: "1px solid rgb(116, 40, 45)", // Add black border
                      // borderRadius: "20px",
                      borderRadius: "10px", // Slight border-radius for rounded corners
                      padding: "4px", // Add padding to ensure proper spacing
                      color: expanded === index ? "white" : "white", // Icon color
                      backgroundColor: expanded === index ? "grey" : "#8b98a4", // Optional background for active state
                      "&:hover": {
                        backgroundColor: "#D92531", // Background turns red on hover
                        color: "white", // Icon color changes to white for better contrast
                      },
                      transition: "all 0.3s ease", // Smooth transition for hover effects
                    }}
                  >
                    {expanded === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </IconButton>
                </Box>
                {expanded === index && (
                  <Typography
                    sx={{
                      fontSize: "0.875rem",
                      color: "#555",
                      marginTop: 1,
                      marginBottom: 2,
                    }}
                  >
                    This is the answer to question {index + 1}. You can add
                    detailed information here.
                  </Typography>
                )}
                {index < 9 && (
                  <Box
                    sx={{
                      height: "1px",
                      backgroundColor: "lightgray",
                      marginY: 2,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Help;

import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const branches = [
  {
    city: "MADINAH",
    branch: "Al Dahi Branch Sultanah Branch",
    arabicBranch: "فرع الداعي فرع سلطانة",
    color: "#FFCA44",
  },
  {
    city: "JADDAH",
    branch: "Sari Branch Obhur Branch Al Nahd Branch",
    arabicBranch: "فرع ساري فرع أبحر فرع النهضة",
    color: "#CE2729",
  },
  {
    city: "MAKKAH",
    branch: "Al Naseem Branch",
    arabicBranch: "فرع النسيم",
    color: "#0EA81D",
  },
  {
    city: "RIYAD",
    branch: "Al Munisiyah Branch",
    arabicBranch: "فرع المنصية",
    color: "#AE77BA",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        padding: "40px 20px",
        display: "flex",
        flexDirection: {xs:"column",md:"row"},
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: "footerbg.png",
          width: "70%",
          mr: { xs: 2, sm: 4, md: 8 },
          ml: { xs: 2, sm: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            alignSelf: "self-start",
            mr: { xs: 2, sm: 4, md: 8 },
            ml: { xs: 2, sm: 4, md: 8 },
            // gap: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#CE2729", fontWeight: "bold", textAlign: "center" }}
          >
            Our Branches Across
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#CE2729", fontWeight: "bold", textAlign: "center" }}
          >
            The Kingdom
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#000",
              fontWeight: "500",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            فروعنا المنتشرة في المملكة
          </Typography>
        </Box>
        <Box
  container
  spacing={2}
  justifyContent="center"
  sx={{
    display: "flex",
    flexDirection: "column",
    position: "relative", // Ensure the content and background are layered correctly
    backgroundImage: "url('/footerbg.png')", // Replace with your image path
    backgroundSize: "cover", // Ensure the image covers the entire Box
    backgroundRepeat: "no-repeat", // Prevent the image from repeating
    backgroundPosition: "center", // Center the image in the Box
    padding: "20px", // Optional padding to create spacing
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-around",
    }}
  >
    <LocationOnIcon
      sx={{
        fontSize: "100px",
        color: "#FBD512",
      }}
    />
    <LocationOnIcon
      sx={{
        fontSize: "100px",
        color: "#CF2528",
      }}
    />
    <LocationOnIcon
      sx={{
        fontSize: "100px",
        color: "#149338",
      }}
    />
    <LocationOnIcon
      sx={{
        fontSize: "100px",
        color: "#8961A7",
      }}
    />
  </Box>
  <Box
    sx={{
      width: "auto",
      height: "4px",
      bgcolor: "#AFAFAF",
    }}
  ></Box>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "flex-start",
      width: "100%",
    }}
  >
    {branches.map((branch, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: branch.color,
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {branch.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", margin: "5px 0",fontWeight:"bold" }}
          >
            {branch.branch}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "black", fontStyle: "italic",fontWeight:"bold"  }}
          >
            {branch.arabicBranch}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
</Box>

      </Box>
      <Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}>
        <img style={{
          width: "200px",
          height: "200px",
        }} src="footerlogo.svg" alt="logo" srcset="" />
      </Box>
        <Box
          sx={{
            marginTop: "40px",
            textAlign: "center",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#CE2729", marginBottom: "10px" }}
          >
            Sign Up For Updates
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#777", marginBottom: "20px" }}
          >
            To Stay Up To Date Our Promotions, Promotions Discount Sales Special
            Offers And More
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection:"column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <TextField
  variant="outlined"
  placeholder="Enter Your Email"
  sx={{
    backgroundColor: "#FFF", // Background color for the TextField
    borderRadius: "24px", // Rounded corners
    width: "auto", // Auto width
    "& .MuiOutlinedInput-root": {
      borderRadius: "28px", // Border radius for the input
      "& fieldset": {
        borderColor: "#d3d3d3", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "#FF5733", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#28a745", // Border color when focused
      },
      "& .MuiOutlinedInput-input": {
      height: "20px", // Adjust the height of the input area
      padding: "10px 16px", // Add padding for better alignment
    },
    },
    "& input::placeholder": {
      textAlign: "center", // Centers the placeholder text
    },
    "& .MuiInputLabel-root": {
      color: "black", // Default label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black", // Label color when focused
    },
  }}
/>

            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: "#CE2729",
                color: "#FFF",
                padding: "10px 20px",
                textTransform: "none",
              }}
            >
              Submit
            </Button> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

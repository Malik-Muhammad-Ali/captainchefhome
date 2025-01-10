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
        // flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: "footerbg.png",
          width: "70%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
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
          }}
        >
          <Box
            sx={{
                display:"flex",
                justifyContent:"space-around",
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
          <Box sx={{
            width:"auto",
            height:"4px",
            bgcolor:"#f9f9"
          }}></Box>
          <Box
  sx={{
    display: "flex",
    justifyContent: "space-around",
    width: "100%",  // Ensure the container takes full width
  }}
>
  {branches.map((branch, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        flex: 1, // Ensures equal width for each branch box
        justifyContent: "center",
      }}
    >
      <Box sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",  // Makes sure content doesn't overflow
          padding: "10px", // Optional padding for spacing
      }}>
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
          sx={{ color: "#555", margin: "5px 0" }}
        >
          {branch.branch}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#777", fontStyle: "italic" }}
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
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter Your Email"
              fullWidth
              sx={{
                backgroundColor: "#FFF",
                borderRadius: "4px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#CE2729",
                color: "#FFF",
                padding: "10px 20px",
                textTransform: "none",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

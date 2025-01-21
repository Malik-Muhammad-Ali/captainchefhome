import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

const branches = [
  {
    city: "MADINAH",
    branch: "Al Dahi Branch Sultanah Branch",
    arabicBranch: "فرع الداعي فرع سلطانة",
    color: "#FBD512",
    subBranches: [
      { subBranch: "Al Dairi Branch", subColor: "#FBD512" },
      // {subBranch:"Sub-Branch 2",subColor:"#CF2528" },
      // {subBranch:"Sub-Branch 3",subColor:"#116EFA" },
    ],
  },
  {
    city: "JEDDAH",
    branch: "Sari Branch Obhur Branch Al Nahd Branch",
    arabicBranch: "فرع ساري فرع أبحر فرع النهضة",
    color: "#CF2528",
    subBranches: [
      { subBranch: "Sari Branch", subColor: "#FBD512" },
      { subBranch: "Obhur Branch", subColor: "#CF2528" },
      { subBranch: "Al Naim Branch", subColor: "#116EFA" },
    ],
  },
  {
    city: "RIYADH",
    branch: "Al Munisiyah Branch",
    arabicBranch: "فرع المنصية",
    color: "#116EFA",
    subBranches: [
      { subBranch: "Al Munsiyah Branch", subColor: "#FBD512" },
      // {subBranch:"Sub-Branch 2",subColor:"#CF2528" },
      // {subBranch:"Sub-Branch 3",subColor:"#116EFA" },
    ],
  },
];

const Footer = () => {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <>
    <Box
      sx={{
        backgroundColor: "#F9F9F9",
        // padding: "40px 20px",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        gap: { lg: "20px", sm: "10px" },
        alignItems: "center",
        // border: "2px solid red",
        height: "70vh",
      }}
    >
      <Box
        sx={{
          backgroundImage: "footerbg.png",
          width: { lg: "70%", sm: "100%" },
          mr: { xs: 2, sm: 4, md: 8 },
          ml: { xs: 2, sm: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          // border: "2px solid black",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            alignSelf: { xs: "center", md: "flex-start" },
            mr: { xs: 2, sm: 4, md: 8 },
            ml: { xs: 2, sm: 4, md: 8 },
            // gap: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#CE2729",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "24px", md: "38px" },
            }}
          >
            Our Branches Across The Kingdom
          </Typography>
          {/* <Typography
            variant="h4"
            sx={{
              color: "#CE2729",
              fontWeight: "bold",
              textAlign: "center",
              alignSelf: { xs: "center", md: "start" },
              fontSize: { xs: "24px", md: "38px" },
            }}
          >
            The Kingdom
          </Typography> */}
          {/* <Typography
            variant="h6"
            sx={{
              color: "#000",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
              fontSize: { xs: "24px", md: "38px" },
            }}
          >
            فروعنا المنتشرة في المملكة
          </Typography> */}
        </Box>
        <Box
          // container
          // spacing={2}
          // justifyContent="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { lg: "20px", md: "5px" }, // Optional padding to create spacing
            // border:"2px solid black",
            width: "100%",
            height: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              // border:"2px solid red"
            }}
          >
            {branches.map((branch, index) => (
              <Box
                key={index}
                onMouseEnter={() => {
                  setIsHovered(index);
                }}
                key={index}
                onMouseLeave={() => {
                  setIsHovered(null);
                }}
                key={index}
                sx={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                {isHovered !== index ? (
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
                    <LocationOnIcon
                      sx={{
                        fontSize: {
                          lg: "100px",
                          md: "100px",
                          sm: "70px",
                          xs: "70px",
                        },
                        color: branch.color,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#191919",
                        fontSize: { xs: "16px", md: "22px" },
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {branch.city}
                    </Typography>
                    {/* <Typography
                    variant="body2"
                    sx={{
                      color: "black",
                      margin: "5px 0",
                      fontWeight: "bold",
                      fontSize: { xs: "8px", md: "16px" },
                    }}
                  >
                    {branch.branch}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "black",
                      // fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: { xs: "8px", md: "16px" },
                    }}
                  >
                    {branch.arabicBranch}
                  </Typography> */}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                      padding: "10px",
                      // border:"2px solid black"
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        fontSize: {
                          lg: "40px",
                          md: "40px",
                          sm: "30px",
                          xs: "30px",
                        },
                        color: branch.color,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#191919",
                        fontSize: { xs: "16px", md: "22px" },
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                    >
                      {branch.city}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%",
                        // border:"2px solid red"
                      }}
                    >
                      {branch.subBranches.map((subBranch, subIndex) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            // justifyContent:"flex-start",
                            gap: "10px",
                          }}
                        >
                          <LocationOnIcon
                            sx={{
                              fontSize: {
                                lg: "30px",
                                md: "30px",
                                sm: "20px",
                                xs: "20px",
                              },
                              color: subBranch.subColor,
                            }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#191919",
                              fontSize: { xs: "16px", md: "16px" },
                              fontWeight: "bold",
                              textTransform: "uppercase",
                            }}
                          >
                            {subBranch.subBranch}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "flex-start" },
          justifyContent: "space-between",
          gap: { xs: "20px", md: "20px" },
          height: "100%",
          // border: "2px solid red",
        }}
      >
        <Box>
          <img
            style={{
              width: "150px",
              height: "150px",
            }}
            src="footerlogo.svg"
            alt="logo"
            srcset=""
          />
        </Box>
        <Box
          sx={{
            textAlign: { xs: "center", md: "start" },
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
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-start" },
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

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#CE2729",
                color: "#FFF",
                padding: "10px 20px",
                textTransform: "none",
                borderRadius: "28px",
                height: "30px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Box>
            <img
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
              src="instagram.png"
              alt=""
              srcset=""
            />
          </Box>
          <Box>
            <img
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
              src="facebook.png"
              alt=""
              srcset=""
            />
          </Box>
          <Box>
            <img
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
              src="twitter.png"
              alt=""
              srcset=""
            />
          </Box>
          <Box>
            <img
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
              src="youtube.png"
              alt=""
              srcset=""
            />
          </Box>
        </Box>
        {/* <Box sx={{}}>
          <img
            style={{
              width: "150px",
              height: "150px",
            }}
            src="barcode.svg"
            alt="barcode"
            srcset=""
          />
        </Box> */}
      </Box>
    </Box>
    <Box
        sx={{
          textAlign: "center",
          display: { md: "flex", xs: "none" },
          marginTop: "20px",
          borderTop: "2px solid #AFAFAF",
          paddingTop: "10px",
          width: "100%",
        }}
      >
        <Box sx={{ width: "45%" }}>
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            © Copyright Team Inc.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            // border: "2px solid black",
            display: { md: "flex", xs: "none" },
            gap: "70px",
          }}
        >
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            Terms
          </Typography>
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            Legal Notice
          </Typography>
          <Typography sx={{ color: "ffffff", fontSize: "13px" }}>
            Accessibility
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

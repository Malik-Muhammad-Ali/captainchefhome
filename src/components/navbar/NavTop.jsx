import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu"; // Import hamburger menu icon

import {
  Button,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import useAppStore from "../store";
import { useNavigate } from "react-router-dom";
const NavTop = () => {
  const [flag, setFlag] = React.useState("https://flagcdn.com/w40/us.png");
  const { language, setLanguage } = useAppStore();
  const isArabic = language === "ar";
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const [activePage, setActivePage] = React.useState("Home");

  // Navigation Pages
  const menuItems = [
    { name: "Home", route: "/", ar: "الرئيسية" },
    { name: "About Us", route: "/about", ar: "معلومات عنا" },
    { name: "Menu", route: "/menu", ar: "القائمة" },
    // { name: "Services", route: "/services", ar: "الخدمات" },
    // { name: "New", route: "/new", ar: "الجديد" },
    { name: "Contact Us", route: "/contact", ar: "اتصل بنا" },
  ];
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleNavigation = (page) => {
    setActivePage(page.name); // Set active page
    navigate(page.route); // Navigate to the route
    toggleDrawer(false); // Close drawer on navigation
  };
  const handleChange = (event) => {
    setLanguage(event.target.value);
    if (event.target.value === "en") {
      setLanguage("en");
      setFlag("https://flagcdn.com/w40/us.png");
    } else if (event.target.value === "ar") {
      setLanguage("ar");
      setFlag("https://flagcdn.com/w40/sa.png");
    }
  };
  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        maxWidth: "100vw",
        minHeight: "120px",
        alignItems: "center",
        justifyContent: "center",
        // position: "relative",
        direction: language === "ar" ? "rtl" : "ltr",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              width: "55%",
              justifyContent: {
                xs: "start", // Center logo on mobile
                sm: "space-between",
                md: "space-between",
                lg: "flex-end",
              },
              alignItems: "start",
            }}
          >
            <img src="logocaptainchef.png" alt="logo" />
          </Box>

          {/* Display elements on larger screens */}
          <Box
            sx={{
              flexGrow: 1,
              height: "100%",
              width: "45%",
              color: "black",
              display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: { xs: "10px", sm: "10px", md: "30px", lg: "30px" },
            }}
          >
            <FormControl
              sx={{
                display: { xs: "none", md: "block", sm: "block" },
                minWidth: { xs: "", sm: "", md: "150px", lg: "150px" },
              }}
              variant="outlined"
            >
              <InputLabel
                id="language-select-label"
                sx={{
                  color: "black",
                  display: { xs: "flex", md: "flex", sm: "flex" },
                  "&.Mui-focused": {
                    color: "black",
                  },
                }}
              >
                Lang
              </InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                onChange={handleChange}
                label="Lang"
                sx={{
                  borderRadius: "12px",
                  width: "206px",
                  height: "56px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "black",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "gray",
                  },
                  color: "black",
                }}
                renderValue={() => (
                  <Box display="flex" alignItems="center" gap={1}>
                    <img src={flag} alt={language} width="20" height="15" />
                    <Typography>
                      {language === "en" ? "English" : "Arabic"}
                    </Typography>
                  </Box>
                )}
              >
                <MenuItem value="en">
                  <Box display="flex" alignItems="center" gap={2}>
                    <img
                      src="https://flagcdn.com/w40/us.png"
                      alt="English"
                      width="20"
                      height="15"
                    />
                    <Typography>English</Typography>
                  </Box>
                </MenuItem>
                <MenuItem value="ar">
                  <Box display="flex" alignItems="center" gap={2}>
                    <img
                      src="https://flagcdn.com/w40/sa.png"
                      alt="Arabic"
                      width="20"
                      height="15"
                    />
                    <Typography>Arabic</Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_349_25)">
                <path
                  d="M39.9996 37.6444L29.563 27.2078C32.274 23.8921 33.6069 19.6613 33.286 15.3904C32.9652 11.1195 31.015 7.13532 27.8389 4.26197C24.6629 1.38862 20.504 -0.154078 16.2224 -0.0470251C11.9408 0.0600279 7.86414 1.80864 4.83566 4.83712C1.80718 7.86561 0.0585631 11.9423 -0.0484899 16.2238C-0.155543 20.5054 1.38715 24.6644 4.2605 27.8404C7.13385 31.0165 11.118 32.9666 15.3889 33.2875C19.6598 33.6084 23.8906 32.2755 27.2063 29.5644L37.643 40.0011L39.9996 37.6444ZM16.6663 30.0011C14.0292 30.0011 11.4514 29.2191 9.2587 27.754C7.06604 26.2889 5.35708 24.2066 4.34791 21.7702C3.33874 19.3339 3.0747 16.653 3.58917 14.0666C4.10364 11.4802 5.37351 9.10438 7.23821 7.23968C9.10291 5.37498 11.4787 4.1051 14.0651 3.59063C16.6515 3.07616 19.3324 3.34021 21.7687 4.34937C24.2051 5.35854 26.2875 7.06751 27.7526 9.26016C29.2176 11.4528 29.9996 14.0307 29.9996 16.6678C29.9957 20.2028 28.5896 23.5918 26.09 26.0915C23.5904 28.5911 20.2013 29.9971 16.6663 30.0011Z"
                  fill="#374957"
                />
              </g>
              <defs>
                <clipPath id="clip0_349_25">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_349_32)">
                <path
                  d="M35 40.0011H31.6667V31.5961C31.6653 30.2895 31.1457 29.0367 30.2217 28.1127C29.2978 27.1888 28.045 26.6691 26.7383 26.6678H13.2617C11.955 26.6691 10.7022 27.1888 9.77827 28.1127C8.85432 29.0367 8.33466 30.2895 8.33333 31.5961V40.0011H5V31.5961C5.00265 29.4058 5.87392 27.306 7.42271 25.7572C8.9715 24.2084 11.0713 23.3371 13.2617 23.3345H26.7383C28.9287 23.3371 31.0285 24.2084 32.5773 25.7572C34.1261 27.306 34.9974 29.4058 35 31.5961V40.0011Z"
                  fill="#374957"
                />
                <path
                  d="M20 20C18.0222 20 16.0888 19.4135 14.4443 18.3147C12.7998 17.2159 11.5181 15.6541 10.7612 13.8268C10.0043 11.9996 9.8063 9.98891 10.1922 8.0491C10.578 6.10929 11.5304 4.32746 12.9289 2.92894C14.3275 1.53041 16.1093 0.578004 18.0491 0.192152C19.9889 -0.193701 21.9996 0.00433286 23.8268 0.761209C25.6541 1.51809 27.2159 2.79981 28.3147 4.4443C29.4135 6.08879 30 8.02219 30 10C29.9974 12.6514 28.9429 15.1934 27.0681 17.0681C25.1934 18.9429 22.6514 19.9974 20 20ZM20 3.33334C18.6815 3.33334 17.3925 3.72433 16.2962 4.45687C15.1999 5.18942 14.3454 6.23061 13.8408 7.44878C13.3362 8.66696 13.2042 10.0074 13.4614 11.3006C13.7187 12.5938 14.3536 13.7817 15.286 14.7141C16.2183 15.6464 17.4062 16.2813 18.6994 16.5386C19.9926 16.7958 21.3331 16.6638 22.5512 16.1592C23.7694 15.6546 24.8106 14.8001 25.5431 13.7038C26.2757 12.6075 26.6667 11.3185 26.6667 10C26.6667 8.23189 25.9643 6.5362 24.7141 5.28596C23.4638 4.03572 21.7681 3.33334 20 3.33334Z"
                  fill="#374957"
                />
              </g>
              <defs>
                <clipPath id="clip0_349_32">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_349_41)">
                <path
                  d="M30 10C30 7.34783 28.9464 4.8043 27.0711 2.92893C25.1957 1.05357 22.6522 0 20 0C17.3478 0 14.8043 1.05357 12.9289 2.92893C11.0536 4.8043 10 7.34783 10 10H0V35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H23.3333V36.6667H5C4.55797 36.6667 4.13405 36.4911 3.82149 36.1785C3.50893 35.866 3.33333 35.442 3.33333 35V13.3333H10V16.6667H13.3333V13.3333H26.6667V16.6667H30V13.3333H36.6667V23.3333H40V10H30ZM13.3333 10C13.3333 8.23189 14.0357 6.5362 15.286 5.28595C16.5362 4.03571 18.2319 3.33333 20 3.33333C21.7681 3.33333 23.4638 4.03571 24.714 5.28595C25.9643 6.5362 26.6667 8.23189 26.6667 10H13.3333Z"
                  fill="#374957"
                />
                <path
                  d="M35.0003 26.6655H31.667V31.6655H26.667V34.9988H31.667V39.9988H35.0003V34.9988H40.0003V31.6655H35.0003V26.6655Z"
                  fill="#374957"
                />
              </g>
              <defs>
                <clipPath id="clip0_349_41">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" }, // Show only on mobile
              justifyContent: "center",
              backgroundColor: "transparent",
            }}
          >
            <IconButton
              onClick={() => toggleDrawer(true)}
              sx={{
                color: "#D92531",
              }}
            >
              <MenuIcon sx={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            sx={{
              display: { xs: "block", sm: "none" }, // Show only on mobile
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "20px",
                direction: language === "ar" ? "rtl" : "ltr", // Change direction dynamically
              }}
            >
              {menuItems.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigation(page)}
                  sx={{
                    color: "black",
                    margin: "10px 0",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderRadius: "8px",
                    "&:hover": {
                      color: "#D92531",
                    },
                  }}
                >
                  {language === "ar" ? page.ar : page.name}
                </Button>
              ))}
              <FormControl
                sx={{
                  display: { xs: "block", md: "none", sm: "none" },
                  minWidth: { xs: "", sm: "", md: "150px", lg: "150px" },
                  mb: "15px",
                }}
                variant="outlined"
              >
                <InputLabel
                  id="language-select-label"
                  sx={{
                    color: "black",
                    display: { xs: "flex", md: "flex", sm: "flex" },
                    "&.Mui-focused": {
                      color: "black",
                    },
                  }}
                >
                  Lang
                </InputLabel>
                <Select
                  labelId="language-select-label"
                  id="language-select"
                  value={language}
                  onChange={handleChange}
                  label="Lang"
                  sx={{
                    borderRadius: "12px",
                    width: "206px",
                    height: "56px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "gray",
                    },
                    color: "black",
                  }}
                  renderValue={() => (
                    <Box display="flex" alignItems="center" gap={1}>
                      <img src={flag} alt={language} width="20" height="15" />
                      <Typography>
                        {language === "en" ? "English" : "Arabic"}
                      </Typography>
                    </Box>
                  )}
                >
                  <MenuItem value="en">
                    <Box display="flex" alignItems="center" gap={2}>
                      <img
                        src="https://flagcdn.com/w40/us.png"
                        alt="English"
                        width="20"
                        height="15"
                      />
                      <Typography>English</Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value="ar">
                    <Box display="flex" alignItems="center" gap={2}>
                      <img
                        src="https://flagcdn.com/w40/sa.png"
                        alt="Arabic"
                        width="20"
                        height="15"
                      />
                      <Typography>Arabic</Typography>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavTop;

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Import hamburger menu icon
import { useNavigate, useLocation } from "react-router-dom";
import useAppStore from "../store";

const NavBottom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const { language, setLanguage } = useAppStore();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activePage, setActivePage] = useState(location.pathname);


  // Navigation Pages
  const menuItems = [
    { name: "Home", route: "/", ar: "الرئيسية" },
    { name: "About Us", route: "/about", ar: "معلومات عنا" },
    { name: "Subscriptions", route: "/subscriptions", ar: "معلومات عنا" },
    { name: "Menu", route: "/menu", ar: "القائمة" },
    // { name: "Services", route: "/services", ar: "الخدمات" },
    { name: "Join Us", route: "/join", ar: "الخدمات" },
    // { name: "New", route: "/new", ar: "الجديد" },
    { name: "Contact Us", route: "/contact", ar: "اتصل بنا" },
  ];
  const isArabic = language === "ar";
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const handleNavigation = (route) => {
    setActivePage(route);
    navigate(route);
    toggleDrawer(false); // Close drawer on navigation
  };
  console.log(activePage);

  return (
    <>
      {/* Sticky AppBar */}
      <AppBar
        position="sticky"
        sx={{
          display: { xs: "none", md: "block", sm: "block" },
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 5,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "center",
            padding: "5px 20px",
            direction: isArabic ? "rtl" : "ltr", // Change direction dynamically
          }}
        >
          {/* Home */}
          <Button
            onClick={() => handleNavigation("/")}
            sx={{
              color: activePage === "/" ? "#D92531" : "black",
              backgroundColor: activePage === "/" ? "white" : "none",
              margin: "0 10px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "8px",
              "&:hover": {
                color: "#D92531",
              },
            }}
          >
            {language === "ar" ? "بيت" : "Home"}
          </Button>
          {/* About Us  */}
          <Button
            onClick={() => handleNavigation("/about")}
            sx={{
              color: activePage === "/about" ? "#D92531" : "black",
              backgroundColor: activePage === "/about" ? "white" : "none",
              margin: "0 10px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "8px",
              "&:hover": {
                color: "#D92531",
              },
            }}
          >
            {language === "ar" ? "بيت" : "About Us"}
          </Button>
          {/* Subscriptions  */}
          <Button
            onClick={() => handleNavigation("/subscriptions")}
            sx={{
              color: activePage === "/subscriptions" ? "#D92531" : "black",
              backgroundColor:
                activePage === "/subscriptions" ? "white" : "none",
              margin: "0 10px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "8px",
              "&:hover": {
                color: "#D92531",
              },
            }}
          >
            {language === "ar" ? "بيت" : "Subscriptions"}
          </Button>
          {/* Menu  */}
          <Button
            onClick={() => handleNavigation("/menu")}
            sx={{
              color: activePage === "/menu" ? "#D92531" : "black",
              backgroundColor: activePage === "/menu" ? "white" : "none",
              margin: "0 10px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "8px",
              "&:hover": {
                color: "#D92531",
              },
            }}
          >
            {language === "ar" ? "بيت" : "Menu"}
          </Button>
          {/* Join Us  */}
          <Button
            onClick={() => handleNavigation("/menu")}
            sx={{
              color: activePage === "/menu" ? "#D92531" : "black",
              backgroundColor: activePage === "/menu" ? "white" : "none",
              margin: "0 10px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "8px",
              "&:hover": {
                color: "#D92531",
              },
            }}
          >
            {language === "ar" ? "بيت" : "Join us"}
          </Button>
          {/* Contact Us  */}
          <Button
            onClick={() => handleNavigation("/contact")}
            sx={{
              color: activePage === "/contact" ? "#D92531" : "black",
              backgroundColor: activePage === "/contact" ? "white" : "none",
              margin: "0 10px",
              fontWeight: "bold",
              fontSize: "16px",
              borderRadius: "8px",
              "&:hover": {
                color: "#D92531",
              },
            }}
          >
            {language === "ar" ? "بيت" : "Contact Us"}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBottom;

{
  /* Mobile Menu Icon */
}
{
  /* <Box
  sx={{
    display: { xs: "flex", sm: "none" }, // Show only on mobile
    justifyContent: "center",
    backgroundColor: "transparent",
  }}
>
  <IconButton
    onClick={() => toggleDrawer(true)}
    sx={{
      color: "black",
    }}
  >
    <MenuIcon />
  </IconButton>
</Box> */
}
{
  /* Drawer for Mobile Navigation */
}
{
  /* <Drawer
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
  </Box>
</Drawer> */
}

import React, { useState } from "react";
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useLocation } from "react-router-dom";
import useAppStore from "../store";

const NavBottom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useAppStore();
  const [activePage, setActivePage] = useState(location.pathname);
  const [contactAnchorEl, setContactAnchorEl] = useState(null); // For Contact Us dropdown
  const [joinAnchorEl, setJoinAnchorEl] = useState(null); // For Join Us dropdown
  const [careersAnchorEl, setCareersAnchorEl] = useState(null); // For Careers submenu

  const isJoinDropdownOpen = Boolean(joinAnchorEl);
  const isContactDropdownOpen = Boolean(contactAnchorEl);
  const isCareersSubMenuOpen = Boolean(careersAnchorEl);

  const isArabic = language === "ar";

  const handleNavigation = (route) => {
    setActivePage(route);
    navigate(route);
  };

  const handleCareersSubMenuToggle = (event) => {
    setCareersAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const handleJoinDropdownOpen = (event) => {
    setJoinAnchorEl(event.currentTarget);
  };

  const handleJoinDropdownClose = () => {
    setJoinAnchorEl(null);
  };

  const handleContactDropdownOpen = (event) => {
    setContactAnchorEl(event.currentTarget);
  };

  const handleContactDropdownClose = () => {
    setContactAnchorEl(null);
  };

  const handleCareersSubMenuOpen = (event) => {
    setCareersAnchorEl(event.currentTarget); // Open submenu when clicked
  };

  const handleCareersSubMenuClose = () => {
    setCareersAnchorEl(null); // Close submenu
  };

  const handleDropdownClick = (route, dropdownType) => {
    if (dropdownType === "join") {
      handleJoinDropdownClose();
    } else if (dropdownType === "contact") {
      handleContactDropdownClose();
    }
    handleNavigation(route);
  };

  return (
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
          direction: isArabic ? "rtl" : "ltr",
        }}
      >
        {/* Home */}
        <Button
          onClick={() => handleNavigation("/")}
          sx={{
            color: activePage === "/" ? "#D92531" : "black",
            margin: "0 10px",
            fontWeight: "bold",
            fontSize: { xs: "16px", sm: "12px", md: "16px", lg: "16px" },
            borderRadius: "8px",
            "&:hover": { color: "#D92531" },
          }}
        >
          {isArabic ? "الرئيسية" : "Home"}
        </Button>

        {/* About Us */}
        <Button
          onClick={() => handleNavigation("/about")}
          sx={{
            color: activePage === "About Us" ? "#D92531" : "black",
            backgroundColor: activePage === "About Us" ? "white" : "none",
            margin: "0 10px",
            fontWeight: "bold",
            fontSize: { xs: "16px", sm: "12px", md: "16px", lg: "16px" },
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
          onClick={() => handleNavigation("/about")}
          sx={{
            color: activePage === "Subscriptions" ? "#D92531" : "black",
            backgroundColor: activePage === "Subscriptions" ? "white" : "none",
            margin: "0 10px",
            fontWeight: "bold",
            fontSize: { xs: "16px", sm: "12px", md: "16px", lg: "16px" },
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
            color: activePage === "Menu" ? "#D92531" : "black",
            backgroundColor: activePage === "Menu" ? "white" : "none",
            margin: "0 10px",
            fontWeight: "bold",
            fontSize: { xs: "16px", sm: "12px", md: "16px", lg: "16px" },
            borderRadius: "8px",
            "&:hover": {
              color: "#D92531",
            },
          }}
        >
          {language === "ar" ? "بيت" : "Menu"}
        </Button>

        {/* Join Us Dropdown */}
        <Button
          onClick={handleJoinDropdownOpen}
          endIcon={
            isJoinDropdownOpen ? (
              <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            )
          }
          sx={{
            color: activePage === "/join" ? "#D92531" : "black",
            margin: "0 10px",
            fontWeight: "bold",
            fontSize: { xs: "16px", sm: "12px", md: "16px", lg: "16px" },
            borderRadius: "8px",
            "&:hover": { color: "#D92531" },
          }}
        >
          {isArabic ? "انضم إلينا" : "Join Us"}
        </Button>
        <Menu
          anchorEl={joinAnchorEl}
          open={isJoinDropdownOpen}
          onClose={handleJoinDropdownClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {/* Careers Menu with Submenu */}
          <MenuItem
            onClick={handleCareersSubMenuToggle} // Open the submenu
          >
            {isArabic ? "وظائف" : "Careers"}
            {/* Arrow Icon */}
            {isCareersSubMenuOpen ? (
              <ArrowBackIos sx={{ fontSize: 16, marginLeft: "8px" }} />
            ) : (
              <ArrowForwardIos sx={{ fontSize: 16, marginLeft: "8px" }} />
            )}
            <Menu
              anchorEl={careersAnchorEl}
              open={isCareersSubMenuOpen}
              onClose={handleCareersSubMenuClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <MenuItem
                onClick={() =>
                  handleDropdownClick("/join/careers/cashier", "join")
                }
              >
                {isArabic ? "أمين الصندوق" : "Cashier"}
              </MenuItem>
              <MenuItem
                onClick={() => handleDropdownClick("/join/careers/it", "join")}
              >
                {isArabic ? "تكنولوجيا المعلومات" : "IT"}
              </MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem
            onClick={() => handleDropdownClick("/join/categories", "join")}
          >
            {isArabic ? "الفئات" : "Categories"}
          </MenuItem>
        </Menu>

        {/* Contact Us Dropdown */}
        <Button
          onClick={handleContactDropdownOpen}
          endIcon={
            isContactDropdownOpen ? (
              <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
            )
          }
          sx={{
            color: activePage === "/contact" ? "#D92531" : "black",
            margin: "0 10px",
            fontWeight: "bold",
            fontSize: { xs: "16px", sm: "12px", md: "16px", lg: "16px" },
            borderRadius: "8px",
            "&:hover": { color: "#D92531" },
          }}
        >
          {isArabic ? "اتصل بنا" : "Contact Us"}
        </Button>
        <Menu
          anchorEl={contactAnchorEl}
          open={isContactDropdownOpen}
          onClose={handleContactDropdownClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem
            onClick={() => handleDropdownClick("/contact/b2b", "contact")}
          >
            {isArabic ? "B2B" : "B2B"}
          </MenuItem>
          <MenuItem
            onClick={() => handleDropdownClick("/contact/events", "contact")}
          >
            {isArabic ? "الفعاليات" : "Events"}
          </MenuItem>
          <MenuItem
            onClick={() => handleDropdownClick("/contact/faq", "contact")}
          >
            {isArabic ? "الأسئلة الشائعة" : "FAQ"}
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBottom;

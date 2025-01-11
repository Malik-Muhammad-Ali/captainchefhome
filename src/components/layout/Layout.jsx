import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { Box, Grid2, Stack } from "@mui/material";
import NavBottom from "../navbar/NavBottom";
import NavLayout from "../navbar/NavLayout";

const Layout = () => {
  return (
    <Grid2
      sx={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <NavLayout />
      <Outlet />
      <Footer />
    </Grid2>
  );
};

export default Layout;

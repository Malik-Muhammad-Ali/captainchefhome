import React from "react";
import MessageComponent from "../../components/home/MessageComponent";
import { Box } from "@mui/material";
import Categories from "../../components/home/Categories";
import Meals from "../../components/home/Meals";
import BestSeller from "../../components/home/BestSeller";
import HeroSec from "../../components/home/HeroSec";
import TestimonialsSec from "../../components/home/TestimonialsSec";
// import Footer from "../components/footer/Footer";
// import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      gap: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
    }}>
      {/* <Box>
        <Navbar />
      </Box> */}
      <Box>
        <HeroSec />
      </Box>
      <Box>
        <MessageComponent />
      </Box>
      <Box>
        <Categories />
      </Box>
      <Box>
        <Meals />
      </Box>
      <Box>
        <BestSeller />
      </Box>
      <Box>
        <TestimonialsSec />
      </Box>
      {/* <Box>
        <Footer />
      </Box> */}
    </Box>
  );
};

export default Home;

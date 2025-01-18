import React from "react";
import MessageComponent from "../../components/home/MessageComponent";
import { Box } from "@mui/material";
import Categories from "../../components/home/Categories";
import Meals from "../../components/home/Meals";
import BestSeller from "../../components/home/BestSeller";
import HeroSec from "../../components/home/HeroSec";
import TestimonialsSec from "../../components/home/TestimonialsSec";

const Home = () => {
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      gap: { xs: "20px", sm: "40px", md: "80px", lg: "80px" },
    }}>
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
    </Box>
  );
};

export default Home;

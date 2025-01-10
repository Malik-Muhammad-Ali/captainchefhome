import React from "react";
import MessageComponent from "../components/MessageComponent";
import { Box } from "@mui/material";
import Categories from "../components/Categories";
import Meals from "../components/Meals";
import BestSeller from "../components/BestSeller";
import HeroSec from "../components/HeroSec";
import TestimonialsSec from "../components/TestimonialsSec";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
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
        <TestimonialsSec/>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </>
  );
};

export default Home;

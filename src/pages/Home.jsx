import React from "react";
import MessageComponent from "../components/MessageComponent";
import { Box } from "@mui/material";
import Categories from "../components/Categories";
import Meals from "../components/Meals";

const Home = () => {
  return (
    <>
      <Box>
        <MessageComponent />
      </Box>
      <Box>
        <Categories />
      </Box>
      <Box>
        <Meals />
      </Box>
    </>
  );
};

export default Home;

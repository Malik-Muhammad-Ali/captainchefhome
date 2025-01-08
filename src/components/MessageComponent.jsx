import { Box, Typography } from "@mui/material";
import React from "react";

const MessageComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mr: { xs: 2, sm: 4, md: 8 },
        ml: { xs: 2, sm: 4, md: 8 },
        gap: { lg: "50px", nd: "50px", sm: "30px", xs: "20px" },
        backgroundColor: "#f9f9f9",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            lg: "row-reverse",
            md: "row-reverse",
            sm: "column-reverse",
            xs: "column-reverse",
          },
          justifyContent: "space-around",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box
          sx={{
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f9f9f9",
            p: "20px",
          }}
        >
          <img style={{
            width: "100%", height: "auto"
          }} src="/messageBg.svg" alt="image" />
        </Box>
        <Box
          sx={{
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            // alignItems: "flex-start",
            // justifyContent: "center",
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              padding: "4px",
              alignSelf: {
                xs: "center",
                sm: "center",
                md: "flex-start",
                lg: "flex-start",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { lg: "30px", md: "30px", sm: "24px", xs: "24px" },
                fontWeight: 600,
                borderBottom: "2px solid red",
                display: "inline-block",
              }}
            >
              Our Message
            </Typography>
          </Box>
          <Typography sx={{fontSize:"20px",fontWeight:300,wordSpacing:"4px"}}>
            We provide nutritious, high-quality meals that support a balanced
            and active lifestyle. Whether exercising or on a personalized diet,
            the Captain Chef app is designed to meet your needs while ensuring
            variety and delicious taste. We're here to be your trusted partner
            in your health journey with flexible meal solutions high-quality
            meals that support a balanced and active lifestyle. Whether
            exercising or on a personalized diet, the Captain Chef app is
            designed to meet your needs while ensuring variety and delicious
            taste. We're here to be your trusted partner in your health journey
            with flexible meal solutions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageComponent;

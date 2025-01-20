import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsSec = () => {
  const employees = [
    {
      text: "Fantastic, I have used Right Bite multiple times in the past and it has just been great. Great variety of dishes, great taste and I get my macros on point to assist my fitness goals. Highly recommend!",
      rating: 5,
      name: "Huzaifa Siddique",
    },
    {
      text: "Fantastic, I have used Right Bite multiple times in the past and it has just been great. Great variety of dishes, great taste and I get my macros on point to assist my fitness goals. Highly recommend! wishing best of luck to you guys",
      rating: 4,
      name: "Jane Smith",
    },
    {
      text: "Fantastic, I have used Right Bite multiple times in the past and it has just been great. Great variety of dishes, great taste and I get my macros on point to assist my fitness goals. Highly recommend! Fantastic, I have used Right Bite multiple times in the past and it has just been great. Great variety of dishes, great taste and I get my macros on point to assist my fitness goals. Highly recommend!",
      rating: 5,
      name: "Alice Johnson",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % employees.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      sx={{
        height: "auto",
        flexDirection: { xs: "column", sm: "row" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: { xs: "100%", sm: "30%", xl: "20%" },
          ml: "auto",
          height: "auto",
        }}
      >
        <Box
          component="img"
          src="testimonials-img.png"
          alt="Top Left Image"
          sx={{
            aspectRatio: { xs: "6/8", lg: "1 / 2" },
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "60%" },
          mx: "auto",
          mt: 4,
          mb: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "300px",
          maxHeight: "380px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: "10px",
                gap: "10px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#D92531",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                }}
              >
                What Others Say About Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: 500,
                }}
              >
                {employees[currentIndex].text}
              </Typography>
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="testimonial-rating"
                  value={employees[currentIndex].rating}
                  readOnly
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  {employees[currentIndex].name}
                </Typography>
              </Stack>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default TestimonialsSec;

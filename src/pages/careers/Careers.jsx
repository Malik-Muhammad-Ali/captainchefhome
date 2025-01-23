import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import useAppStore from "../../components/store";
import { Navigate, useNavigate } from "react-router-dom";

const Careers = () => {
  //   const { language, setLanguage } = useAppStore();
  //   const isArabic = language == "ar";
  const navigate = useNavigate();

  const cards = [
    {
      image: "change1.jpg", // Replace with your image URL
      title: "Cashier",
    },
    {
      image: "change1.jpg", // Replace with your image URL
      title: "IT department",
    },
    {
      image: "change2.png", // Replace with your image URL
      title: "Data Entry",
    },
    {
      image: "change2.png", // Replace with your image URL
      title: "Developer",
    },
    {
      image: "change3.png", // Replace with your image URL
      title: "Video Editor",
    },
    {
      image: "change3.png", // Replace with your image URL
      title: "HR",
    },
  ];
  const { language } = useAppStore();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Array to store category data
  const categories = new Array(8).fill({
    title: "Category",
    description: "category1",
    image: "takmim.png", // You can replace this with dynamic image paths
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        margin: 3,
      }}
    >
      {cards.map((card, index) => (
        <Box
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          sx={{
            width: { lg: "350px", md: "250px", sm: "250px", xs: "330px" },
            height: { lg: "300px", md: "250px", sm: "250px", xs: "300px" },
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            backgroundColor: hoveredIndex === index ? "#fff" : "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s, transform 0.3s",
            cursor: "pointer",
            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
          }}
        >
          {hoveredIndex === index ? (
            <Box
              sx={{
                position: "relative", // Allows absolute positioning for child elements
                width: "100%", // Full width of the container
                height: "100%", // Full height of the container
                borderRadius: "10px",
                overflow: "hidden", // Prevents content from overflowing
              }}
            >
              {/* Background Image Box */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${card.image})`, // Use your image path
                  transition: "opacity 0.3s ease-in-out",
                  opacity: 0.4, // Default opacity
                  zIndex: 1, // Ensure it’s behind the button
                  "&:hover": {
                    opacity: 0.4, // Increase opacity on hover
                  },
                }}
              />
              {/* Button Container */}
              <Box
                sx={{
                  position: "relative", // Keep the button container above the image
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%", // Center the button vertically and horizontally
                  zIndex: 2, // Ensure it stays above the background
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => navigate(`/apply`)}
                  sx={{
                    backgroundColor: "#D92531",
                    color: "white",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#ff4d4d", // Button hover effect
                    },
                  }}
                >
                  Apply Now
                </Button>
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              <Typography variant="h6">{card.title}</Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Careers;

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import useAppStore from "../../components/store";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { language, setLanguage } = useAppStore();
  const isArabic = language == "ar";

  const cards = [
    {
      image: "card111.png", // Replace with your image URL
      title: "Our Mission",
      backTitle: "Our Mission",
      backContent:
        "At Captain Chef, our vision is to lead in healthy nutrition, building a vibrant community aligned with Saudi Vision 2030. We provide balanced, creative meals to enhance quality of life for all..",
    },
    {
      image: "who2.png", // Replace with your image URL
      title: "Our Vision",
      backTitle: "Our Vision",
      backContent:
        "At Captain Chef, our vision is to lead in healthy nutrition, building a vibrant community aligned with Saudi Vision 2030. We provide balanced, creative meals to enhance quality of life for all.",
    },
    {
      image: "who3.png", // Replace with your image URL
      title: "Our Values at Captain Chef",
      backTitle: "Our Values at Captain Chef",
      backContent:
        "At Captain Chef, we prioritize health, excellence, and sustainability by delivering high-quality, nutritious meals using natural ingredients. Through continuous innovation and collaboration with communities and sectors, we provide diverse, flexible meal options tailored to all lifestyles. ",
    },
  ];
  return (
    <Box sx={{ p: "30px" }}>
      <Box sx={{}}>
        {/*Picture Box*/}
        <Box
          sx={{
            width: "100%",
            maxWidth: 1200,
            height: 550,
            margin: "0 auto",
            position: "relative",
            backgroundColor: "#000",
            overflow: "hidden",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <video
            width="100%" // Adjust the width as needed
            height="100%"
            controls
            style={{
              borderRadius: "10px",
              objectFit: "cover",
            }}
          >
            <source src="/capchefvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box
          sx={{
            // display: "flex",
            // justifyContent: "start",
            // alignItems: "start",
            // gap: 2,
            marginTop: 2,
          }}
        >
          <Typography
            // variant="h4"
            sx={{
              color: "#D92531",
              fontWeight: "bold",
              textAlign: "left",
              fontSize: {
                xs: "22px",
                md: "30px",
                sm: "30px",
                lg: "30px",
                xl: "30px",
              },
            }}
          >
            Meet Hussain Mahmoud Al Daqal: Founder of Captain Chef
          </Typography>
          {/* <Box sx={{ textAlign: "left", margin: "0 auto" }}>
            <Typography>
              {" "}
            </Typography>
          </Box> */}
        </Box>

        <Box
          sx={{
            // border:"2px solid black",
            display: "flex",
            // m: { xs: 2, sm: 4, md: 2 },
            // ml: { xs: 2, sm: 4, md: 8 },
            backgroundColor: "background.paper",
            flexDirection: !isArabic
              ? { lg: "row", md: "row", sm: "row", xs: "column" }
              : {
                  lg: "row-reverse",
                  md: "row-reverse",
                  sm: "row-reverse",
                  xs: "column-reverse",
                },
            justifyContent: "space-between",
            direction: isArabic == "ar" ? "rtl" : "ltr",
          }}
        >
          {/* left section */}
          <Box
            sx={{
              width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
              display: "flex",
              flexDirection: "column",
              direction: isArabic == "ar" ? "rtl" : "ltr",
              pt: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Roboto",
                direction: isArabic ? "rtl" : "ltr",
                textAlign: "left",
                fontSize: {
                  xs: "18px",
                  md: "20px",
                  sm: "25px",
                  lg: "20px",
                  xl: "30px",
                },
              }}
            >
              Hussain Mahmoud Al Daqal, the visionary founder of Captain Chef,
              established the brand to inspire Saudi youth to embrace healthier
              lifestyles.
            </Typography>
          </Box>
          {/* right section */}
          <Box
            sx={{
              width: {
                xl: "40%",
                lg: "30%",
                md: "50%",
                sm: "100%",
                xs: "100%",
              },
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              objectFit: "contain",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "auto",
              }}
              src="/messageBg.svg"
              alt="image"
            />
          </Box>
        </Box>
        <Box
          sx={{
            padding: 2,
            textAlign: "left",
            display: "flex",
            // gap: "25px",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#d92531", fontWeight: "bold" }}
          >
            Who we are ?{" "}
          </Typography>
          <Box
            sx={{
              // maxWidth: {
              //   xs: "90%",
              //   sm: "80%",
              //   md: "60%",
              //   lg: "88%",
              //   xl: "85%",
              // },
              // margin: "0 auto",
              border: "2px solid black",
              textAlign: "left",
              // alignSelf: "left",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.5rem",
                  lg: "1.5rem",
                  xl: "1.5rem",
                },
                textAlign: "left",
              }}
            >
              Hussain Mahmoud Al Daqal, the visionary founder of Captain Chef,
              established the brand to inspire Saudi youth to embrace healthier
              lifestyles.
            </Typography>
          </Box>
        </Box>
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
                    textAlign: "center",
                    padding: 2,
                    color: "#333",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    backgroundColor: "#fff",
                    justifyContent: "start",
                    alignItems: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="h5" sx={{ color: "#D92531" }}>
                      {card.backTitle}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body3" sx={{ color: "#272727" }}>
                      {card.backContent}
                    </Typography>
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
                    backgroundColor: "transparent", // Updated to transparent
                    // borderRadius: "10%",
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
      </Box>
    </Box>
  );
};

export default About;

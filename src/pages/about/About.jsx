import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import useAppStore from "../../components/store";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { language, setLanguage } = useAppStore();
  const isArabic = language == "ar";

  const cards = [
    {
      image: "change1.jpg", // Replace with your image URL
      title: "Our Mission",
      backTitle: "Our Mission",
      backContent:
        "At Captain Chef, our vision is to lead in healthy nutrition, building a vibrant community aligned with Saudi Vision 2030. We provide balanced, creative meals to enhance quality of life for all..",
    },
    {
      image: "change2.png", // Replace with your image URL
      title: "Our Vision",
      backTitle: "Our Vision",
      backContent:
        "At Captain Chef, our vision is to lead in healthy nutrition, building a vibrant community aligned with Saudi Vision 2030. We provide balanced, creative meals to enhance quality of life for all.",
    },
    {
      image: "change3.png", // Replace with your image URL
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
            border: "2px solid black",
            m: 2,
            // p: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            <span style={{ color: "#000" }}>Meet</span>{" "}
            <span style={{ color: "#D92531" }}>Hussain Mahmoud Al Daqal</span>:{" "}
            <span style={{ color: "#000" }}>Founder of</span>{" "}
            <span style={{ color: "#D92531" }}>Captain Chef</span>
          </Typography>

          {/* <Box sx={{ textAlign: "left", margin: "0 auto" }}>
            <Typography>
              {" "}
            </Typography>
          </Box> */}
        </Box>

        <Box
          sx={{
            display: "flex",
            height: "auto",
            // alignItems: "center",
            // gap: "30px",
            glexDirection: { lg: "row", xs: "column", md: "row", sm: "row" },
            justifyContent: {
              lg: "start",
              md: "start",
              sm: "center",
              xs: "center",
            },
            width: "100%",
            // gridTemplateColumns: !isArabic
            //   ? { lg: "1fr 1fr", xs: "1fr" }
            //   : { lg: "1fr 1fr", xs: "1fr" },
            // gridAutoRows: "auto",
            gap: { md: 10, sm: 10, xs: 10, lg: 10 },
            backgroundColor: "background.paper",
            padding: 2,
            // direction: isArabic ? "rtl" : "ltr",
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "start",
              height: { lg: "450px", md: "auto", sm: "auto", xs: "auto" },
              alignItems: "start",
              maxWidth: { lg: "50%", xs: "350px", sm: "300px", md: "450px" },
              // flexWrap: "wrap",
              // height: "100%",
              padding: 2,
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              // height: "100%", // Ensure left section takes full height of its container
            }}
          >
            {/* Title Section */}
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              <span style={{ color: "#D92531" }}>Hussain Mahmoud Al Daqal</span>
              , The Visionary Founder Of{" "}
              <span style={{ color: "#D92531" }}>Captain Chef</span>
            </Typography>

            {/* Paragraph Section */}
            <Typography
              variant="body1"
              sx={{ color: "#272727", marginBottom: 2 }}
            >
              Established The Brand To Inspire Saudi Youth To Embrace Healthier
              Lifestyles. With A Focus On Accessible,{" "}
              <span style={{ fontWeight: "bold" }}>Nutritious Meal Plans</span>{" "}
              And A Commitment To Quality, He Empowers Individuals To Make
              Better Choices For Their Well-Being. Guided By The Belief That{" "}
              <span style={{ fontWeight: "bold" }}>"You Are Not Alone"</span>,{" "}
              <span style={{ color: "#D92531", fontWeight: "bold" }}>
                Captain Chef
              </span>{" "}
              Fosters A Culture Of Wellness Across The Community.
            </Typography>

            {/* Bullet Points Section */}
            <Box
              sx={{
                padding: 2,
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                marginBottom: 2,
              }}
            >
              <ul style={{ paddingLeft: "10px" }}>
                <li>
                  <Typography variant="body1" sx={{ color: "#272727" }}>
                    The Brand Focuses On Accessible And{" "}
                    <span style={{ fontWeight: "bold" }}>
                      Nutritious Meal Plans
                    </span>
                    .
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ color: "#272727" }}>
                    Commitment To Quality Ensures{" "}
                    <span style={{ fontWeight: "bold" }}>High Standards</span>{" "}
                    For Well-Being.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ color: "#272727" }}>
                    <span style={{ fontWeight: "bold" }}>Captain Chef</span>{" "}
                    Empowers Individuals To Make Better Health Choices.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1" sx={{ color: "#272727" }}>
                    Guided By{" "}
                    <span style={{ fontWeight: "bold" }}>
                      "You Are Not Alone"
                    </span>
                    , It Fosters A{" "}
                    <span style={{ fontWeight: "bold" }}>
                      Culture Of Wellness
                    </span>
                    .
                  </Typography>
                </li>
              </ul>
            </Box>

            {/* Read More Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D92531",
                  borderRadius: "10px",
                  color: "#fff",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#ff4d4d",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              // width: { lg: "auto", xs: "350px" },

              padding: 2,
              // height: "100%", // Match the height of the left section
            }}
          >
            <img
              style={{
                maxWidth: { lg: "500px", xs: "auto", sm: "0px", md: "450px" },
                width: { lg: "500px", xs: "auto", sm: "0px", md: "450px" },
                height: { lg: "90%", md: "40%", sm: "auto", xs: "20%" },
                objectFit: "contain",
                borderRadius: "8px",
              }}
              src="ownerpic.png"
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
                    position: "relative", // Allows layering child elements
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "#fff", // Fallback color in case the image doesn't load
                  }}
                >
                  {/* Background Image */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${card.image})`, // Use your image path here
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.4, // Low opacity for the background image
                      zIndex: 1, // Positioned behind the text content
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      position: "relative", // Ensures this stays above the background image
                      textAlign: "center",
                      padding: 2,
                      color: "#333",
                      display: "flex",
                      flexDirection: "column",
                      gap: "60px",
                      justifyContent: "center",
                      alignItems: "center", // Align items properly
                      zIndex: 2, // Positioned above the background image
                    }}
                  >
                    {/* Heading */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h5" sx={{ color: "#D92531" }}>
                        {card.backTitle}
                      </Typography>
                    </Box>

                    {/* Content */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="body3"
                        sx={{
                          color: "#272727",
                          textAlign: "center",
                          justifySelf: "center",
                        }}
                      >
                        {card.backContent}
                      </Typography>
                    </Box>
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "3rem",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "1.7rem" }}>
                    {card.title}
                  </Typography>
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

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import useAppStore from "../../components/store";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { language, setLanguage } = useAppStore();
  const isArabic = language == "ar";

  const cards = [
    {
      image: "who1.png", // Replace with your image URL
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
            maxWidth: 1000,
            height: 550,
            margin: "0 auto",
            position: "relative",
            backgroundColor: "#000",
            overflow: "hidden",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/bHauDmejB5g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "10px",
            }}
          ></iframe>
        </Box>
        <Box
          sx={{
            // border:"2px solid black",
            display: "flex",
            mr: { xs: 2, sm: 4, md: 8 },
            ml: { xs: 2, sm: 4, md: 8 },
            backgroundColor: "background.paper",
            flexDirection: !isArabic
              ? { lg: "row", md: "row", sm: "row", xs: "column" }
              : {
                  lg: "row-reverse",
                  md: "row-reverse",
                  sm: "row-reverse",
                  xs: "column-reverse",
                },
            justifyContent: "space-around",
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
                // fontSize: { xs: "14px", md: "20px", lg: "20px", xl: "20px" },
                // fontWeight: "bold",
                // wordSpacing: "2px",
                fontFamily: "Roboto",
                direction: isArabic ? "rtl" : "ltr",
              }}
            >
              {isArabic
                ? `نحن نوفر وجبات غذائية عالية الجودة تدعم أسلوب حياة متوازن ونشط. سواء كنت تمارس الرياضة أو تتبع نظامًا غذائيًا مخصصًا، فإن تطبيق كابتن شيف مصمم لتلبية احتياجاتك مع ضمان التنوع والمذاق اللذيذ. نحن هنا لنكون شريكك الموثوق في رحلتك الصحية من خلال حلول مرنة للوجبات ووجبات عالية الجودة تدعم أسلوب حياة متوازن ونشط. سواء كنت تمارس الرياضة أو تتبع نظامًا غذائيًا مخصصًا، فإن تطبيق كابتن شيف مصمم لتلبية احتياجاتك مع ضمان التنوع والمذاق اللذيذ. نحن هنا لنكون شريكك الموثوق في رحلتك الصحية من خلال حلول مرنة للوجبات.`
                : `Hussain Mahmoud Al Daqal, the visionary founder of Captain Chef, established the brand to inspire Saudi youth to embrace healthier lifestyles. With a focus on accessible, nutritious meal plans and a commitment to quality, he empowers individuals to make better choices for their well-being. Guided by the belief that "You are not alone," Captain Chef fosters a culture of wellness across the community.`}
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
            textAlign: "center",
            display: "flex",
            gap: "25px",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#d92531", fontWeight: "bold" }}
          >
            Who we are ?{" "}
          </Typography>
          <Box>
            <Typography variant="h6">
              Founded in 2016 by Captain Hussein Al-Daqal, Captain Chef combines
              expertise in fitness and nutrition to offer healthy, balanced
              meals tailored to diverse lifestyles. With 7 sales points, 3
              central kitchens, and delivery across 7 regions, we provide
              flexible solutions like monthly subscriptions, direct purchases,
              and corporate agreements. Our mission is to promote a holistic
              lifestyle through high-quality, nutritious meal services.
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

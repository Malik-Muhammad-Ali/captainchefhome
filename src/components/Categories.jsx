import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./categoriesCrousel.css";
import { Navigation } from "swiper/modules";

export default function Categories() {
  const arr = [
    { title: "Weight Maintain", name: "Plan", img: "/weight.png" },
    { title: "Muscles Gain", name: "Plan", img: "/muscleGain.png" },
    { title: "Takmim", name: "Plan", img: "/takmim.png" },
    { title: "Captain Chef", name: "Business", img: "/capSpecial.png" },
    { title: "Weight Loss", name: "Plan", img: "/weightlose.png" },
    { title: "Low Carb", name: "Plan", img: "/lowCarb.png" },
    { title: "Diabetes", name: "Plan", img: "/diabetes.png" },
    { title: "Life Style", name: "Plan", img: "/lifeStyle.png" },
  ];

  const getTextColor = (text) => {
    if (text.includes("Weight")) {
      return "#FFCA44";
    } else if (text.includes("Muscles")) {
      return "#352A6E";
    } else if (text.includes("Takmim")) {
      return "#0EA81D";
    } else if (text.includes("Captain")) {
      return "#CE2729";
    } else if (text.includes("Carb")) {
      return "#AE77BA";
    } else if (text.includes("Diabetes")) {
      return "#2A70B6";
    } else {
      return "#FD88BF";
    }
  };
  //   const navigate = useNavigate();
  //   const nameArray = title.split(" ");
  //   const isRTL = language === "ar";

  //   // Adjust the title arrangement for RTL and LTR
  //   const titleText = nameArray.length > 1 ? nameArray.slice(0, -1).join(" ") : title;
  //   const lastWord = isRTL ? nameArray[0] : nameArray[nameArray.length - 1];

  return (
    <>
    <Box sx={{
        display:"flex",
        flexDirection: "column",
        gap: { lg: "50px", md: "50px", sm: "30px", xs: "20px" },
        mr: { xs: 2, sm: 4, md: 8 },
          ml: { xs: 2, sm: 4, md: 8 },
          mb: { xs: 2, sm: 4, md: 8 },
    }}>
      <Box
        sx={{
          display: "inline-block",
          padding: "20px",
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
            fontSize: { lg: "40px", md: "30px", sm: "24px", xs: "24px" },
            fontWeight: 600,
            fontFamily: "Roboto",
            borderBottom: "2px solid red",
            display: "inline-block",
          }}
        >
          Our Categories
        </Typography>
      </Box>
      </Box>
      <Box>
        <Swiper
          spaceBetween={10}
          slidesPerView={6}
          navigation={{
            prevEl: ".swiper-button-prev", // Link to custom prev button
            nextEl: ".swiper-button-next", // Link to custom next button
          }}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          style={{ padding: "20px 10px" }}
          breakpoints={{
            // For mobile screens
            320: {
              slidesPerView: 2, // Show one slide
              centeredSlides: true, // Center the slide
            },
            // For small tablets
            640: {
              slidesPerView: 2, // Show three slides
              centeredSlides: false, // Don't center the slides
            },
            // For larger screens
            768: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 6,
              centeredSlides: false,
            },
          }}
        >
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          {arr.map((item, index) => (
            <SwiperSlide key={index}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
              <Card
                sx={{
                  maxWidth: "180px",
                  minWidth: "180px",
                  maxHeight: 250,
                  minHeight: 250,
                  borderRadius: "24px",
                  border: "4px solid",
                  borderColor: getTextColor(item.title),
                  flexGrow: 1,
                  cursor: "pointer",
                  boxShadow: "none",
                }}
                //   onClick={() => navigate(`/subscriptions/category/${id}`)}
              >
                <CardMedia
                  sx={{
                    height: 180,
                    width: "100%",
                    objectFit: "cover",
                  }}
                  image={item.img}
                //   title={item.title}
                  // image='messageBg.svg'
                />

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 0.8,
                    height: 45,
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    // gutterBottom
                    variant="body2"
                    sx={{
                      fontSize: "0.85rem",
                      fontFamily: "Roboto",
                      color: getTextColor(item.title),
                      // textAlign: isRTL ? "right" : "left",
                    }}
                  >
                    {/* {titleText} */}
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontsize: "0.65rem",
                      fontFamily: "Roboto",
                      fontWeight: 400,
                      // textAlign: isRTL ? "right" : "left",
                    }}
                  >
                    {/* {lastWord} */}
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

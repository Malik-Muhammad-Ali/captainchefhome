import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
  const swiperRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop(); // Stop autoplay immediately on hover
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start(); // Resume autoplay immediately on mouse leave
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { lg: "50px", md: "50px", sm: "30px", xs: "20px" },
          mr: { xs: 2, sm: 4, md: 8 },
          ml: { xs: 2, sm: 4, md: 8 },
          mb: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            padding: "20px",
            alignSelf: "flex-start"
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "40px", md: "30px", sm: "24px", xs: "24px" },
              fontWeight: 600,
              fontFamily: "Roboto",
              display: "inline-block",
            }}
          >
            Our Categories
          </Typography>
          <Box
              sx={{
                width: "auto",
                height: "4px",
                bgcolor: "red",
                borderRadius: "2px",
              }}
            ></Box>
        </Box>
      </Box>
      <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          spaceBetween={20}
          slidesPerView={6}
          loop={true}
          speed={2000}
          freeMode={true}
          freeModeMomentum={false}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          style={{ padding: "20px 10px" }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
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
          {arr.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
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

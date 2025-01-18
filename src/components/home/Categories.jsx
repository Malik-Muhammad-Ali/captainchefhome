import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import useAppStore from "../store";

export default function Categories() {
  const isExtraLarge = useMediaQuery("(min-width:1500px)");
  const { language, setLanguage } = useAppStore();
  const isArabic = language == "ar";

  const arr = [
    {
      title: "Weight Maintain",
      name: "Plan",
      img: "/weight.png",
      ar: { title: "الحفاظ على الوزن", name: "الخطة" },
    },
    {
      title: "Muscles Gain",
      name: "Plan",
      img: "/muscleGain.png",
      ar: { title: "زيادة العضلات", name: "الخطة" },
    },
    {
      title: "Takmim",
      name: "Plan",
      img: "/takmim.png",
      ar: { title: "تكمل", name: "الخطة" },
    },
    {
      title: "Captain Chef",
      name: "Business",
      img: "/capSpecial.png",
      ar: { title: "الطباخ كابتن", name: "الأعمال" },
    },
    {
      title: "Weight Loss",
      name: "Plan",
      img: "/weightlose.png",
      ar: { title: "فقدان الوزن", name: "الخطة" },
    },
    {
      title: "Low Carb",
      name: "Plan",
      img: "/lowCarb.png",
      ar: { title: "قليل الكربوهيدرات", name: "الخطة" },
    },
    {
      title: "Diabetes",
      name: "Plan",
      img: "/diabetes.png",
      ar: { title: "السكري", name: "الخطة" },
    },
    {
      title: "Life Style",
      name: "Plan",
      img: "/lifeStyle.png",
      ar: { title: "أسلوب الحياة", name: "الخطة" },
    },
    // {
    //   title: "Diabetes",
    //   name: "Plan",
    //   img: "/diabetes.png",
    //   ar: { title: "السكري", name: "الخطة" },
    // },
    // {
    //   title: "Life Style",
    //   name: "Plan",
    //   img: "/lifeStyle.png",
    //   ar: { title: "أسلوب الحياة", name: "الخطة" },
    // },
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

  const handleNavigation = () => {
    window.location.href = 'https://captainchefsubscription.netlify.app';
  };

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
          // border:"2px solid black"
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            padding: "20px",
            alignSelf: isArabic ? "flex-end" : "flex-start", // Dynamic alignment
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
            {isArabic ? "فئاتنا" : "OUR CATEGORIES"}
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
          spaceBetween={70}
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
              slidesPerView: 3,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 5,
              centeredSlides: false,
            },
            1440: {
              slidesPerView: 6,
              centeredSlides: false,
            },
            1600: {
              slidesPerView: 7,
              centeredSlides: false,
            },
          }}
        >
          {arr.map((item, index) => (
            <SwiperSlide key={index}>
            {!isExtraLarge?
              (<Box
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
                    onClick={handleNavigation}
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
                      direction: isArabic ? "rtl" : "ltr",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.85rem",
                        fontFamily: "Roboto",
                        color: getTextColor(item.title),
                        // textAlign: isArabic ? "right" : "left", // Adjust text alignment for Arabic
                      }}
                    >
                      {isArabic ? item.ar.title : item.title}{" "}
                      {/* Conditionally render Arabic or English title */}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.65rem",
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        // textAlign: isArabic ? "right" : "left", // Adjust text alignment for Arabic
                      }}
                    >
                      {isArabic ? item.ar.name : item.name}{" "}
                      {/* Conditionally render Arabic or English name */}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>) :
              (<Box
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
                    maxWidth: "300px",
                    minWidth: "300px",
                    maxHeight: 380,
                    minHeight: 380,
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
                      height: 300,
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
                      direction: isArabic ? "rtl" : "ltr",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1rem",
                        fontFamily: "Roboto",
                        color: getTextColor(item.title),
                        // textAlign: isArabic ? "right" : "left", // Adjust text alignment for Arabic
                      }}
                    >
                      {isArabic ? item.ar.title : item.title}{" "}
                      {/* Conditionally render Arabic or English title */}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "1rem",
                        fontFamily: "Roboto",
                        fontWeight: 400,
                        // textAlign: isArabic ? "right" : "left", // Adjust text alignment for Arabic
                      }}
                    >
                      {isArabic ? item.ar.name : item.name}{" "}
                      {/* Conditionally render Arabic or English name */}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>)
            }
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

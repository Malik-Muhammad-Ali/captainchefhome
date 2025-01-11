import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { Navigation } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae egestas ",
    image: "profilepicture.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    text: "Proin amet arcu dui sed tincidunt quis viverra nulla.",
    image: "profilepicture.jpg",
  },
  {
    name: "Alex Johnson",
    role: "CFO",
    text: "Vitae egestas quis varius tristique ornare et pharetra purus.",
    image: "profilepicture.jpg",
  },
  {
    name: "Emily Davis",
    role: "Designer",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image: "profilepicture.jpg",
  },
  {
    name: "Michael Lee",
    role: "Engineer",
    text: "Quis varius tristique ornare et pharetra purus.",
    image: "profilepicture.jpg",
  },
  {
    name: "Sophia Wilson",
    role: "Developer",
    text: "Vitae egestas quis varius tristique ornare et pharetra purus.",
    image: "profilepicture.jpg",
  },
];

export default function TestimonialsSec() {
  const [activeIndex, setActiveIndex] = useState(1);
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
            alignSelf: "flex-start",
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
            Our Customers
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
      <Box
        sx={{
          position: "relative",
          width: "100%",
          m: "auto",
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                  // boxShadow: "none",
                  opacity: activeIndex === index ? 1 : 0.5,
                  transition: "opacity 0.3s",
                  backgroundColor: "background.paper",
                  gap: 4,
                  m:"20px"
                }}
              >
                <Box>
                  <Avatar
                    src={testimonial.image}
                    alt="Testimonial"
                    sx={{ width: 80, height: 80 }}
                  />
                </Box>
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Roboto", color: "text.secondary" }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      color: "text.primary",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "red", fontFamily: "Roboto" }}
                  >
                    {testimonial.role}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
          className="custom-prev"
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background:
              "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
            color: "black",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          className="custom-next"
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
            color: "black",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </>
  );
}

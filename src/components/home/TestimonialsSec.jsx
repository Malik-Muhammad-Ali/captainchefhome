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
            OUR CUSTOMERS
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
            // background:
            //   "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
            // color: "black",
            "&:hover": { backgroundColor:"transparent" },
          }}
        >
          <svg width="70" height="70" viewBox="0 0 51 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.4824 108C45.8913 108.003 45.3053 107.89 44.7581 107.666C44.2109 107.442 43.7131 107.112 43.2935 106.695L6.59776 69.9364C4.50636 67.8467 2.84707 65.3643 1.71492 62.6312C0.582766 59.8981 0 56.9682 0 54.0092C0 51.0501 0.582766 48.1202 1.71492 45.3871C2.84707 42.6541 4.50636 40.1716 6.59776 38.0819L43.2935 1.32319C43.7122 0.903684 44.2094 0.570917 44.7566 0.343885C45.3037 0.116852 45.8902 4.42017e-09 46.4824 0C47.0747 -4.42017e-09 47.6611 0.116852 48.2083 0.343885C48.7555 0.570917 49.2526 0.903684 49.6714 1.32319C50.0902 1.74269 50.4224 2.24071 50.649 2.78881C50.8757 3.33692 50.9923 3.92437 50.9923 4.51764C50.9923 5.1109 50.8757 5.69836 50.649 6.24646C50.4224 6.79457 50.0902 7.29259 49.6714 7.71209L12.9757 44.4708C10.4524 47.0016 9.03504 50.4323 9.03504 54.0092C9.03504 57.5861 10.4524 61.0167 12.9757 63.5475L49.6714 100.306C50.0924 100.725 50.4265 101.222 50.6546 101.77C50.8826 102.319 51 102.907 51 103.501C51 104.095 50.8826 104.683 50.6546 105.231C50.4265 105.779 50.0924 106.277 49.6714 106.695C49.2517 107.112 48.754 107.442 48.2068 107.666C47.6595 107.89 47.0736 108.003 46.4824 108Z" fill="#797A7A"/>
</svg>

        </IconButton>

        <IconButton
          className="custom-next"
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            zIndex: 10,
            // background:
            //   "linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
            // color: "black",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <svg width="70" height="70" viewBox="0 0 51 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.51756 108C3.92645 108.003 3.34047 107.89 2.79324 107.666C2.246 107.442 1.74827 107.112 1.32858 106.695C0.9076 106.277 0.573458 105.779 0.34543 105.231C0.117401 104.683 0 104.095 0 103.501C0 102.907 0.117401 102.319 0.34543 101.77C0.573458 101.222 0.9076 100.725 1.32858 100.306L38.0243 63.5475C40.5476 61.0167 41.965 57.5861 41.965 54.0092C41.965 50.4323 40.5476 47.0016 38.0243 44.4708L1.32858 7.71209C0.482814 6.86487 0.00766523 5.71579 0.00766523 4.51764C0.00766523 3.31949 0.482814 2.17041 1.32858 1.32319C2.17435 0.475964 3.32146 0 4.51756 0C5.71366 0 6.86077 0.475964 7.70654 1.32319L44.4022 38.0819C46.4936 40.1716 48.1529 42.6541 49.2851 45.3871C50.4172 48.1202 51 51.0501 51 54.0092C51 56.9682 50.4172 59.8981 49.2851 62.6312C48.1529 65.3643 46.4936 67.8467 44.4022 69.9364L7.70654 106.695C7.28685 107.112 6.78912 107.442 6.24188 107.666C5.69465 107.89 5.10868 108.003 4.51756 108Z" fill="#797A7A"/>
</svg>

        </IconButton>
      </Box>
    </>
  );
}

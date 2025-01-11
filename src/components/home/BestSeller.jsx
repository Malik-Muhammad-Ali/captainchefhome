import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, IconButton, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./categoriesCrousel.css";
import { Navigation } from "swiper/modules";
import { useRef } from "react";

export default function BestSeller() {
  const arr = [
    { title: "Weight", name: "Maintenance Plan", img: "/weight.png" },
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
  const prevRef = useRef(null); // Reference for the previous button
  const nextRef = useRef(null); 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // gap: { lg: "50px", md: "50px", sm: "30px", xs: "20px" },
        mr: { xs: 2, sm: 4, md: 8 },
        ml: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            padding: "20px",
            alignSelf: "flex-start",
            mb: { xs: 2, sm: 4, md: 8 },
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
            OUR BEST SELER
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
          // m: "auto",
          // p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        }}>
        <Swiper
          spaceBetween={100}
          slidesPerView={5}
          navigation={{
            prevEl: ".custome-prev",
            nextEl: ".custome-next",
          }}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          style={{ padding: "20px 30px" }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 5,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 5,
              centeredSlides: true,
            },
          }}
        >
          {arr.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <Card
                  sx={{
                    maxWidth: "200px",
                    minWidth: "200px",
                    aspectRatio: 2 / 2,
                    borderRadius: "24px",
                    flexGrow: 1,
                    cursor: "pointer",
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  //   onClick={() => navigate(`/subscriptions/category/${id}`)}
                >
                  <CardMedia
                    sx={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    image={item.img}
                    //   title={item.title}
                  />
                </Card>
                <Typography
                  // gutterBottom
                  variant="body"
                  component="div"
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Roboto",
                    color: getTextColor(item.title),
                  }}
                >
                  {/* {titleText} */}
                  {item.title}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <IconButton
        ref={prevRef}
          className="custome-prev"
          sx={{
            position: "absolute",
            top: "45%",
            left: "1px",
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
        ref={nextRef}
          className="custome-next"
          sx={{
            position: "absolute",
            top: "45%",
            right: "1px",
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
    </Box>
  );
}

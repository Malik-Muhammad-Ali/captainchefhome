import { Box, Typography } from "@mui/material";
import React from "react";
import useAppStore from "../store";

const MessageComponent = () => {
  const { language, setLanguage } = useAppStore();
  const isArabic = language == "ar";
  return (
    <Box sx={{
      // border:"2px solid black",
      display:"flex",
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
          justifyContent:"space-between",
          direction: isArabic == "ar" ? "rtl" : "ltr",
    }}>
    {/* left section */}
      <Box sx={{
        width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
        display:"flex",
        flexDirection:"column",
        direction: isArabic == "ar" ? "rtl" : "ltr",
      }}>
        <Box sx={{
            display: "inline-block",
            padding: "20px",
            alignSelf: "flex-start",
            direction: isArabic == "ar" ? "rtl" : "ltr", // Adjust direction dynamically
        }}>
        <Typography
            sx={{
              fontSize: { lg: "40px", md: "30px", sm: "24px", xs: "24px" },
              fontWeight: 600,
              fontFamily: "Roboto",
              display: "inline-block",
              textAlign: isArabic ? "right" : "left", // Adjust alignment dynamically
            }}
          >
            {isArabic ? "رسالتنا" : "OUR MESSAGE"}
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
        <Typography
        sx={{
          fontSize: { xs: "14px", md: "20px",lg:"26px", xl: "40px" },
          fontWeight: 400,
          wordSpacing: "2px",
          fontFamily: "Roboto",
          direction: isArabic ? "rtl" : "ltr",
        }}
      >
        {isArabic
          ? `نحن نوفر وجبات غذائية عالية الجودة تدعم أسلوب حياة متوازن ونشط. سواء كنت تمارس الرياضة أو تتبع نظامًا غذائيًا مخصصًا، فإن تطبيق كابتن شيف مصمم لتلبية احتياجاتك مع ضمان التنوع والمذاق اللذيذ. نحن هنا لنكون شريكك الموثوق في رحلتك الصحية من خلال حلول مرنة للوجبات ووجبات عالية الجودة تدعم أسلوب حياة متوازن ونشط. سواء كنت تمارس الرياضة أو تتبع نظامًا غذائيًا مخصصًا، فإن تطبيق كابتن شيف مصمم لتلبية احتياجاتك مع ضمان التنوع والمذاق اللذيذ. نحن هنا لنكون شريكك الموثوق في رحلتك الصحية من خلال حلول مرنة للوجبات.`
          : `We provide nutritious, high-quality meals that support a balanced and active lifestyle. Whether exercising or on a personalized diet, the Captain Chef app is designed to meet your needs while ensuring variety and delicious taste. We're here to be your trusted partner in your health journey with flexible meal solutions high-quality meals that support a balanced and active lifestyle. Whether exercising or on a personalized diet, the Captain Chef app is designed to meet your needs while ensuring variety and delicious taste. We're here to be your trusted partner in your health journey with flexible meal solutions.`}
      </Typography>
      </Box>
    {/* right section */}
    <Box
      sx={{
        width: { xl:"40%",lg: "50%", md: "50%", sm: "100%", xs: "100%" },
        display: "flex",
        alignItems: "center",
        objectFit: "contain",
      }}
    >
      <img
        style={{
          width: "100%",
          height:"auto",
        }}
        src="/messageBg.svg"
        alt="image"
      />
    </Box>
    </Box>
  );
};

export default MessageComponent;

import { Box, Typography } from "@mui/material";
import React from "react";
import useAppStore from "../store";

const MessageComponent = () => {
  const { language, setLanguage } = useAppStore();
  const isArabic = language == "ar";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mr: { xs: 2, sm: 4, md: 8 },
        ml: { xs: 2, sm: 4, md: 8 },
        // gap: { lg: "50px", nd: "50px", sm: "30px", xs: "20px" },
        backgroundColor: "background.paper",
        // border: "1px solid black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignSelf: isArabic ? "flex-end" : "flex-start", // Dynamic alignment
        }}
      >
        <Box
          sx={{
            display: "inline-block",
            padding: "20px",
            alignSelf: "flex-start",
            direction: isArabic == "ar" ? "rtl" : "ltr", // Adjust direction dynamically
          }}
        >
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
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isArabic
            ? { lg: "row", md: "row", sm: "column", xs: "column" }
            : {
                lg: "row-reverse",
                md: "row-reverse",
                sm: "column-reverse",
                xs: "column-reverse",
              },
          justifyContent: "space-around",
          //   backgroundColor: "#f9f9f9",
        }}
      >
        <Box
          sx={{
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            alignItems: "center",
            // backgroundColor: "#f9f9f9",
            p: "20px",
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
        <Box
          sx={{
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            // alignItems: "flex-start",
            // justifyContent: "center",
            padding: "20px",
            // backgroundColor: "#f9f9f9",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "24px" },
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
      </Box>
    </Box>
  );
};

export default MessageComponent;

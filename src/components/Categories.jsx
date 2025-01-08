import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';

export default function Categories() {
//   const navigate = useNavigate();
//   const nameArray = title.split(" ");
//   const isRTL = language === "ar";

  // Adjust the title arrangement for RTL and LTR
//   const titleText = nameArray.length > 1 ? nameArray.slice(0, -1).join(" ") : title;
//   const lastWord = isRTL ? nameArray[0] : nameArray[nameArray.length - 1];

  return (
    <Card
      sx={{
        maxWidth: {
          xs: 80,
          sm: 80,
          md: 120,
          lg: 120,
          xl: 120,
        },
        minWidth: {
          xs: 80,
          sm: 80,
          md: 120,
          lg: 120,
          xl: 120,
        },
        maxHeight: {
          xs: 100,
          sm: 100,
          md: 150,
          lg: 150,
          xl: 150,
        },
        minHeight: {
          xs: 100,
          sm: 100,
          md: 150,
          lg: 150,
          xl: 150,
        },
        borderRadius: {
          xs: "12px",
          sm: "24px",
          md: "24px",
          lg: "24px"
        },
        border: "2px solid",
        borderColor: red,
        flexGrow: 1,
        cursor: "pointer",
        boxShadow: 'none',
        '@media (min-width: 391px) and (max-width:440px)': {
          minWidth:"160px",
          maxWidth:"160px",
          minHeight:"200px",
          maxHeight:"200px",
        },
      }}
    //   onClick={() => navigate(`/subscriptions/category/${id}`)}
    >
      <CardMedia
        sx={{
          height: {
            xs: 139,
          sm: 158,
          md: 175,
          lg: 215,
          xl: 280
          },
          width: '100%',
          objectFit: "cover",
        }}
        // image={img}
        // title={title}
        image='messageBg.svg'
      />
      
      <CardContent
        sx={{
          display:"flex",
          flexDirection:"column",
          padding: {
            xs: 0.5,
            sm: 1,
            md: 1.5,
            lg: 1.5,
            xl: 2,
          },
          gap:{
            xs:0.5,
            sm:1,
            md:1,
            lg:1,
            xl:2.5,
          },
        }}
      >
        <Typography
          // gutterBottom
          variant="body"
          component="div"
          sx={{
            fontSize: {
              xs: '0.75rem',
              sm: '1rem',
              md: '1.25rem',
              lg: '1.5rem',
              xl: '1.75rem',
            },
            fontWeight: "bold",
            // textAlign: isRTL ? "right" : "left",
          }}
        >
          {/* {titleText} */}
          title
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: red,
            fontSize: {
              xs: '0.65rem',
              sm: '0.85rem',
              md: '1rem',
              lg: '1rem',
              xl: '1.25rem',
            },
            // textAlign: isRTL ? "right" : "left",
          }}
        >
          {/* {lastWord} */}
          description
        </Typography>
      </CardContent>
    </Card>
  );
}

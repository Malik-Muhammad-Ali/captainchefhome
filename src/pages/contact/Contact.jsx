import { Box, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box sx={{
      height:"400px",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
      // backgroundColor:"blue"
    }}>
      <Typography sx={{
        fontSize:"32px",
        fontFamily:"Roboto",
        fontStyle:"italic",
        fontWeight:"bold",
        color:"#FFCA44",
        letterSpacing:"6px"
      }}>
        Comming soon
      </Typography>
    </Box>
  )
}

export default Contact

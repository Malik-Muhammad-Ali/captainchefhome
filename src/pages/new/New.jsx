import { Box, Typography } from '@mui/material'
import React from 'react'

const New = () => {
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
        color:"#0EA81D",
        letterSpacing:"6px"
      }}>
        Comming soon
      </Typography>
    </Box>
  )
}

export default New

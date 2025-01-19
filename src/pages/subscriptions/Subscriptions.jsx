import { Box, Typography } from '@mui/material'
import React from 'react'

const Subscriptions = () => {
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
        color:"#CE2729",
        letterSpacing:"6px"
      }}>
        Subscriptions Comming soon
      </Typography>
    </Box>
  )
}

export default Subscriptions

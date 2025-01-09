import { Box } from '@mui/material'
import React from 'react'

const HeroSec = () => {
  return (
    <Box 
  sx={{
    width: "100%", 
    aspectRatio: "4/2", // Replace with the aspect ratio of your image
    // height: "auto", 
    position: "relative", 
    overflow: "hidden", 
  }}
>
  <img 
    style={{ 
      width: "100%", 
      height: "100%", 
      objectFit: "cover", 
      aspectRatio: "16/9" // Replace with the aspect ratio of your image
    }} 
    src="heroImg.svg" 
    alt="hero section" 
  />
</Box>

  )
}

export default HeroSec

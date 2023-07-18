import React from 'react'
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channel,marginTop }) => {
  console.log(channel)
  return (
    <Box 
      sx={{ 
        boxShadow: "none", 
        borderRadius: "20px", 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        width:{md:'320px',xs:'356px'},
        height: '326px',
        margin: 'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}` || demoChannelUrl}>
        <CardContent 
          sx={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: 'center',
            textAlign: 'center',
            color:"#fff"
          }}
        >
          <CardMedia 
            image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
            alt={channel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb:2,
              border:"1px solid #e3e3e3"
            }}
          />
          <Typography variant='h6'>
            {channel?.snippet?.title || demoChannelTitle}
            <CheckCircle sx={{fontSize:14,ml:"4px"}} />  
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography variant='subtitle1' fontWeight='bold' color='gray'>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )} 
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
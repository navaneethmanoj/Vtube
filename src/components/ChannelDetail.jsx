import { Box } from '@mui/material'
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {Videos, ChannelCard} from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => setVideos(data?.items))
  },[id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
            background: 'radial-gradient(circle, rgba(81,102,210,1) 0%, rgba(120,87,208,1) 31%, rgba(252,70,107,1) 100%)',
            zIndex: '10',
            height: '300px'    
        }}/>
        <ChannelCard channel={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm: '100px'}}} />
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  )
}

export default ChannelDetail
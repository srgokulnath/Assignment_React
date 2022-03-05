import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Box, Paper, Typography } from '@mui/material'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

function Home() {
  const navigate = useNavigate();
  return (
    <Box className='home'>
      <Box className="contents">
        <Paper elevation={4} className='audio-card' style={{ backgroundColor: "#2D31FA" }} onClick={() => { navigate("/textarea") }}>
          <TextSnippetIcon style={{ color: "white", fontSize: "3rem" }} />
          <Typography variant="h5" style={{ color: "white", fontWeight: "bold" }}>
            Text Arena
          </Typography>


        </Paper>
        <Paper elevation={4} className='audio-card' style={{ backgroundColor: "#2D31FA" }} onClick={() => { navigate("/audio") }}>
          <GraphicEqIcon style={{ color: "white", fontSize: "3rem" }} />
          <Typography variant="h5" style={{ color: "white", fontWeight: "bold" }}>
            Audio Stream
          </Typography>


        </Paper>
      </Box>


    </Box>
  )
}

export default Home
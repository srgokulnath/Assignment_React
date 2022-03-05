import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material'
import './style.css'

function Navbar() {
    const navigate = useNavigate();
    return (
        <Paper elevation={3} className='nav'>
            <Box style={{ cursor: "pointer", fontSize: "1.3rem" }} onClick={() => { navigate("/") }} className="logo">
                Text Downloader and Audio Streamer
            </Box>
        </Paper>
    )
}

export default Navbar
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material'
import './style.css'

function Navbar() {
    const navigate = useNavigate();
    return (
        <Paper elevation={3} className='nav'>
            <Box style={{ cursor: "pointer" }} onClick={() => { navigate("/") }} className="logo">
                Text and Audio Downloader
            </Box>

        </Paper>
    )
}

export default Navbar
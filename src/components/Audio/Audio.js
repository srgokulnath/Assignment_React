import { Box, Button, Paper, Typography, IconButton, Input } from '@mui/material'
import React, { useState } from 'react'
import AudioStream from '../AudioStream/AudioStream';
import './style.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';


function Audio() {
    const [audioFile, setAudioFile] = useState("");
    const [uploadplay, setUploadPlay] = useState(false);

    const handleAudioFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setAudioFile(reader.result);
        }
    }

    const handleClick = () => {
        const audio = document.getElementById("audio");
        if (uploadplay) {

            setUploadPlay(false);
            audio.pause();

        }
        else {
            setUploadPlay(true);
            audio.play();

        }
    }

    return (
        <Box className="audio-stream">
            <audio id="audio" src={audioFile} ></audio>
            <Paper className='upload-audio' style={{ width: "300px", height: "300px" }} elevation={4}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Upload Audio File
                </Typography>
                <Box className="upload-media">
                    <Box style={{ cursor: "pointer", position: "relative" }}>

                        <Input style={{ cursor: "pointer", position: "absolute", opacity: "0", zIndex: "9" }} disableUnderline variant="standard" type='file' onChange={handleAudioFile} >
                            upload
                        </Input>
                        <Button variant="contained" disableElevation style={{ backgroundColor: "#2D31FA", cursor: "pointer", positon: "absolute" }} >
                            Upload
                        </Button>
                    </Box>
                    <IconButton style={{ backgroundColor: "#2D31FA" }} className="play-btn" onClick={handleClick}>
                        {uploadplay ? <StopIcon style={{ color: "white" }} /> : <PlayArrowIcon style={{ color: "white" }} />}
                    </IconButton>
                </Box>
            </Paper>
            <Paper className="record-audio" elevation={4}>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    Record Audio
                </Typography>
                <AudioStream />
            </Paper>
        </Box>
    )
}

export default Audio
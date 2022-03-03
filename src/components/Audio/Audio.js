import { Box, Button, Input } from '@mui/material'
import React, { useState } from 'react'
import AudioStream from '../AudioStream/AudioStream';
import './style.css'

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
            <Box>
                <audio id="audio" src={audioFile} ></audio>
                <Box style={{ position: "relative" }}>
                    <Box style={{ position: "absolute", opacity: "0", zIndex: "9" }}>
                        <Input disableUnderline variant="standard" type='file' onChange={handleAudioFile} >
                            upload
                        </Input>
                    </Box>

                    <Button variant="contained" color="primary" disableElevation style={{ cursor: "pointer", positon: "absolute" }} >
                        Upload
                    </Button>
                </Box>

                <Button onClick={handleClick}>
                    Play
                </Button>
            </Box>
            <AudioStream />
        </Box>
    )
}

export default Audio
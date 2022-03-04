import React, { useState } from "react";
import "./style.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { Box, IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';
import StopCircleIcon from '@mui/icons-material/StopCircle';

function AudioStream() {
  const [play, setPlay] = useState(false)
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });


  const handleClick = () => {
    const recaudio = document.getElementById("rec-audio");
    if (play) {
      console.log(mediaBlobUrl);
      setPlay(false);
      recaudio.pause();

    }
    else {
      setPlay(true);
      recaudio.play();
    }
  }

  return (

    <Box className="record">
      <audio id="rec-audio" src={mediaBlobUrl} ></audio>
      <Box>
        {
          status !== "recording" ? <IconButton className="record-icon" onClick={startRecording}>
            <MicIcon style={{ fontSize: "3rem", color: "red" }} />
          </IconButton> : <IconButton className="record-icon" onClick={stopRecording}>
            <StopCircleIcon style={{ fontSize: "3rem", color: "red" }} />
          </IconButton>
        }
      </Box>
      <Box style={{ margin: "30px 0" }}>
        <IconButton style={{ backgroundColor: "#2D31FA" }} onClick={handleClick} >
          {play ? <StopIcon style={{ color: "white" }} /> : <PlayArrowIcon style={{ color: "white" }} />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default AudioStream;

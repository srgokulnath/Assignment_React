import React, { useState } from "react";
import "./style.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { Button, Box, IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';

function AudioStream() {
  const [play, setPlay] = useState(false)
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const downloadAudioFile = () => {
    const element = document.createElement("a");
    console.log(mediaBlobUrl);
    const file = new Blob([mediaBlobUrl], {
      type: "audio/mp3",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.wav";
    document.body.appendChild(element);
    element.click();
  };

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

    <Box>
      <audio id="rec-audio" src={mediaBlobUrl} ></audio>
      {
        status !== "recording" ? <Box className="rec-btn" onClick={startRecording} >

        </Box> : <Box className="pause-btn" onClick={stopRecording} >

        </Box>
      }
      <IconButton onClick={handleClick} >
        {play ? <StopIcon style={{ color: "red" }} /> : <PlayArrowIcon />}
      </IconButton>
      <Button onClick={downloadAudioFile} >Download</Button>
    </Box>
  );
}

export default AudioStream;

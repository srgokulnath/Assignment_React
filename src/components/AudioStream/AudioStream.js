import React from "react";
import "./style.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function AudioStream() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });
  return (
    <>
      <div style={{ marginTop: "2%" }}>
        <p>{status}</p>
        {/* <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button> */}
        {status=="recording" && <button onClick={stopRecording}>Stop Recording</button>}

        {status!="recording" && <button onClick={startRecording}>Start Recording</button>}
        
        {/* {!recording && <button onClick={e => this.startRecording(e)}>Record</button>}
          {recording && <button onClick={e => this.stopRecording(e)}>Stop</button>} */}
        <video src={mediaBlobUrl} autoplay loop controls></video>
        
      </div>
    </>
  );
}

export default AudioStream;

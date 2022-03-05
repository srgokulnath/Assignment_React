import React, { useEffect, useState } from "react";
import "./style.css";
import { Box, Button, Typography } from "@mui/material";

function TextArea() {

  const CHANGE_COLOR_INDEX = 100;
  const [text, setText] = useState("");
  const [blackText, setBlackText] = useState("text");
  const [redText, setRedText] = useState("red");

  useEffect(() => {
    setBlackText(text.substring(0, CHANGE_COLOR_INDEX));
    setRedText(text.substring(CHANGE_COLOR_INDEX));
  }, [text]);

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([blackText], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  return (

    <Box className="text-area">
      <Typography style={{ textAlign: "center", margin: "2% 0", fontWeight: "bold" }} variant="h5">
        Text Downloader
      </Typography>
      <Box className="inputText">
        <textarea
          className="input"
          onChange={(e) => { setText(e.target.value) }}
        ></textarea>
        <Box style={{ fontFamily: "sans-serif", letterSpacing: "1.1px", margin: "0", padding: "0", position: "absolute", width: '400px' }}>
          {blackText}
          <span style={{ color: 'red' }}>{redText}</span>
        </Box>
      </Box>
      <Button style={{ margin: "2% 0", backgroundColor: "#2D31FA" }} variant="contained" onClick={downloadTxtFile} disableElevation>
        Download Text
      </Button>
    </Box>
  );
}

export default TextArea;

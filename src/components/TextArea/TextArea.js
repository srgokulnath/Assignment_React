import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function TextArea() {

  const CHANGE_COLOR_INDEX = 10
  const [text, setText] = useState("");
  const [blackText, setBlackText] = useState("text");
  const [redText, setRedText] = useState("red");

  useEffect(() => {
    setBlackText(text.substring(0, CHANGE_COLOR_INDEX));
    setRedText(text.substring(CHANGE_COLOR_INDEX + 1));
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
  };

  const handle = (e) => {
    // const string = document.getElementById("imput").value;
    // const len = string.length;

    setText(e.target.value)    
    
  };

 

  return (
    <div>
      <div className="text-areaBody">
        <h1>Text Downloader</h1>

        <div className="ts">
          
          
          <div style={{maxWidth:"200px"}}>
            <div style={{position: 'absolute', maxWidth:"400px"}}>
              {blackText} 
              <span  style={{color:'red', maxWidth:"200px"}}>{redText}</span>
            </div>
          </div>
          
          
          


          <div className="inputText">
            <input
            id="input"
            className="input1"
            onChange={handle}
            value={text}      
          

          />
          </div>
          
          
        </div>

        <div className="buttons">
          <button onClick={downloadTxtFile} className="btn">
            Download
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default TextArea;

import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function TextArea() {
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("input").value], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handle = () => {
    const string = document.getElementById("imput").value;
    const len = string.length;
    if (len > 10) {
      string.current.css = {color: "red"};
    }
  };

  return (
    <div>
      <div className="text-areaBody">
        <h1>Text Downloader</h1>

        <div className="ts">
          <textarea
            id="input"
            className="input1"
            onKeyUp={handle}
          ></textarea>
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

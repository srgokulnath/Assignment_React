import React, { useState } from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function TextArea() {

  const [text, setText] = useState("");

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
    const ele = document.getElementById("input");
    const sp1 = document.getElementById("sp-1");
    const sp2 = document.getElementById("sp-2");

    if (text.length < 10) {
      sp1.innerHTML = ele.value.substring(0, 10);
      console.log(sp1.innerHTML);
    }
    else {
      sp2.innerHTML = ele.value.substring(10, text.length)
    }
  };

  return (
    <div>
      <div className="text-areaBody">
        <h1>Text Downloader</h1>


        <div
          type="text"
          id="input"
          onChange={(e) => { setText(e.target.value) }}
          className="input1"
          onKeyUp={handle}
        >
          <span id="sp-1">

          </span>
          <span id="sp-2">

          </span></div>


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

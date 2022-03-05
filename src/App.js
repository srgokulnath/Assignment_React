import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TextArea from "./components/TextArea/TextArea";
import Navbar from "./components/Navbar/Navbar";
import Audio from "./components/Audio/Audio";
import { Box } from "@mui/material";


function App() {
  return (
    <Router>
      <Box className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/textarea" element={<TextArea />} />
          <Route path="/audio" element={<Audio />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

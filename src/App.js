import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AudioStream from './components/AudioStream/AudioStream';
import Home from './components/Home/Home';
import TextArea from './components/TextArea/TextArea';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/audiostream" element={<AudioStream />} />
          <Route path="/textarea" element={<TextArea />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

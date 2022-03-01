import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AudioStream from './AudioStream';
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="app"> 
        <Routes>
          <Route path = "/audiostream" element = {<AudioStream/>}/>
          <Route path = "/" element = {<Home/>}/>        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

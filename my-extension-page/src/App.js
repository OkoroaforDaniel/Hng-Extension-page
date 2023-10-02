import './App.css';
import Landing from './Components/Landing/Landing';
import Video from './Components/VideoPage/Video';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Video" element={<Video />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    Aos.init({
      duration: 1250,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Experience from './pages/Experience';
import Education from './pages/Education';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import JobRoleResult from './components/jobRoleResult';
import JobOpenings from './components/jobOpenings';
import MlAssessment from './components/mlAssessment';
import Assessment from './components/assessment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/job-role-result" element={<JobRoleResult />} />
      <Route path="/job-openings/:role" element={<JobOpenings />} />
      <Route path="/assessment/:role" element={<MlAssessment />} />
      <Route path="/assess" element={<Assessment />} />
    </Routes>
  );
}

export default App;
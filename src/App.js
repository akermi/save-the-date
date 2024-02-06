// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownPage from './Countdown';
import InvitePage from './Invite';
import './App.css';

function App() {
  return (
    // <div className="App">
    // <header className="App-header">
    <Router>
    <Routes>
      <Route path="/" element={<InvitePage />} />
      <Route path="/countdown" element={<CountdownPage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    //   </header>
    // </div>
  );
}

export default App;

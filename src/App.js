// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownPage from './Countdown';
// import InvitePage from './Invite';
import './App.css';

function App() {
  return (
    // <div className="App">
    // <header className="App-header">
    <Router basename="/save-the-date">
    <Routes>
      <Route path="/" element={<CountdownPage />} />
      {/* <Route path="/countdown" element={<InvitePage />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    //   </header>
    // </div>
  );
}

export default App;

// src/components/InvitePage.js
import React from 'react';
// import Card from './Card';
// import CountdownPage from './Countdown';
import { Link } from 'react-router-dom';

const InvitePage = () => {
  return (
    <div className="invite-page">
      <h1>Wedding Invitation</h1>
      <p>ขอเชิญร่วมในความสุขและความรักของเรา</p>
      <button><Link to="/countdown">Ok 888</Link></button>
    </div>
  );
};

export default InvitePage;

// src/Countdown.js
import React from 'react';
import Countdown from 'react-countdown';

const targetDate = new Date('March 9, 2025 00:00:00 GMT+0000').getTime();

const CountdownComponent = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-3xl font-semibold text-pink-500">eiei</span>;
    } else {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
               <h1 className="text-4xl font-bold ">Comming Soon</h1>
            <div className="countdown-container  p-8 rounded-lg shadow-md">
                <span className="countdown-item bg-pastel3">{String(days).padStart(2, '0')}d</span>
                <span className="countdown-item bg-pastel4">{String(hours).padStart(2, '0')}:</span>
                <span className="countdown-item bg-pastel5">{String(minutes).padStart(2, '0')}:</span>
                <span className="countdown-item bg-pastel7">{String(seconds).padStart(2, '0')}s</span>
            </div>
           
          <div className="spotify-embed">
            {/* Paste the copied Spotify Embed Code here */}
            {/* Example code, replace with your own */}
            {/* <iframe
              title="spotify-embed"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"
              width="300"
              height="380"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe> */}
            <iframe  title="spotify-embed" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXc51TI5dx7RC?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
       
      );
    }
  };

  return (
    <div className="h-screen  gradient-bg-pastel">
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountdownComponent;


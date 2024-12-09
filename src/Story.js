import React from 'react';
import './App.css';  // You can style it as per your preference
import Countdown from 'react-countdown';
const imgNo1 = process.env.PUBLIC_URL + '/img/1.png';
// const imgNo2 = process.env.PUBLIC_URL + '/img/2.png';
const targetDate = new Date('March 9, 2025 07:00:00 GMT+0000').getTime();


const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (<div className="flex flex-col items-center h-screen">
        <p>We’re Getting Married</p>
        <h1 className="couple-name">Sakonwan & Nattaphong</h1>
        <p className="wedding-date">Sunday, March 09, 2025</p> 
        </div>);
    } else {
      return (
        <div className="flex flex-col items-center h-screen">
        <p>We’re Getting Married</p>
        <h1 className="couple-name">Sakonwan & Nattaphong</h1>
            <div className="countdown-container  p-8 rounded-lg shadow-md">
                <span className="countdown-item bg-pastel3">{String(days).padStart(2, '0')}d</span>
                <span className="countdown-item bg-pastel4">{String(hours).padStart(2, '0')}:</span>
                <span className="countdown-item bg-pastel5">{String(minutes).padStart(2, '0')}:</span>
                <span className="countdown-item bg-pastel6">{String(seconds).padStart(2, '0')}s</span>
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

const WeddingPage = () => {
  return (
    <div className="">
      {/* Header */}
      {/* <header className="">
      <section className="">
      <table>
          <tr>
          <td style={{ width: "50%" }} >
          <Countdown date={targetDate} renderer={renderer} />
        </td>
        <td><img src={imgNo1} alt="1" style={{ width: "100%" }} /></td>
        </tr>
        </table>
        </section>
      </header> */}

      <header className="header">
        <section className="countdown-container">
          <div className="countdown">
            <Countdown date={targetDate} renderer={renderer} />
          </div>
          <div className="image-container">
            <img src={imgNo1} alt="1" className="responsive-image" />
          </div>
        </section>
      </header>

      {/* About Us Section */}
      {/* <section className="about-us">
        <h2>Our Story</h2>
        <p>
          We met on a rainy day in Paris, and from that moment, we knew we were meant for each other. Join us in celebrating this special moment of love and togetherness.
        </p>
        <img src="our_story.jpg" alt="Our Story" className="story-image"/>
      </section> */}

      {/* RSVP Section */}
      {/* <section className="rsvp">
        <h2>RSVP</h2>
        <p>Please let us know if you can make it by clicking the button below.</p>
        <button className="rsvp-button">RSVP Here</button>
      </section> */}

      {/* Wedding Day Details */}
      <section className="wedding-details">
        <h2>Venue/สถานที่</h2>
        <div className="event-details">
          <div className="venue">
            <h3>UNDA Wedding Studio</h3>
            <p>Unda Wedding Studio, Nakhon Chai Si, Nakhon Pathom</p>
          </div>
          <div className="venue">
            <h3>สตูดิโอ อันดาเวดดิ้ง</h3>
            {/* 114/, 75/1 หมู่ 2 ตำบล ท่ากระชับ อำเภอนครชัยศรี นครปฐม 73120 */}
            <p>สตูดิโอ อันดาเวดดิ้ง, นครชัยศรี, นครปฐม</p>
          </div>
          <a href="https://maps.app.goo.gl/F9x4tKpACCn6ms9i9" target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>

        </div>
      </section>

      {/* Registry Section */}
      {/* <section className="registry">
        <h2>Gift Registry</h2>
        <p>Your presence at our wedding is the greatest gift. However, if you'd like to honor us with something more, here’s a link to our registry.</p>
        <button className="registry-button">View Registry</button>
      </section> */}

      {/* Footer */}
      <footer className="footer">
        <p>We can't wait to celebrate with you!</p>
        <p>Sakonwan & Nattaphong</p>
      </footer>
    </div>
  );
};

export default WeddingPage;

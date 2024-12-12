import React from 'react';
import './App.css';  // You can style it as per your preference
import Countdown from 'react-countdown';
import Card from './Card';
//const imgNo1 = process.env.PUBLIC_URL + '/img/1.png';
// const imgNo2 = process.env.PUBLIC_URL + '/img/2.png';
const venueImgUrl = "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/373610670_836782847888831_8379830579646254011_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ZL-vIcAKFYkQ7kNvgF9oETs&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&_nc_gid=AuX_M2mJOglK_BZTEdEYu24&oh=00_AYAnlB3ZJJaaaePyiiJxoNrdqqwELIvgo2A4EarCAkcxqw&oe=67605D66";

const targetDate = new Date('March 9, 2025 07:00:00 GMT+0000').getTime();


const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (<div className="flex flex-col items-center">
        <p>We’re Getting Married</p>
        <h1 className="couple-name">Sakonwan & Nattaphong</h1>
        <p className="wedding-date">Sunday, March 09, 2025</p> 
        <div className="spotify-embed">
            <iframe title="spotify-embed" src="https://open.spotify.com/embed/playlist/6a7WomCx1pbhJK5wxn3x05?utm_source=generator&autoplay=1" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>);
    } else {
      return (
        <div className="flex flex-col items-center">
        <p>We’re Getting Married</p>
        <h1 className="couple-name">Sakonwan & Nattaphong</h1>
            <div className="countdown-container  p-8 rounded-lg shadow-md">
                <span className="countdown-item">{String(days).padStart(2, '0')}d</span>
                <span className="countdown-item">{String(hours).padStart(2, '0')}:</span>
                <span className="countdown-item">{String(minutes).padStart(2, '0')}:</span>
                <span className="countdown-item">{String(seconds).padStart(2, '0')}s</span>
            </div>
           
          <div className="spotify-embed">
            <iframe title="spotify-embed" src="https://open.spotify.com/embed/playlist/6a7WomCx1pbhJK5wxn3x05?utm_source=generator&autoplay=1" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
       
      );
    }
  };

const WeddingPage = () => {
  return (
    <div className="">
      <header className="header">
        <section className="countdown-container h-screen">
          <div className="countdown">
            <Countdown date={targetDate} renderer={renderer} />
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
      <section className="card-container h-screen">
            <Card />
      </section>
      {/* Wedding Day Details */}
      {/* <section className="wedding-details">
        <h2>Venue/สถานที่</h2>
        <div className="event-details">
          <div className="venue">
            <h3>UNDA Wedding Studio</h3>
            <p>Unda Wedding Studio, Nakhon Chai Si, Nakhon Pathom</p>
          </div>
          <div className="venue">
            <h3>สตูดิโอ อันดาเวดดิ้ง</h3>
            * 114/, 75/1 หมู่ 2 ตำบล ท่ากระชับ อำเภอนครชัยศรี นครปฐม 73120 *
            <p>สตูดิโอ อันดาเวดดิ้ง, นครชัยศรี, นครปฐม</p>
          </div>
          <a href="https://maps.app.goo.gl/F9x4tKpACCn6ms9i9" target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>

        </div>
      </section> */}
      <section className="wedding-details h-screen">
        <div className="venue-container">
          <div className="image-container venue-image">
          <img src={venueImgUrl} alt="Venue" />
          </div>
          <div className="venue-text">
          <div className="venue">
          <h1>สถานที่</h1>
          <br/>
            <h3>UNDA Wedding Studio</h3>
            <p>Unda Wedding Studio, Nakhon Chai Si, Nakhon Pathom</p>
          </div>
          <div className="venue">
            <h3>สตูดิโอ อันดาเวดดิ้ง</h3>
            {/* 114/, 75/1 หมู่ 2 ตำบล ท่ากระชับ อำเภอนครชัยศรี นครปฐม 73120 */}
            <p>สตูดิโอ อันดาเวดดิ้ง, นครชัยศรี, นครปฐม</p>
          </div>
          <br/>
          <a href="https://maps.app.goo.gl/F9x4tKpACCn6ms9i9" target="_blank" rel="noopener noreferrer">
            Maps
          </a>
          </div>
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

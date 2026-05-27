import React, { useEffect }  from 'react';
import './Hashtag.css';

const Hashtag = () => {

  useEffect(() => {
    // Load Instagram embed script after the component mounts
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // const pic = [
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150',
  //   'https://via.placeholder.com/150'
  // ];

  return (
    <div className="hashtag-grid">
      {/* {pic.map((imgs, index) => ( */}
        {/* <div key={index} className="image-item">
           <img src={imgs} alt='test'/> */}
          {/* <img src={imgs} alt={`Description of image ${index + 1}`} /> */}
        {/* </div> */}
      {/* ))} */}
      <div className="hashtag-item">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/C1j3k7ZPbFy/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "8px",
          boxShadow: "none",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "100%",
        }}
      ></blockquote>
       </div>
       <div className="hashtag-item">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DBTFyeXP7TR/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "8px",
          boxShadow: "none",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "100%",
        }}
      ></blockquote>
       </div>
      <div className="hashtag-item">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/C-DHL14Pdsr/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "8px",
          boxShadow: "none",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: "0",
          width: "100%",
        }}
      ></blockquote>
    </div>
    <div className="hashtag-item">
    <iframe title="ma1" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAkermiji%2Fvideos%2F1261584958511082%2F&show_text=true&width=476&t=0" width="476" height="591" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
   </div>
    </div>
  );
  
};

export default Hashtag;

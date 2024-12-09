// import React, { useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn} from "react-scroll-motion";
// // const imageUrl = process.env.PUBLIC_URL + '/img/50743.jpg';
// const InvitePage = () => {

//     useEffect(() => {
//       const scrollDown = () => {
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth'
//         });
//       };
  
//       // Call the scrollDown function when the component mounts
//       scrollDown();
//     }, []);

//   return (
//     <div className="gradient-bg-pastel">
//       { /* <h1>Wedding Invitation</h1>
//       <p>ขอเชิญร่วมในความสุขและความรักของเรา</p>
//   <button><Link to="/countdown">Ok 888</Link></button> */}
//   <ScrollContainer>
//       <ScrollPage>
//         <Animator animation={batch(Fade(), MoveIn(0, 200))}>
//           <div style={{ fontSize: "30px", textAlign: "center" }}>ตอนเริ่มต้นของเรื่อง...</div>
//         </Animator>
//       </ScrollPage>
//       <ScrollPage>
//   <Animator>
//     <div style={{ fontSize: "30px", textAlign: "center" }}>พบเจอกันที่งานบวช วัดแห่งหนึ่ง...</div>
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <Animator animation={MoveIn(-window.innerWidth / 4, 0)}>
//         <img src="/path/to/groom_image.jpg" alt="Groom" style={{ width: "45%" }} />
//       </Animator>
//       <Animator animation={MoveIn(0, window.innerHeight / 4)}>
//       <p>💛</p>ฑ
//       </Animator>
//       <Animator animation={MoveIn(window.innerWidth / 4, 0)}>
//         <img src="/path/to/bride_image.jpg" alt="Bride" style={{ width: "45%" }} />
//       </Animator>
//     </div>
//   </Animator>
// </ScrollPage>
//       <ScrollPage>
//         <Animator animation={{ opacity: 1, translateY: 0 }}>
//           <img src="/path/to/second_image.jpg" alt="Second Scene" style={{ width: "100%" }} />
//           <div style={{ fontSize: "30px", textAlign: "center" }}>พวกเขาตกหลุมรักกัน...</div>
//         </Animator>
//       </ScrollPage>
//       <ScrollPage>
//         <Animator animation={{ opacity: 1, translateY: 0 }}>
//           <img src="/path/to/third_image.jpg" alt="Third Scene" style={{ width: "100%" }} />
//           <div style={{ fontSize: "30px", textAlign: "center" }}>และพวกเขาตัดสินใจที่จะแต่งงานกัน...</div>
//         </Animator>
//       </ScrollPage>
//       <ScrollPage>
//         <Animator animation={{ opacity: 1, translateY: 0 }}>
//           <img src="/path/to/fourth_image.jpg" alt="Fourth Scene" style={{ width: "100%" }} />
//           <div style={{ fontSize: "30px", textAlign: "center" }}>จบลง...</div>
//         </Animator>
//       </ScrollPage>
//       <ScrollPage>
//     <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
//       <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
//       {/* <img src={imageUrl} alt="Ring"/> */}
//     </Animator>
//   </ScrollPage>
//   <ScrollPage>
//     <Animator animation={FadeUp}>
//       <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
//     </Animator>
//   </ScrollPage>
//   <ScrollPage>
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
//       <span style={{ fontSize: "40px" }}>
//         <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
//         <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
//         - I'm Dante Chun -
//         <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
//         <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
//       </span>
//     </div>
//   </ScrollPage>
//   <ScrollPage>
//     <Animator animation={batch(Fade(), Sticky())}>
//       <span style={{ fontSize: "40px" }}>Done</span>
//       <br/>
//       <span style={{ fontSize: "30px" }}>
//         There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
//       </span>
//     </Animator>
//   </ScrollPage>
// </ScrollContainer>
//     </div>
//   );
// };

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());



// export default InvitePage;
import React from 'react';//,{ useEffect }
import { Animator, ScrollContainer, ScrollPage, batch, Fade,FadeUp, MoveIn, MoveOut, Sticky} from "react-scroll-motion";
const imgNo1 = process.env.PUBLIC_URL + '/img/no1.gif';
const imgNo2 = process.env.PUBLIC_URL + '/img/no2.gif';
const InvitePage = () => {

  // useEffect(() => {
  //   const scrollSlowly = () => {
  //     const scrollEnd = document.documentElement.scrollHeight;
  //     const windowHeight = window.innerHeight;
  //     const totalScrollDistance = scrollEnd - windowHeight;
  //     const duration = 10000; // 10 seconds
  //     const steps = 8000; // Number of steps
  //     const scrollStep = totalScrollDistance / steps;
  //     const scrollInterval = duration / steps;
    
  //     let scrollPosition = 0;
    
  //     const scrollIntervalTimer = setInterval(() => {
  //       if (scrollPosition < scrollEnd - windowHeight) {
  //         window.scrollBy(0, scrollStep);
  //         scrollPosition += scrollStep;
  //       } else {
  //         clearInterval(scrollIntervalTimer);
  //       }
  //     }, scrollInterval);
  //   };

  //   setTimeout(() => {
  //     scrollSlowly();
  //   }, 10); // Delay: 1000 milliseconds (1 second)
  // }, []);

  return (
    <div className="gradient-bg-pastel">
      <ScrollContainer>
             <ScrollPage>
         <Animator animation={batch(Fade(), MoveIn(0, 200))}>
           <div style={{ fontSize: "30px", textAlign: "center" }}>ตอนเริ่มต้นของเรื่อง...</div>
         </Animator>
       </ScrollPage>
       <ScrollPage>
   <Animator>
     <div style={{ fontSize: "30px", textAlign: "center" }}>พบเจอกันที่งานบวช วัดแห่งหนึ่ง...</div>
     <div style={{ display: "flex", justifyContent: "center" }}>
       <Animator animation={MoveIn(-window.innerWidth / 4, 0)}>
         <img src={imgNo2} alt="Groom" style={{ width: "45%" }} />
       </Animator>
       <Animator animation={MoveIn(0, window.innerHeight / 4)}>
       <p>💛</p>
       </Animator>
       <Animator animation={MoveIn(window.innerWidth / 4, 0)}>
       <img src={imgNo2} alt="Bride" style={{ width: "45%" }} />
       </Animator>
     </div>
   </Animator>
 </ScrollPage>
       <ScrollPage>
         <Animator animation={{ opacity: 1, translateY: 0 }}>
           <img src="/path/to/second_image.jpg" alt="Second Scene" style={{ width: "100%" }} />
           <div style={{ fontSize: "30px", textAlign: "center" }}>พวกเขาตกหลุมรักกัน...</div>
         </Animator>
       </ScrollPage>
       <ScrollPage>
         <Animator animation={{ opacity: 1, translateY: 0 }}>
           <img src="/path/to/third_image.jpg" alt="Third Scene" style={{ width: "100%" }} />
           <div style={{ fontSize: "30px", textAlign: "center" }}>และพวกเขาตัดสินใจที่จะแต่งงานกัน...</div>
         </Animator>
       </ScrollPage>
       <ScrollPage>
         <Animator animation={{ opacity: 1, translateY: 0 }}>
           <img src="/path/to/fourth_image.jpg" alt="Fourth Scene" style={{ width: "100%" }} />
           <div style={{ fontSize: "30px", textAlign: "center" }}>จบลง...</div>
         </Animator>
       </ScrollPage>
       <ScrollPage>
     <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
       <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
       {/* <img src={imageUrl} alt="Ring"/> */}
     </Animator>
   </ScrollPage>
   <ScrollPage>
     <Animator animation={FadeUp}>
       <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
     </Animator>
   </ScrollPage>
   <ScrollPage>
     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
       <span style={{ fontSize: "40px" }}>
         <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
         <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
         - I'm Dante Chun -
         <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
         <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
       </span>
     </div>
   </ScrollPage>
   <ScrollPage>
     <Animator animation={batch(Fade(), Sticky())}>
       <span style={{ fontSize: "40px" }}>Done</span>
       <br/>
       <span style={{ fontSize: "30px" }}>
         There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
       </span>
     </Animator>
   </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default InvitePage;

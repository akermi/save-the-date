// // src/App.js
// import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import CountdownPage from './Countdown';
// import MapPage from './Map';
// import WebPage from './Web';
// // import InvitePage from './Invite';
// import './App.css';

// function App() {
//   return (
//     // <div className="App">
//     // <header className="App-header">
//     <Router basename="/save-the-date">
//     <Routes>
//       <Route path="/" element={<CountdownPage />} />
//       <Route path="/map" element={<MapPage />} />
//       <Route path="/web" element={<WebPage />} />
//       {/* <Route path="/countdown" element={<InvitePage />} /> */}
//       {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Router>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownPage from './Countdown';
import MapPage from './Map';
import WebPage from './Web';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CountdownPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/web" element={<WebPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


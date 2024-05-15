// function App() {
//   return <div className="">Hello World</div>
// }
// export default App;

import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login/Login.js';
import Main from './Main/Main.js';
import Map from './Map/Map.js';
import TrackerHistory from './Tracker/Tracker.js';
import AccountSettings from './ProfileAccount/ProfileAccount';
// import NavBar from './components';
// import Footer from './components';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Login />
      <Main />
      <Map />
      <TrackerHistory />
      <AccountSettings />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
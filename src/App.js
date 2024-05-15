// function App() {
//   return <div className="">Hello World</div>
// }
// export default App;

import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './Login';
import { Main } from './Main';
import { Map } from './Map';
import { TrackerHistory } from './Tracker';
import { AccountSettings } from './ProfileAccount';
import { NavBar } from './components';
import { Footer } from './components';

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
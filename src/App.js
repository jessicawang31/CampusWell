<<<<<<< HEAD
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
=======
import './index.css';

>>>>>>> ad896c917effdf714138bc5b928da324594b54c1

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
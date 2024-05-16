import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './Login/Login.js';
import Main from './Main/Main.js';
import Map from './Map/Map.js';
import TrackerHistory from './Tracker/Tracker.js';
import AccountSettings from './ProfileAccount/ProfileAccount';

import NavBar from './components/NavBar.js';

function App() {
  return (
    <BrowserRouter>
      <div>     
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/tracker" element={<TrackerHistory />} />
          <Route path="/account" element={<AccountSettings />} />
          {/* Add a default route if you want, like redirecting to /main */}
          {/* <Route path="/" element={<Main />} /> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
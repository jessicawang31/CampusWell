import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login/Login.js';
import Main from './Main/Main.js';
import Map from './Map/Map.js';
import TrackerHistory from './Tracker/Tracker.js';
import AccountSettings from './ProfileAccount/ProfileAccount';

// hard coded data
const allLocations = [
  { id: 1, name: "Urgent Care Center", lat: 47.661548, lng: -122.318200 },
  { id: 2, name: "Local Hospital", lat: 47.603548, lng: -122.335200 },
  { id: 3, name: "Pharmacy", lat: 47.621548, lng: -122.312200 }
];

function App() {
  return (
    <BrowserRouter>
      <div>     
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/map" element={<Map locations={allLocations}/>} />
          <Route path="/tracker" element={<TrackerHistory />} />
          <Route path="/account" element={<AccountSettings />} />
          {/* Add a default route if you want, like redirecting to /main */}
          <Route path="/" element={<Main />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
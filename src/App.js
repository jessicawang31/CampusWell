import { React, useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login.js';
import Main from './Main/Main.js';
import Map from './Map/Map.js';
import TrackerHistory from './Tracker/Tracker.js';
import AccountSettings from './ProfileAccount/ProfileAccount';
import HISTORY_DATA from './HistoryData/appointments.json';
import { getDatabase, ref, push, onValue, get } from 'firebase/database';

// Hard-coded data
const allLocations = [
  { id: 1, name: "Urgent Care Center", lat: 47.661548, lng: -122.318200 },
  { id: 2, name: "Local Hospital", lat: 47.603548, lng: -122.335200 },
  { id: 3, name: "Pharmacy", lat: 47.621548, lng: -122.312200 }
];

const App = () => {
  const [historyStateArray, setHistoryStateArray] = useState([]);
  const isInitialized = useRef(false);

  console.log("App re-rendered");

  // Add initial data to Firebase
  useEffect(() => {
    const db = getDatabase();
    const visitRef = ref(db, 'allVisits');

    const addHistoryDataToFirebase = async () => {
      const snapshot = await get(visitRef);
      if (!snapshot.exists()) {
        console.log("Adding HISTORY_DATA to Firebase");
        HISTORY_DATA.forEach((appointment) => {
          push(visitRef, appointment);
        });
      }
    };

    if (!isInitialized.current) {
      addHistoryDataToFirebase();
      isInitialized.current = true;
    }
  }, []); // Add an empty dependency array to run only once

  // Set up onValue listener
  useEffect(() => {
    const db = getDatabase();
    const visitRef = ref(db, 'allVisits');

    const unsubscribe = onValue(visitRef, (snapshot) => {
      console.log("database changed!");
      const allVisitObj = snapshot.val();
      const keyArray = allVisitObj ? Object.keys(allVisitObj) : [];
      const allVisitArray = keyArray.map((key) => {
        const transformed = allVisitObj[key];
        transformed.firebaseKey = key;
        return transformed;
      });
      console.log(allVisitArray);
      setHistoryStateArray(allVisitArray);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []); // Add an empty dependency array to run only once

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/map" element={<Map locations={allLocations} />} />
          <Route path="/tracker" element={<TrackerHistory visits={historyStateArray} />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

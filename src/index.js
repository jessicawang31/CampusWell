import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC3CaYRbFP7Hkq-KYvurIBFVK9ZQ6MHZB8",
	authDomain: "campus-well.firebaseapp.com",
	databaseURL: "https://campus-well-default-rtdb.firebaseio.com",
	projectId: "campus-well",
	storageBucket: "campus-well.appspot.com",
	messagingSenderId: "802980392745",
	appId: "1:802980392745:web:6489de328cbd9c0ba2d138",
	measurementId: "G-RB5F601H07",
};

let app;
if (!getApps().length) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApps()[0];
}

const database = getDatabase(app);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

export { database };

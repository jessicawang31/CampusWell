import React from "react";
import './NavBar.css';

export default function NavBar() {
	return (
		<nav className="navbar-container">
			<div className="navbar">
				<div className="nav-button">
					<a href="Tracker.js">Tracker</a>
				</div>
				<div className="nav-button">
					<a href="ProfileAccount.js">Profile</a>
				</div>
				<div className="nav-button">
					<a href="Map.js">Map</a>
				</div>
				<div className="nav-button">
					<a href="Main.js">Main</a>
				</div>
				<div className="nav-button">
					<a href="Login.js">Login</a>
				</div>
			</div>
		</nav>
	);
}

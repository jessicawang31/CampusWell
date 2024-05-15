import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav className="navbar-container">
			<div className="navbar">
				<div className="nav-button">
					<Link to="/login">Login</Link>
				</div>
				<div className="nav-button">
					<Link to="/main">Main</Link>
				</div>
				<div className="nav-button">
					<Link to="/map">Map</Link>
				</div>
				<div className="nav-button">
					<Link to="/account">Profile</Link>
				</div>
				<div className="nav-button">
					<Link to="/tracker">Tracker</Link>
				</div>
			</div>
		</nav>
	);
}

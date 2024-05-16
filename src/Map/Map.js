import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import './Map.css';
import '../index.css';
import mapImg from '../img/map.png';
import searchIcon from '../img/search.png';

export default function Map() {
    return (
        
        <div className="map-container">
            <NavBar />
            <main>
                <div className="functions">
                    <div className="search-container">
                        <input type="text" id="searchInput" placeholder="Search" />
                        <button><img src={searchIcon} /></button>
                    </div>
                    <div className="filter-container">
                        <select id="filter" multiple>
                            <option value="all">All</option>
                            <option value="Payment">Payment Options</option>
                            <option value="Services">Services</option>
                        </select>
                    </div>
                </div>
                <img src={mapImg} />
            </main>
            <Footer />
        </div>
    );
}
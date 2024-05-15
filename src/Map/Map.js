import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export default function Map() {
    return (
        <div className="map-container">
            <NavBar />
            <main>
                <div className="functions">
                    <div className="search-container">
                        <input type="text" id="searchInput" placeholder="Search" />
                        <button><img src="img/search.png" alt="Search" /></button>
                    </div>
                    <div className="filter-container">
                        <select id="filter" multiple>
                            <option value="all">All</option>
                            <option value="Payment">Payment Options</option>
                            <option value="Services">Services</option>
                        </select>
                    </div>
                </div>
                <img className="map-img" src="../img/map.png" alt="Map" />
            </main>
            <Footer />
        </div>
    );
}
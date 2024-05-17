// import React, { useState } from 'react';
// import NavBar from '../components/NavBar.js';
// import Footer from '../components/Footer.js';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import './Map.css';
// import '../index.css';
// import searchIcon from '../img/search.png';

// const containerStyle = {
//     width: '100%',
//     height: '400px'
// };

// const initialCenter = {
//     lat: 47.655548,
//     lng: -122.303200
// };

// export default function Map() {
//     const [center, setCenter] = useState(initialCenter); // For centering map
//     const [markers, setMarkers] = useState([]); // For storing markers
//     const [searchTerm, setSearchTerm] = useState(''); // For storing search input
//     const [selectedFilters, setSelectedFilters] = useState([]); // For storing selected filters

//     // Handlers for search and filters
//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const handleFilterChange = (e) => {
//         const options = e.target.options;
//         const values = [];
//         for (let i = 0, len = options.length; i < len; i++) {
//             if (options[i].selected) {
//                 values.push(options[i].value);
//             }
//         }
//         setSelectedFilters(values);
//     };

//     const performSearch = () => {
//         // Here you might call a service to get new data based on search or update markers
//         console.log('Search:', searchTerm);
//         console.log('Filters:', selectedFilters);
//     };

//     return (
//         <div className="map-container">
//             <h1>Map</h1>
//             <NavBar />
//             <main>
//                 <div className="functions">
//                     <div className="search-container">
//                         <input type="text" id="searchInput" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
//                         <button onClick={performSearch}><img src={searchIcon} alt="Search" /></button>
//                     </div>
//                     <div className="filter-container">
//                         <select id="filter" multiple onChange={handleFilterChange}>
//                             <option value="all">All</option>
//                             <option value="Payment">Payment Options</option>
//                             <option value="Services">Services</option>
//                         </select>
//                     </div>
//                 </div>
                
//                 <LoadScript
//                     googleMapsApiKey="AIzaSyA-kLIXiapABvfC7WFWnM_8ajRad7Qp4b0" 
//                 >
//                     <GoogleMap
//                         mapContainerStyle={containerStyle}
//                         center={center}
//                         zoom={15}
//                     >
//                         {markers.map(marker => (
//                             <Marker key={marker.id} position={{ lat: marker.lat, lng: marker.lng }} />
//                         ))}
//                     </GoogleMap>
//                 </LoadScript>
//             </main>
//             <Footer />
//         </div>
//     );
// }


import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import './Map.css';
import '../index.css';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const initialCenter = {
    lat: 47.655548,
    lng: -122.303200
};

// Sample location data
// const allLocations = [
//     { id: 1, name: "Urgent Care Center", lat: 47.661548, lng: -122.318200 },
//     { id: 2, name: "Local Hospital", lat: 47.603548, lng: -122.335200 },
//     { id: 3, name: "Pharmacy", lat: 47.621548, lng: -122.312200 }
// ];

export default function Map({props}) {
    const [center, setCenter] = useState(initialCenter);
    const [locations, setLocations] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');
   
    useEffect(() => {
        if (searchTerm) {
            const filteredLocations = allLocations.filter(location =>
                location.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setLocations(filteredLocations);
        } else {
            setLocations([]);
        }
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="map-container">
            <h1>Map</h1>
            <NavBar />
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <LoadScript
                googleMapsApiKey="AIzaSyA-kLIXiapABvfC7WFWnM_8ajRad7Qp4b0"
                libraries={['places']}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                >
                    {props.map(location => (
                        <Marker key={location.id} position={{ lat: location.lat, lng: location.lng }} />
                    ))}
                </GoogleMap>
            </LoadScript>
            <Footer />
        </div>
    );
}
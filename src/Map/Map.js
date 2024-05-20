import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import './Map.css';
import '../index.css';

const containerStyle = {
    width: '100%',
    height: '750px'
};

const initialCenter = {
    lat: 47.655548,
    lng: -122.303200
};

export default function Map() {
    const places = ['places'];

    const [center, setCenter] = useState(initialCenter);
    const [searchTerm, setSearchTerm] = useState('');
    const [markers, setMarkers] = useState([]);
    const mapRef = useRef(null);

    const onLoad = map => mapRef.current = map;

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const handleSearchSubmit = () => {
        if (!mapRef.current || !searchTerm) return;

        const service = new window.google.maps.places.PlacesService(mapRef.current);
        const request = {
            query: searchTerm,
            location: center, 
            radius: '5000', 
        };

        service.textSearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const newMarkers = results.map(place => ({
                    id: place.id,
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                }));
                setMarkers(newMarkers);
            } else {
                console.error('Search was not successful for the following reason: ' + status);
            }
        });
    };

    return (
        <div className='map-container'>
            <h1>Map</h1>
            <NavBar />
            <input
                type='text'
                placeholder='Search'
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        handleSearchSubmit();
                    }
                }}
            />
            <button onClick={handleSearchSubmit}>Search</button>
            <LoadScript
                googleMapsApiKey='AIzaSyA-kLIXiapABvfC7WFWnM_8ajRad7Qp4b0'
                libraries={places}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={13}
                    onLoad={onLoad}
                >
                    {markers.map((marker, index) => (
                        <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
                    ))}
                </GoogleMap>
            </LoadScript>
            <Footer />
        </div>
    );
}
import React, { useState, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Select from 'react-select';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import './Map.css';
import '../index.css';

const containerStyle = {
    width: '100%',
    height: '751px'
};

const initialCenter = {
    lat: 47.655548,
    lng: -122.303200
};

const healthOptions = [
    { value: 'general', label: 'General Health' },
    { value: 'dental', label: 'Dental' },
    { value: 'mental', label: 'Mental Health' },
    { value: 'physical', label: 'Physical Health' },
];

export default function Map() {
    const places = ['places'];

    const [center, setCenter] = useState(initialCenter);
    const [searchTerm, setSearchTerm] = useState('');
    const [markers, setMarkers] = useState([]);
    const [activeMarker, setActiveMarker] = useState(null); // active marker
    const [selectedHealth, setSelectedHealth] = useState([]);
    const mapRef = useRef(null);

    const onLoad = map => mapRef.current = map;

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleHealthChange = (selectedOptions) => setSelectedHealth(selectedOptions);

    const handleSearchSubmit = () => {
        if (!mapRef.current || !searchTerm) return;

        const service = new window.google.maps.places.PlacesService(mapRef.current);
        const healthFilters = selectedHealth.map(option => option.label).join(' ');
        const filters = `${healthFilters}`.trim();
        const request = {
            query: `${searchTerm} ${filters}`.trim(),
            location: center,
            radius: '5000',
        };

        service.textSearch(request, async (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                const newMarkers = await Promise.all(results.map(async (place) => {
                    const detailsRequest = {
                        placeId: place.place_id,
                        fields: ['name', 'formatted_address', 'geometry', 'formatted_phone_number', 'website']
                    };

                    return new Promise((resolve) => {
                        service.getDetails(detailsRequest, (placeDetails, detailsStatus) => {
                            if (detailsStatus === window.google.maps.places.PlacesServiceStatus.OK) {
                                resolve({
                                    id: place.place_id,
                                    name: placeDetails.name,
                                    address: placeDetails.formatted_address,
                                    lat: placeDetails.geometry.location.lat(),
                                    lng: placeDetails.geometry.location.lng(),
                                    serviceType: Math.random() > 0.5 ? 'Drop-in' : 'Appointment Only', // randomly assigned, need API
                                    paymentType: Math.random() > 0.5 ? 'Insurance' : (Math.random() > 0.5 ? 'Out of Pocket' : 'Insurance and/or Out of Pocket'), // randomly assigned, need API
                                    phoneNumber: placeDetails.formatted_phone_number || 'Not Available',
                                    website: placeDetails.website || 'Not Available'
                                });
                            } else {
                                resolve(null);
                            }
                        });
                    });
                }));

                setMarkers(newMarkers.filter(marker => marker !== null));
            } else {
                console.error('Search was not successful for the following reason: ' + status);
            }
        });
    };

    const handleMarkerClick = (marker) => {
        setActiveMarker(marker);
    };

    const handleInfoWindowClose = () => {
        setActiveMarker(null);
    };

    const formatWebsite = (url) => {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    };

    return (
        <div className='map-container'>
            <h1>Map</h1>
            <NavBar />
            <div className="functions">
                <div className="search-container">
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
                    <Select
                        isMulti
                        options={healthOptions}
                        value={selectedHealth}
                        onChange={handleHealthChange}
                        placeholder="Select Health Concerns"
                        className="select-filter"
                    />
                    <button onClick={handleSearchSubmit}>Search</button>
                </div>
            </div>
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
                        <Marker
                            key={index}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            onClick={() => handleMarkerClick(marker)}
                        />
                    ))}
                    {activeMarker && (
                        <InfoWindow
                            position={{ lat: activeMarker.lat, lng: activeMarker.lng }}
                            onCloseClick={handleInfoWindowClose}
                        >
                            <div>
                                <h2>{activeMarker.name}</h2>
                                <p>{activeMarker.address}</p>
                                <p>Service Type: {activeMarker.serviceType}</p>
                                <p>Payment Type: {activeMarker.paymentType}</p>
                                {activeMarker.phoneNumber !== 'Not Available' ? (
                                    <p>Phone: <a href={`tel:${activeMarker.phoneNumber}`}>{activeMarker.phoneNumber}</a></p>
                                ) : (
                                    <p>Phone: Not Available</p>
                                )}
                                {activeMarker.website !== 'Not Available' ? (
                                    <p>Website: <a href={activeMarker.website} target="_blank" rel="noopener noreferrer">{formatWebsite(activeMarker.website)}</a></p>
                                ) : (
                                    <p>Website: Not Available</p>
                                )}
                                <a href={`https://www.google.com/maps/search/?api=1&query=${activeMarker.lat},${activeMarker.lng}&query_place_id=${activeMarker.id}`} target="_blank" rel="noopener noreferrer">
                                    View on Google Maps
                                </a>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
            <Footer />
        </div>
    );
}
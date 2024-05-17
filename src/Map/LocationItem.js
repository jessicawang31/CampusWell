import React from 'react';

function LocationItem({ location }) {
  return (
    <div className="location-item">
      <h2>{location.name}</h2>
      <p>Coordinates: {location.lat}, {location.lon}</p>
      <p>{location.description}</p>
    </div>
  );
}

export default LocationItem;
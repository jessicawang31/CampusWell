import React, { useState } from 'react';
import LocationItem from './LocationItem';

function LocationList({ locations }) {
  const [filter, setFilter] = useState('');

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="location-list">
      <input
        type="text"
        placeholder="Search locations..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      {filteredLocations.map(location => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
}

export default LocationList;
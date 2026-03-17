import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import StationMarker from './StationMarker';

// Fix for default marker icons in Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ChangeView = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo([center.lat, center.lng], 12, {
      duration: 1.5,
    });
  }, [center]);
  return null;
};

const MapView = ({ center, stations, onStationClick }) => {
  return (
    <div className="w-full h-full relative z-0 rounded-2xl overflow-hidden shadow-inner bg-gray-100">
      <MapContainer
        center={[22.5937, 78.9629]} // Default center for India accurately
        zoom={5}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView center={center} />
        {stations.map((station) => (
          <StationMarker 
            key={station.ID} 
            station={station} 
            onClick={() => onStationClick(station)} 
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;

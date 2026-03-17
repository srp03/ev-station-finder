import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Zap, MapPin, Gauge } from 'lucide-react';

const customMarkerIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/3514/3514491.png',
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const StationMarker = ({ station, onClick }) => {
  const { AddressInfo, Connections } = station;
  const lat = AddressInfo.Latitude;
  const lng = AddressInfo.Longitude;

  if (!lat || !lng) return null;

  return (
    <Marker 
      position={[lat, lng]} 
      icon={customMarkerIcon}
      eventHandlers={{
        click: () => onClick(station),
      }}
    >
      <Popup className="station-popup shadow-xl p-0">
        <div className="w-64 overflow-hidden rounded-lg font-sans">
          <div className="bg-emerald-600 p-4 text-white">
            <h3 className="font-bold text-lg leading-tight m-0">{AddressInfo.Title || 'Unknown Station'}</h3>
            <div className="flex items-center gap-1 mt-1 text-emerald-100 text-xs">
              <MapPin size={12} />
              <span>{AddressInfo.Town}, {AddressInfo.StateOrProvince}</span>
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 border-none">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {AddressInfo.AddressLine1}
            </p>
            
            <div className="space-y-3">
              {Connections && Connections.length > 0 && (
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600">
                    <Zap size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Charger Type</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {Connections[0].ConnectionType?.Title || 'Multiple Type'}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600">
                  <Gauge size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Power Output</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {Connections?.[0]?.PowerKW ? `${Connections[0].PowerKW} kW` : 'Varies'}
                  </p>
                </div>
              </div>
            </div>

            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-center rounded-xl font-bold transition-all no-underline shadow-lg shadow-emerald-600/20 active:scale-[0.98]"
            >
              Get Directions
            </a>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default StationMarker;

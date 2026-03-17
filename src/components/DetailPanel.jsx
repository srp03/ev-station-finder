import React from 'react';
import { Zap, MapPin, Gauge, Shield, Navigation } from 'lucide-react';

const DetailPanel = ({ station }) => {
  if (!station) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
          <MapPin size={32} className="text-gray-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">No Station Selected</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Click on a map marker to view detailed charging station information and directions.</p>
      </div>
    );
  }

  const { AddressInfo, Connections } = station;

  return (
    <div className="animate-fade-in h-fit bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="bg-emerald-600 p-6 text-white">
        <h2 className="text-xl font-bold mb-1 leading-tight">{AddressInfo.Title}</h2>
        <div className="flex items-center gap-2 opacity-90 text-sm">
          <MapPin size={14} />
          <span>{AddressInfo.Town}, {AddressInfo.StateOrProvince}</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <label className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-2 block font-sans">Full Address</label>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{AddressInfo.AddressLine1}</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-xl text-emerald-600">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold">Charger Type</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {Connections?.[0]?.ConnectionType?.Title || 'AC/DC Fast Charger'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl text-blue-600">
              <Gauge size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold">Power Output</p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {Connections?.[0]?.PowerKW ? `${Connections[0].PowerKW} kW` : 'Varies'}
              </p>
            </div>
          </div>
        </div>

        <a 
          href={`https://www.google.com/maps/dir/?api=1&destination=${AddressInfo.Latitude},${AddressInfo.Longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20 group"
        >
          <Navigation size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default DetailPanel;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MapView from '../components/MapView';
import SearchBar from '../components/SearchBar';
import InfoPanel from '../components/InfoPanel';
import DetailPanel from '../components/DetailPanel';
import Footer from '../components/Footer';
import { fetchChargingStations } from '../services/api';
import { Loader2, Info, Map as MapIcon, ChevronRight } from 'lucide-react';

const Home = () => {
  const [location, setLocation] = useState({ lat: 22.5937, lng: 78.9629, name: 'India' });
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    const getStations = async () => {
      setLoading(true);
      const data = await fetchChargingStations(location.lat, location.lng);
      setStations(data);
      setLoading(false);
    };
    getStations();
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-8xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT PANEL: Info */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <InfoPanel />
          </div>

          {/* CENTER PANEL: Map */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <MapIcon className="text-emerald-500" size={24} />
                  <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">EV Charging Stations Across India</h2>
                </div>
                <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                  <span>Zoom Level 5</span>
                  <ChevronRight size={12} />
                </div>
              </div>
              
              <div className="relative mb-4 px-4">
                 <SearchBar onSearch={(loc) => setLocation(loc)} />
              </div>

              <div className="h-[500px] w-full mt-4">
                <MapView 
                  center={location} 
                  stations={stations} 
                  onStationClick={(s) => setSelectedStation(s)}
                />
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center justify-between px-6 py-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                  Showing {stations.length} stations found near your search
                </span>
              </div>
              <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors uppercase tracking-widest">
                Refresh Data
              </button>
            </div>
          </div>

          {/* RIGHT PANEL: Details */}
          <div className="lg:col-span-3 order-3">
            <div className="sticky top-28">
              <div className="mb-6">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Charging Station Details</h3>
                <div className="h-1 w-16 bg-blue-500 rounded-full" />
              </div>
              <DetailPanel station={selectedStation} />
            </div>
          </div>

        </div>
      </main>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-md z-[3000] flex items-center justify-center animate-fade-in">
          <div className="bg-white dark:bg-gray-800 p-10 rounded-[40px] shadow-2xl flex flex-col items-center gap-6 border border-white/10">
            <div className="relative">
              <Loader2 className="w-16 h-16 text-emerald-500 animate-spin" strokeWidth={2.5} />
              <Zap className="absolute inset-0 m-auto text-emerald-500 w-6 h-6 animate-pulse" />
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-bold text-xl tracking-tight text-center">
              Fetching real-time<br/> India station data...
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

// Internal Zap icon for loading
const Zap = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m6 2 3 9h6l-3 9" />
  </svg>
);

export default Home;

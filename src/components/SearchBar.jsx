import React, { useState } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';
import { geocodeLocation } from '../services/api';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const results = await geocodeLocation(query);
    if (results.length > 0) {
      const { lat, lon, display_name } = results[0];
      onSearch({ lat: parseFloat(lat), lng: parseFloat(lon), name: display_name });
      setSuggestions([]);
    }
    setLoading(false);
  };

  const handleInputChange = async (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.length > 3) {
      const results = await geocodeLocation(val);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (s) => {
    setQuery(s.display_name);
    onSearch({ lat: parseFloat(s.lat), lng: parseFloat(s.lon), name: s.display_name });
    setSuggestions([]);
  };

  return (
    <div className="relative w-full z-10 p-0">
      <form onSubmit={handleSearch} className="group relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-emerald-500 transition-colors">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search city, area or pincode in India..."
          className="w-full pl-12 pr-12 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-none focus:ring-2 focus:ring-emerald-500 text-gray-800 dark:text-white transition-all outline-none text-lg"
        />
        {loading && (
          <div className="absolute inset-y-0 right-4 flex items-center">
            <Loader2 className="animate-spin text-emerald-500" size={20} />
          </div>
        )}
      </form>

      {suggestions.length > 0 && (
        <div className="absolute w-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in list-none p-0">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => selectSuggestion(s)}
              className="w-full px-6 py-4 flex items-start gap-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-left transition-colors border-b last:border-none border-gray-50 dark:border-gray-700"
            >
              <MapPin className="text-emerald-500 mt-1 shrink-0" size={18} />
              <span className="text-gray-700 dark:text-gray-200 text-sm truncate">{s.display_name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

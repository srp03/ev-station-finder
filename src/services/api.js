import axios from 'axios';

// OpenChargeMap API Key
const API_KEY = 'ea6d3544-e75c-4b6d-8e4a-5f04b2c1f9c8'; 
const BASE_URL = 'https://api.openchargemap.io/v3';

export const fetchChargingStations = async (lat, lng, distance = 400) => { // Increased default distance for broad India view
  try {
    const response = await axios.get(`${BASE_URL}/poi/`, {
      params: {
        output: 'json',
        countrycode: 'IN', // Center on India
        latitude: lat,
        longitude: lng,
        distance: distance,
        distanceunit: 'KM',
        maxresults: 100,
        compact: true,
        verbose: false,
        key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching stations:', error);
    return [];
  }
};

export const geocodeLocation = async (query) => {
  try {
    const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
      params: {
        q: query,
        format: 'json',
        limit: 5,
        addressdetails: 1,
        countrycodes: 'in' // Restrict to India
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error geocoding location:', error);
    return [];
  }
};

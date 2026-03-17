# EV Charging Station Locator India ⚡🚗

A modern, interactive React.js web application designed to help electric vehicle owners across India locate charging stations with ease. Built with a focus on usability, real-time data, and a premium aesthetic.

![Status](https://img.shields.io/badge/Status-Fully%20Functional-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Tailwind%20%7C%20Leaflet-blue)

## 🌐 Live Project Overview
This project is a **fully working frontend application** that fetches real-time data for EV charging points across the Indian subcontinent. It features a three-column dashboard layout that provides both geographic visualization and detailed station information.

## ✨ Features
- **Interactive Map**: Centered on India (Lat: 22.5937, Lng: 78.9629) using Leaflet.js.
- **Real-Time Data**: Connects to the **OpenChargeMap API** to fetch live charging station details.
- **Smart Search**: Integrated with **Nominatim (OpenStreetMap)** for high-accuracy location searches within India.
- **Detailed Station Panel**: Shows specific charger types, power output (kW), and precise addresses.
- **3-Column Dashboard**:
  - **Left**: EV Education & Infrastructure Growth cards.
  - **Center**: Interactive map with search overlay.
  - **Right**: Dynamic detail panel for selected stations.
- **One-Click Directions**: Direct integration with Google Maps for easy navigation to any station.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack
- **Library**: [React.js](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Mapping**: [Leaflet.js](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Handling**: [Axios](https://axios-http.com/)

## ⚙️ How It Works
1. **Initial Load**: The app centers the map on a central coordinate for India and makes an initial API call to OpenChargeMap filtered by `countrycode: IN`.
2. **Location Search**: When a user enters a city or area in the search bar, the app geocodes the query and recenters the map using a smooth `flyTo` transition.
3. **Fetching Stations**: Every time the map location changes, a new API request is triggered to find stations within a defined radius.
4. **Interactive Markers**: Clicking a marker triggers a state update that populates the **Detail Panel** on the right with that specific station's technical specs and address.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (installed automatically with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/srp03/ev-station-finder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ev-station-finder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) in your browser.

## 📁 Project Structure
```text
src/
  ├── components/    # Reusable UI components (Navbar, InfoPanel, etc.)
  ├── pages/         # Main layout (Home.jsx)
  ├── services/      # API communication logic
  ├── App.jsx        # Main component entry
  └── index.css      # Custom styles and Tailwind directives
```

## 🌍 Sustainability Message
Switching to an EV reduces your carbon footprint significantly. This project aims to support the Indian EV revolution by making charging infrastructure more accessible to everyone.

---
**Created by [Antigravity](https://antigravity.google/) for srp03**

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

// Define city coordinates
const cities: {
  uk: Record<string, [number, number]>;
  poland: Record<string, [number, number]>;
} = {
  uk: {
    london: [51.5074, -0.1278],
    manchester: [53.4808, -2.2426],
    birmingham: [52.4862, -1.8904],
    glasgow: [55.8642, -4.2518]
  },
  poland: {
    warsaw: [52.2297, 21.0122],
    krakow: [50.0647, 19.9450],
    gdansk: [54.3520, 18.6466],
    wroclaw: [51.1079, 17.0385]
  }
};

const MapContainer = () => {
  const mapRef = useRef<L.Map | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize map with a lower zoom level (4 instead of 5)
      mapRef.current = L.map('map').setView([52.5, 10], 4);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mapRef.current);

      // Custom icon for markers
      const customIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Add markers for UK cities
      Object.entries(cities.uk).forEach(([city, coords]) => {
        L.marker(coords as L.LatLngExpression, { icon: customIcon })
          .addTo(mapRef.current!)
          .bindPopup(`<b>${city.charAt(0).toUpperCase() + city.slice(1)}</b><br>${t.route.uk.title}`);
      });

      // Add markers for Polish cities
      const polishIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      Object.entries(cities.poland).forEach(([city, coords]) => {
        L.marker(coords as L.LatLngExpression, { icon: polishIcon })
          .addTo(mapRef.current!)
          .bindPopup(`<b>${city.charAt(0).toUpperCase() + city.slice(1)}</b><br>${t.route.poland.title}`);
      });
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [language, t.route.uk.title, t.route.poland.title]);

  return (
    <div className="relative h-[600px]">
      <style>
        {`
          .leaflet-container {
            z-index: 0;
          }
        `}
      </style>
      <div id="map" className="w-full h-full rounded-lg" />
    </div>
  );
};

export default MapContainer; 
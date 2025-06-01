const MapContainer = () => (
  <div className="relative h-64 md:h-80">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl" />
    
    {/* Simplified map visualization */}
    <div className="absolute top-1/4 left-1/4">
      <div className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow-lg">UK</div>
    </div>
    
    <div className="absolute bottom-1/4 right-1/4">
      <div className="bg-red-600 text-white px-3 py-1 rounded-lg shadow-lg">Poland</div>
    </div>
    
    {/* Animated route line */}
    <div className="absolute top-1/3 left-1/3 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-red-500">
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
    </div>
    
    {/* Stats overlay */}
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <div className="inline-flex items-center gap-4 bg-white/80 px-4 py-2 rounded-full shadow">
        <span>🚚 120+ weekly trips</span>
        <span>⏱️ 24-48h delivery</span>
      </div>
    </div>
  </div>
);

export default MapContainer; 
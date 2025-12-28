import { useState, useEffect } from 'react';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from 'react-icons/fi';
import './TimeLapseMap.css';

const TimeLapseMap = () => {
  const [currentYear, setCurrentYear] = useState(2020);
  const [isPlaying, setIsPlaying] = useState(false);
  const [yearRange, setYearRange] = useState(2020);

  const years = [2020, 2021, 2022, 2023, 2024];
  const minYear = 2020;
  const maxYear = 2024;

  // Sample airport data for visualization
  const airportData = {
    2020: [
      { name: 'Delhi', passengers: 28.5, lat: 28.5562, lng: 77.1000 },
      { name: 'Mumbai', passengers: 25.2, lat: 19.0896, lng: 72.8656 },
      { name: 'Bangalore', passengers: 18.5, lat: 12.9716, lng: 77.5946 },
      { name: 'Hyderabad', passengers: 12.3, lat: 17.3850, lng: 78.4867 },
      { name: 'Chennai', passengers: 15.8, lat: 13.0827, lng: 80.2707 },
      { name: 'Kolkata', passengers: 10.2, lat: 22.5726, lng: 88.3639 },
    ],
    2021: [
      { name: 'Delhi', passengers: 24.5, lat: 28.5562, lng: 77.1000 },
      { name: 'Mumbai', passengers: 21.8, lat: 19.0896, lng: 72.8656 },
      { name: 'Bangalore', passengers: 16.2, lat: 12.9716, lng: 77.5946 },
      { name: 'Hyderabad', passengers: 10.8, lat: 17.3850, lng: 78.4867 },
      { name: 'Chennai', passengers: 13.5, lat: 13.0827, lng: 80.2707 },
      { name: 'Kolkata', passengers: 8.9, lat: 22.5726, lng: 88.3639 },
    ],
    2022: [
      { name: 'Delhi', passengers: 32.1, lat: 28.5562, lng: 77.1000 },
      { name: 'Mumbai', passengers: 28.5, lat: 19.0896, lng: 72.8656 },
      { name: 'Bangalore', passengers: 21.2, lat: 12.9716, lng: 77.5946 },
      { name: 'Hyderabad', passengers: 14.8, lat: 17.3850, lng: 78.4867 },
      { name: 'Chennai', passengers: 18.2, lat: 13.0827, lng: 80.2707 },
      { name: 'Kolkata', passengers: 12.5, lat: 22.5726, lng: 88.3639 },
    ],
    2023: [
      { name: 'Delhi', passengers: 35.8, lat: 28.5562, lng: 77.1000 },
      { name: 'Mumbai', passengers: 31.2, lat: 19.0896, lng: 72.8656 },
      { name: 'Bangalore', passengers: 24.5, lat: 12.9716, lng: 77.5946 },
      { name: 'Hyderabad', passengers: 17.2, lat: 17.3850, lng: 78.4867 },
      { name: 'Chennai', passengers: 20.8, lat: 13.0827, lng: 80.2707 },
      { name: 'Kolkata', passengers: 14.5, lat: 22.5726, lng: 88.3639 },
    ],
    2024: [
      { name: 'Delhi', passengers: 38.5, lat: 28.5562, lng: 77.1000 },
      { name: 'Mumbai', passengers: 34.2, lat: 19.0896, lng: 72.8656 },
      { name: 'Bangalore', passengers: 27.8, lat: 12.9716, lng: 77.5946 },
      { name: 'Hyderabad', passengers: 19.5, lat: 17.3850, lng: 78.4867 },
      { name: 'Chennai', passengers: 23.2, lat: 13.0827, lng: 80.2707 },
      { name: 'Kolkata', passengers: 16.8, lat: 22.5726, lng: 88.3639 },
    ],
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentYear((prev) => {
          if (prev >= maxYear) {
            setIsPlaying(false);
            return minYear;
          }
          return prev + 1;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, maxYear, minYear]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    if (currentYear > minYear) {
      setCurrentYear(currentYear - 1);
    }
  };

  const handleNext = () => {
    if (currentYear < maxYear) {
      setCurrentYear(currentYear + 1);
    }
  };

  const handleSliderChange = (e) => {
    const year = parseInt(e.target.value);
    setCurrentYear(year);
    setYearRange(year);
  };

  const currentData = airportData[currentYear] || [];

  return (
    <div className="time-lapse-page">
      <div className="page-header">
        <h1>Time-Lapse Map</h1>
        <p className="page-subtitle">
          Explore how aviation activity has evolved across India over the years
        </p>
      </div>

      <div className="map-controls">
        <div className="control-group">
          <button onClick={handlePrevious} disabled={currentYear === minYear}>
            <FiSkipBack />
          </button>
          <button onClick={handlePlayPause} className="play-pause-btn">
            {isPlaying ? <FiPause /> : <FiPlay />}
          </button>
          <button onClick={handleNext} disabled={currentYear === maxYear}>
            <FiSkipForward />
          </button>
        </div>
        <div className="year-display">
          <span className="current-year">{currentYear}</span>
        </div>
        <div className="slider-group">
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={currentYear}
            onChange={handleSliderChange}
            className="year-slider"
          />
          <div className="slider-labels">
            <span>{minYear}</span>
            <span>{maxYear}</span>
          </div>
        </div>
      </div>

      <div className="map-container">
        <div className="india-map">
          <svg viewBox="0 0 800 1000" className="map-svg">
            {/* Simplified India map outline */}
            <path
              d="M 200 150 L 250 200 L 300 250 L 350 300 L 400 350 L 450 400 L 500 450 L 550 500 L 600 550 L 650 600 L 700 650 L 750 700 L 800 750 L 750 800 L 700 850 L 650 900 L 600 950 L 550 1000 L 500 950 L 450 900 L 400 850 L 350 800 L 300 750 L 250 700 L 200 650 L 150 600 L 100 550 L 150 500 L 200 450 L 250 400 L 300 350 L 350 300 L 400 250 L 450 200 L 500 150 Z"
              fill="rgba(30, 41, 59, 0.3)"
              stroke="rgba(148, 163, 184, 0.5)"
              strokeWidth="2"
            />
            {/* Airport markers */}
            {currentData.map((airport, index) => {
              const size = Math.max(15, Math.min(50, airport.passengers * 1.5));
              const x = 150 + (airport.lng - 70) * 8;
              const y = 200 + (airport.lat - 8) * 12;
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r={size}
                    fill="rgba(96, 165, 250, 0.6)"
                    stroke="#60a5fa"
                    strokeWidth="2"
                    className="airport-marker"
                  >
                    <title>{airport.name}: {airport.passengers}M passengers</title>
                  </circle>
                  <text
                    x={x}
                    y={y + size + 15}
                    fill="#fff"
                    fontSize="12"
                    textAnchor="middle"
                    className="airport-label"
                  >
                    {airport.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="airport-stats">
        <h2>Airport Statistics - {currentYear}</h2>
        <div className="stats-grid">
          {currentData.map((airport, index) => (
            <div key={index} className="stat-card">
              <h3>{airport.name}</h3>
              <div className="stat-value">{airport.passengers}M</div>
              <div className="stat-label">Passengers</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLapseMap;


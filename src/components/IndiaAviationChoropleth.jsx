import { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { FiPlay, FiPause, FiSkipBack, FiSkipForward } from 'react-icons/fi';
import './IndiaAviationChoropleth.css';

const geoUrl = '/maps/india_states.geojson';

// Sample Aviation Data by Year and State Code
const aviationDataByYear = {
  2020: {
    'MH': 28.5, 'DL': 38.5, 'TN': 15.8, 'KA': 18.5, 'GJ': 8.2,
    'RJ': 6.5, 'UP': 12.3, 'WB': 10.2, 'AP': 7.8, 'TS': 12.3,
    'KL': 7.2, 'MP': 5.8, 'OR': 4.2, 'PB': 3.5, 'HR': 4.8
  },
  2021: {
    'MH': 24.5, 'DL': 34.2, 'TN': 13.5, 'KA': 16.2, 'GJ': 7.1,
    'RJ': 5.8, 'UP': 10.8, 'WB': 8.9, 'AP': 6.5, 'TS': 10.8,
    'KL': 6.2, 'MP': 5.0, 'OR': 3.6, 'PB': 3.0, 'HR': 4.2
  },
  2022: {
    'MH': 32.1, 'DL': 42.5, 'TN': 18.2, 'KA': 21.2, 'GJ': 9.8,
    'RJ': 7.8, 'UP': 14.5, 'WB': 12.5, 'AP': 9.2, 'TS': 14.8,
    'KL': 8.5, 'MP': 7.2, 'OR': 5.5, 'PB': 4.5, 'HR': 6.2
  },
  2023: {
    'MH': 35.8, 'DL': 48.2, 'TN': 20.8, 'KA': 24.5, 'GJ': 11.2,
    'RJ': 8.9, 'UP': 16.8, 'WB': 14.5, 'AP': 10.5, 'TS': 17.2,
    'KL': 9.8, 'MP': 8.5, 'OR': 6.2, 'PB': 5.2, 'HR': 7.5
  },
  2024: {
    'MH': 38.5, 'DL': 52.1, 'TN': 23.2, 'KA': 27.8, 'GJ': 12.5,
    'RJ': 9.8, 'UP': 18.5, 'WB': 16.8, 'AP': 11.8, 'TS': 19.5,
    'KL': 10.8, 'MP': 9.5, 'OR': 7.2, 'PB': 5.8, 'HR': 8.5
  },
};

const YEARS = Object.keys(aviationDataByYear).map(Number);
const MIN_YEAR = Math.min(...YEARS);
const MAX_YEAR = Math.max(...YEARS);

const IndiaAviationChoropleth = () => {
  const [yearIndex, setYearIndex] = useState(YEARS.length - 1);
  const [playing, setPlaying] = useState(false);
  const [hoveredState, setHoveredState] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false, state: '', value: 0 });

  const year = YEARS[yearIndex];
  const currentData = aviationDataByYear[year];

  // Auto Play
  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setYearIndex((prev) => {
        if (prev >= YEARS.length - 1) {
          setPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [playing]);

  // Calculate color scale
  const allValues = Object.values(aviationDataByYear).flatMap(Object.values);
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);

  const colorScale = scaleLinear()
    .domain([minValue, maxValue])
    .range(['#1e3a8a', '#3b82f6', '#60a5fa']);

  const handlePrevious = () => {
    if (yearIndex > 0) {
      setYearIndex(yearIndex - 1);
    }
  };

  const handleNext = () => {
    if (yearIndex < YEARS.length - 1) {
      setYearIndex(yearIndex + 1);
    }
  };

  const handleMouseMove = (e, geo) => {
    const stateCode = geo.properties?.ST_CODE;
    const stateName = geo.properties?.ST_NAME || stateCode;
    const value = stateCode ? (currentData[stateCode] || 0) : 0;
    
    setTooltip({
      x: e.clientX,
      y: e.clientY,
      visible: true,
      state: stateName,
      value: value,
    });
    setHoveredState(stateCode);
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
    setHoveredState(null);
  };

  // Get sorted states for list
  const sortedStates = Object.entries(currentData)
    .map(([code, value]) => ({
      code,
      value,
      name: code,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);

  return (
    <div className="choropleth-container">
      <div className="choropleth-header">
        <h2>India Aviation Activity by State — {year}</h2>
        <p className="choropleth-subtitle">Passenger Traffic (Millions)</p>
      </div>

      <div className="choropleth-map-wrapper">
        <div className="map-container">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 1000,
              center: [80, 22],
            }}
            width={800}
            height={600}
            style={{ 
              width: '100%', 
              height: '100%',
              display: 'block'
            }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) => {
                if (!geographies || geographies.length === 0) {
                  return null;
                }
                
                return geographies.map((geo) => {
                  const stateCode = geo.properties?.ST_CODE;
                  const value = stateCode ? (currentData[stateCode] || 0) : 0;
                  const color = value ? colorScale(value) : '#3b82f6';
                  const isHovered = hoveredState === stateCode;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={color}
                      stroke={isHovered ? '#60a5fa' : '#ffffff'}
                      strokeWidth={isHovered ? 2 : 1}
                      style={{
                        default: {
                          outline: 'none',
                          transition: 'all 0.3s ease',
                        },
                        hover: {
                          fill: '#38bdf8',
                          outline: 'none',
                          cursor: 'pointer',
                        },
                        pressed: {
                          fill: '#0ea5e9',
                          outline: 'none',
                        },
                      }}
                      onMouseEnter={(e) => handleMouseMove(e, geo)}
                      onMouseMove={(e) => handleMouseMove(e, geo)}
                      onMouseLeave={handleMouseLeave}
                    />
                  );
                });
              }}
            </Geographies>
          </ComposableMap>
        </div>

        {/* State list for reference */}
        <div className="state-list">
          <h3 className="state-list-title">Top States</h3>
          {sortedStates.map(({ code, value }) => {
            const color = value ? colorScale(value) : '#1f2937';
            return (
              <div
                key={code}
                className="state-item"
                style={{ borderLeftColor: color }}
                onMouseEnter={() => setHoveredState(code)}
                onMouseLeave={() => setHoveredState(null)}
              >
                <span className="state-name">{code}</span>
                <span className="state-value">{value.toFixed(1)}M</span>
              </div>
            );
          })}
        </div>
      </div>

      {tooltip.visible && (
        <div
          className="choropleth-tooltip"
          style={{
            left: `${tooltip.x + 10}px`,
            top: `${tooltip.y - 10}px`,
          }}
        >
          <div className="tooltip-state">{tooltip.state}</div>
          <div className="tooltip-value">{tooltip.value.toFixed(1)}M passengers</div>
        </div>
      )}

      <div className="choropleth-controls">
        <div className="control-buttons">
          <button onClick={handlePrevious} disabled={yearIndex === 0} className="control-btn">
            <FiSkipBack />
          </button>
          <button onClick={() => setPlaying(!playing)} className="control-btn play-pause-btn">
            {playing ? <FiPause /> : <FiPlay />}
          </button>
          <button onClick={handleNext} disabled={yearIndex === YEARS.length - 1} className="control-btn">
            <FiSkipForward />
          </button>
        </div>

        <div className="slider-group">
          <input
            type="range"
            min={0}
            max={YEARS.length - 1}
            value={yearIndex}
            onChange={(e) => setYearIndex(Number(e.target.value))}
            className="year-slider"
          />
          <div className="slider-labels">
            <span>{MIN_YEAR}</span>
            <span className="current-year-display">{year}</span>
            <span>{MAX_YEAR}</span>
          </div>
        </div>
      </div>

      <div className="choropleth-legend">
        <div className="legend-label">Passenger Traffic</div>
        <div className="legend-gradient">
          <span>Low</span>
          <div className="gradient-bar"></div>
          <span>High</span>
        </div>
      </div>
    </div>
  );
};

export default IndiaAviationChoropleth;

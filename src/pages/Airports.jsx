import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import './Airports.css';

const Airports = () => {
  const [selectedAirport, setSelectedAirport] = useState('Delhi');

  const airports = [
    { name: 'Delhi', code: 'DEL', passengers: 38.5, movements: 285, rank: 1 },
    { name: 'Mumbai', code: 'BOM', passengers: 34.2, movements: 265, rank: 2 },
    { name: 'Bangalore', code: 'BLR', passengers: 27.8, movements: 215, rank: 3 },
    { name: 'Hyderabad', code: 'HYD', passengers: 19.5, movements: 158, rank: 4 },
    { name: 'Chennai', code: 'MAA', passengers: 23.2, movements: 185, rank: 5 },
    { name: 'Kolkata', code: 'CCU', passengers: 16.8, movements: 135, rank: 6 },
    { name: 'Goa', code: 'GOI', passengers: 8.5, movements: 68, rank: 7 },
    { name: 'Kochi', code: 'COK', passengers: 7.2, movements: 58, rank: 8 },
  ];

  const historicalData = {
    Delhi: [
      { year: '2020', passengers: 28.5, movements: 210 },
      { year: '2021', passengers: 24.5, movements: 185 },
      { year: '2022', passengers: 32.1, movements: 245 },
      { year: '2023', passengers: 35.8, movements: 270 },
      { year: '2024', passengers: 38.5, movements: 285 },
    ],
    Mumbai: [
      { year: '2020', passengers: 25.2, movements: 195 },
      { year: '2021', passengers: 21.8, movements: 170 },
      { year: '2022', passengers: 28.5, movements: 225 },
      { year: '2023', passengers: 31.2, movements: 250 },
      { year: '2024', passengers: 34.2, movements: 265 },
    ],
    Bangalore: [
      { year: '2020', passengers: 18.5, movements: 145 },
      { year: '2021', passengers: 16.2, movements: 125 },
      { year: '2022', passengers: 21.2, movements: 170 },
      { year: '2023', passengers: 24.5, movements: 195 },
      { year: '2024', passengers: 27.8, movements: 215 },
    ],
  };

  const selectedData = historicalData[selectedAirport] || historicalData.Delhi;

  return (
    <div className="airports-page">
      <div className="page-header">
        <h1>Airports Performance</h1>
        <p className="page-subtitle">
          Explore airport-level performance, rankings, and historical trends
        </p>
      </div>

      <div className="airports-grid">
        {airports.map((airport) => (
          <div
            key={airport.code}
            className={`airport-card ${selectedAirport === airport.name ? 'selected' : ''}`}
            onClick={() => setSelectedAirport(airport.name)}
          >
            <div className="airport-rank">#{airport.rank}</div>
            <div className="airport-info">
              <h3>{airport.name}</h3>
              <p className="airport-code">{airport.code}</p>
            </div>
            <div className="airport-stats">
              <div className="stat-item">
                <span className="stat-value">{airport.passengers}M</span>
                <span className="stat-label">Passengers</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{airport.movements}K</span>
                <span className="stat-label">Movements</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="airport-details">
        <div className="details-card">
          <h2>{selectedAirport} Airport - Historical Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={selectedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="passengers" 
                stroke="#60a5fa" 
                strokeWidth={2}
                name="Passengers (M)"
              />
              <Line 
                type="monotone" 
                dataKey="movements" 
                stroke="#a78bfa" 
                strokeWidth={2}
                name="Movements (K)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="details-card">
          <h2>Top Airports Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={airports.slice(0, 6)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
              />
              <Bar dataKey="passengers" fill="#3b82f6" name="Passengers (M)" />
              <Bar dataKey="movements" fill="#8b5cf6" name="Movements (K)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Airports;


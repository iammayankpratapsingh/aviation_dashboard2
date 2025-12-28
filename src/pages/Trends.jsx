import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Trends.css';

const Trends = () => {
  const passengerTrend = [
    { year: '2020', domestic: 280.5, international: 45.2, total: 325.7 },
    { year: '2021', domestic: 245.2, international: 38.5, total: 283.7 },
    { year: '2022', domestic: 298.8, international: 52.1, total: 350.9 },
    { year: '2023', domestic: 325.4, international: 58.3, total: 383.7 },
    { year: '2024', domestic: 341.0, international: 62.5, total: 403.5 },
  ];

  const loadFactorTrend = [
    { year: '2020', loadFactor: 78.5 },
    { year: '2021', loadFactor: 75.2 },
    { year: '2022', loadFactor: 82.8 },
    { year: '2023', loadFactor: 84.5 },
    { year: '2024', loadFactor: 85.2 },
  ];

  const revenueTrend = [
    { year: '2020', revenue: 38500, growth: 0 },
    { year: '2021', revenue: 34200, growth: -11.2 },
    { year: '2022', revenue: 41200, growth: 20.5 },
    { year: '2023', revenue: 45200, growth: 9.7 },
    { year: '2024', revenue: 47230, growth: 4.5 },
  ];

  const aircraftTrend = [
    { year: '2020', movements: 1950, km: 12500, hours: 4200 },
    { year: '2021', movements: 1720, km: 11000, hours: 3700 },
    { year: '2022', movements: 2080, km: 13200, hours: 4450 },
    { year: '2023', movements: 2280, km: 14500, hours: 4880 },
    { year: '2024', movements: 2450, km: 15200, hours: 5120 },
  ];

  return (
    <div className="trends-page">
      <div className="page-header">
        <h1>Aviation Trends</h1>
        <p className="page-subtitle">
          Long-term trend analysis and growth patterns in India's aviation sector
        </p>
      </div>

      <div className="trends-grid">
        <div className="trend-card">
          <h2>Passenger Traffic Trend (5 Years)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={passengerTrend}>
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
              <Legend />
              <Area 
                type="monotone" 
                dataKey="domestic" 
                stackId="1"
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.6}
                name="Domestic (M)"
              />
              <Area 
                type="monotone" 
                dataKey="international" 
                stackId="1"
                stroke="#8b5cf6" 
                fill="#8b5cf6" 
                fillOpacity={0.6}
                name="International (M)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="trend-card">
          <h2>Load Factor Trend</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={loadFactorTrend}>
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
                dataKey="loadFactor" 
                stroke="#10b981" 
                strokeWidth={3}
                name="Load Factor (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="trend-card">
          <h2>Revenue Growth Trend</h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={revenueTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
                formatter={(value) => `₹${value} Cr`}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#f59e0b" 
                fill="#f59e0b" 
                fillOpacity={0.3}
                name="Revenue (Cr)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="trend-card">
          <h2>Aircraft Operations Trend</h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={aircraftTrend}>
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
              <Legend />
              <Line 
                type="monotone" 
                dataKey="movements" 
                stroke="#60a5fa" 
                strokeWidth={2}
                name="Movements (K)"
              />
              <Line 
                type="monotone" 
                dataKey="km" 
                stroke="#a78bfa" 
                strokeWidth={2}
                name="Kilometers (K)"
              />
              <Line 
                type="monotone" 
                dataKey="hours" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Hours (K)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="insights-section">
        <h2>Key Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <h3>Growth Recovery</h3>
            <p>
              After a dip in 2021, passenger traffic has shown strong recovery, 
              with 2024 reaching new heights at 403.5M passengers.
            </p>
          </div>
          <div className="insight-card">
            <h3>Load Factor Improvement</h3>
            <p>
              Load factors have consistently improved, reaching 85.2% in 2024, 
              indicating better capacity utilization.
            </p>
          </div>
          <div className="insight-card">
            <h3>Revenue Growth</h3>
            <p>
              Revenue has grown steadily, with 2024 showing ₹47,230 Cr, 
              representing a 4.5% year-over-year growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;


import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [operationType, setOperationType] = useState('all');

  const years = ['2020', '2021', '2022', '2023', '2024'];
  const operationTypes = [
    { value: 'all', label: 'All Operations' },
    { value: 'domestic', label: 'Domestic' },
    { value: 'international', label: 'International' }
  ];

  const monthlyData = [
    { month: 'Jan', passengers: 28.5, departures: 195, km: 1250, hours: 420 },
    { month: 'Feb', passengers: 29.2, departures: 201, km: 1280, hours: 435 },
    { month: 'Mar', passengers: 31.8, departures: 218, km: 1350, hours: 460 },
    { month: 'Apr', passengers: 30.5, departures: 210, km: 1320, hours: 445 },
    { month: 'May', passengers: 32.1, departures: 225, km: 1380, hours: 475 },
    { month: 'Jun', passengers: 33.4, departures: 232, km: 1420, hours: 490 },
    { month: 'Jul', passengers: 34.2, departures: 238, km: 1450, hours: 505 },
    { month: 'Aug', passengers: 33.8, departures: 235, km: 1430, hours: 495 },
    { month: 'Sep', passengers: 32.5, departures: 228, km: 1400, hours: 480 },
    { month: 'Oct', passengers: 31.2, departures: 220, km: 1370, hours: 465 },
    { month: 'Nov', passengers: 30.8, departures: 215, km: 1350, hours: 450 },
    { month: 'Dec', passengers: 32.0, departures: 225, km: 1390, hours: 470 },
  ];

  const yearlyData = [
    { year: '2020', passengers: 280.5, departures: 1950, revenue: 38500 },
    { year: '2021', passengers: 245.2, departures: 1720, revenue: 34200 },
    { year: '2022', passengers: 298.8, departures: 2080, revenue: 41200 },
    { year: '2023', passengers: 325.4, departures: 2280, revenue: 45200 },
    { year: '2024', passengers: 341.0, departures: 2450, revenue: 47230 },
  ];

  const loadFactorData = [
    { month: 'Jan', loadFactor: 82.5 },
    { month: 'Feb', loadFactor: 83.2 },
    { month: 'Mar', loadFactor: 84.8 },
    { month: 'Apr', loadFactor: 85.1 },
    { month: 'May', loadFactor: 85.5 },
    { month: 'Jun', loadFactor: 86.2 },
    { month: 'Jul', loadFactor: 85.8 },
    { month: 'Aug', loadFactor: 85.3 },
    { month: 'Sep', loadFactor: 84.9 },
    { month: 'Oct', loadFactor: 84.5 },
    { month: 'Nov', loadFactor: 84.2 },
    { month: 'Dec', loadFactor: 85.0 },
  ];

  const revenueBreakdown = [
    { name: 'Passenger Revenue', value: 28500, color: '#3b82f6' },
    { name: 'Cargo Revenue', value: 8500, color: '#8b5cf6' },
    { name: 'Ancillary Revenue', value: 6200, color: '#10b981' },
    { name: 'Other Revenue', value: 4030, color: '#f59e0b' },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Detailed Dashboard</h1>
        <p className="page-subtitle">
          Comprehensive analytics and visualizations of India's aviation performance
        </p>
      </div>

      <div className="dashboard-filters">
        <div className="filter-group">
          <label>Year:</label>
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Operation Type:</label>
          <select value={operationType} onChange={(e) => setOperationType(e.target.value)}>
            {operationTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Passengers Carried (Monthly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="passengers" 
                stroke="#60a5fa" 
                fill="#60a5fa" 
                fillOpacity={0.3}
                name="Passengers (M)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h2>Aircraft Departures (Monthly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
              />
              <Bar dataKey="departures" fill="#8b5cf6" name="Departures (K)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h2>Aircraft Kilometers Flown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
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
                dataKey="km" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Kilometers (K)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h2>Aircraft Hours Flown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="hours" 
                stroke="#f59e0b" 
                fill="#f59e0b" 
                fillOpacity={0.3}
                name="Hours (K)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h2>Load Factor Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={loadFactorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
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
                stroke="#ec4899" 
                strokeWidth={2}
                name="Load Factor (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h2>Yearly Performance Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={yearlyData}>
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
              <Bar dataKey="passengers" fill="#3b82f6" name="Passengers (M)" />
              <Bar dataKey="departures" fill="#8b5cf6" name="Departures (K)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h2>Revenue Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenueBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {revenueBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h2>Revenue Trend (Yearly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={yearlyData}>
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
                stroke="#10b981" 
                fill="#10b981" 
                fillOpacity={0.3}
                name="Revenue (Cr)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


import { FiUsers, FiNavigation, FiTrendingUp, FiDollarSign, FiAward, FiGlobe, FiActivity, FiZap } from 'react-icons/fi';
import KPICard from '../components/KPICard';
import IndiaAviationChoropleth from '../components/IndiaAviationChoropleth';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, Legend 
} from 'recharts';
import heroImage from '../assets/heroImage.png';
import './Home.css';

const Home = () => {
  const kpiData = [
    { title: 'Total Passengers', value: '341.05M', change: '+12.5%', trend: 'up', icon: FiUsers },
    { title: 'Aircraft Movements', value: '2.45M', change: '+8.3%', trend: 'up', icon: FiNavigation },
    { title: 'Load Factor', value: '85.2%', change: '+2.1%', trend: 'up', icon: FiTrendingUp },
    { title: 'Revenue', value: '₹45,230 Cr', change: '+15.7%', trend: 'up', icon: FiDollarSign },
  ];

  const recentTrends = [
    { month: 'Jan', passengers: 28.5, movements: 195 },
    { month: 'Feb', passengers: 29.2, movements: 201 },
    { month: 'Mar', passengers: 31.8, movements: 218 },
    { month: 'Apr', passengers: 30.5, movements: 210 },
    { month: 'May', passengers: 32.1, movements: 225 },
    { month: 'Jun', passengers: 33.4, movements: 232 },
  ];

  const yearlyGrowth = [
    { year: '2020', domestic: 280.5, international: 45.2 },
    { year: '2021', domestic: 245.2, international: 38.5 },
    { year: '2022', domestic: 298.8, international: 52.1 },
    { year: '2023', domestic: 325.4, international: 58.3 },
    { year: '2024', domestic: 341.0, international: 62.5 },
  ];

  const revenueBreakdown = [
    { name: 'Passenger', value: 28500, color: '#3b82f6' },
    { name: 'Cargo', value: 8500, color: '#8b5cf6' },
    { name: 'Ancillary', value: 6200, color: '#10b981' },
    { name: 'Other', value: 4030, color: '#f59e0b' },
  ];

  const loadFactorData = [
    { month: 'Jan', loadFactor: 82.5 },
    { month: 'Feb', loadFactor: 83.2 },
    { month: 'Mar', loadFactor: 84.8 },
    { month: 'Apr', loadFactor: 85.1 },
    { month: 'May', loadFactor: 85.5 },
    { month: 'Jun', loadFactor: 86.2 },
  ];

  const topAirports = [
    { name: 'Delhi', passengers: 38.5 },
    { name: 'Mumbai', passengers: 34.2 },
    { name: 'Bangalore', passengers: 27.8 },
    { name: 'Hyderabad', passengers: 19.5 },
    { name: 'Chennai', passengers: 23.2 },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <img src={heroImage} alt="Aviation Network" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badges">
            <div className="hero-badge">
              <FiAward className="badge-icon" />
              <span>Official Data Source</span>
            </div>
            <div className="hero-badge">
              <FiActivity className="badge-icon" />
              <span>Real-Time Updates</span>
            </div>
            <div className="hero-badge">
              <FiGlobe className="badge-icon" />
              <span>National Coverage</span>
            </div>
          </div>

          <div className="page-header">
            <h1>India Civil Aviation Performance Dashboard</h1>
            <p className="page-subtitle">
              Comprehensive insights into India's aviation sector, tracking passenger traffic, 
              aircraft operations, airport infrastructure, and revenue metrics.
            </p>
          </div>

          <div className="hero-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <FiZap />
              </div>
              <div className="highlight-content">
                <h3>Fastest Growing</h3>
                <p>World's 3rd largest aviation market</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <FiTrendingUp />
              </div>
              <div className="highlight-content">
                <h3>Rapid Growth</h3>
                <p>15.7% revenue growth in 2024</p>
              </div>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <FiNavigation />
              </div>
              <div className="highlight-content">
                <h3>150+ Airports</h3>
                <p>Extensive network coverage</p>
              </div>
            </div>
          </div>

          <div className="kpi-grid">
            {kpiData.map((kpi, index) => (
              <KPICard key={index} {...kpi} />
            ))}
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">2.45M</div>
              <div className="stat-label">Aircraft Movements</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">85.2%</div>
              <div className="stat-label">Average Load Factor</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">₹45,230 Cr</div>
              <div className="stat-label">Total Revenue</div>
            </div>
          </div>
        </div>
      </div>

      <div className="overview-section">
        <div className="overview-card">
          <h2>Recent Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={recentTrends}>
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

        <div className="overview-card">
          <h2>Monthly Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={recentTrends}>
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
              <Bar dataKey="passengers" fill="#3b82f6" name="Passengers (M)" />
              <Bar dataKey="movements" fill="#8b5cf6" name="Movements (K)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="overview-card">
          <h2>Passenger Growth (5 Years)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={yearlyGrowth}>
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

        <div className="overview-card">
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
                formatter={(value) => `₹${value} Cr`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="overview-card">
          <h2>Load Factor Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={loadFactorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
                formatter={(value) => `${value}%`}
              />
              <Area 
                type="monotone" 
                dataKey="loadFactor" 
                stroke="#10b981" 
                fill="#10b981" 
                fillOpacity={0.3}
                name="Load Factor (%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="overview-card">
          <h2>Top 5 Airports</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topAirports} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis dataKey="name" type="category" stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #334155',
                  borderRadius: '0.5rem'
                }}
                formatter={(value) => `${value}M passengers`}
              />
              <Bar dataKey="passengers" fill="#60a5fa" name="Passengers (M)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="choropleth-section">
        <IndiaAviationChoropleth />
      </div>

      <div className="intro-section">
        <h2>About This Dashboard</h2>
        <p>
          This dashboard provides real-time and historical insights into India's civil aviation sector. 
          Track key performance indicators, explore airport-level data, analyze trends over time, and 
          access comprehensive reports. The data is sourced from the Directorate General of Civil Aviation (DGCA) 
          and the Airports Authority of India (AAI), ensuring accuracy and reliability.
        </p>
        <p>
          Use the navigation menu above to explore different sections:
        </p>
        <ul>
          <li><strong>Dashboard:</strong> Detailed interactive charts and analytics</li>
          <li><strong>Time-Lapse Map:</strong> Visualize aviation activity across India over time</li>
          <li><strong>Airports:</strong> Airport-level performance and rankings</li>
          <li><strong>Trends:</strong> Long-term trend analysis</li>
          <li><strong>Reports:</strong> Download datasets and summary tables</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;


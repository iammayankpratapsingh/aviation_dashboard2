import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBarChart2, FiMap, FiMapPin, FiTrendingUp, FiFileText, FiInfo } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/dashboard', label: 'Dashboard', icon: FiBarChart2 },
    { path: '/time-lapse-map', label: 'Time-Lapse Map', icon: FiMap },
    { path: '/airports', label: 'Airports', icon: FiMapPin },
    { path: '/trends', label: 'Trends', icon: FiTrendingUp },
    { path: '/reports', label: 'Reports', icon: FiFileText },
    { path: '/about', label: 'About', icon: FiInfo },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-icon">✈</div>
          <span className="brand-text">India Aviation Dashboard</span>
        </div>
        <ul className="navbar-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Data Sources</h3>
          <ul>
            <li>
              <a href="https://www.dgca.gov.in" target="_blank" rel="noopener noreferrer">
                Directorate General of Civil Aviation (DGCA)
              </a>
            </li>
            <li>
              <a href="https://www.aai.aero" target="_blank" rel="noopener noreferrer">
                Airports Authority of India (AAI)
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/about#methodology">Methodology</Link></li>
            <li><Link to="/about#contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <p>Last Updated: {lastUpdated}</p>
          <p>© {currentYear} India Aviation Dashboard</p>
          <p className="footer-note">
            This dashboard is for informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


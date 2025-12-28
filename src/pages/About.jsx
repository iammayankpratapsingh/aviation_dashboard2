import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About This Dashboard</h1>
        <p className="page-subtitle">
          Learn about the data sources, methodology, and purpose of this dashboard
        </p>
      </div>

      <div className="about-content">
        <section id="purpose" className="about-section">
          <h2>Purpose</h2>
          <p>
            The India Civil Aviation Performance Dashboard is designed to provide comprehensive 
            insights into India's aviation sector. This platform serves policymakers, analysts, 
            researchers, and the general public by presenting key aviation metrics in an accessible 
            and interactive format.
          </p>
          <p>
            Our goal is to make aviation data transparent, understandable, and actionable, enabling 
            informed decision-making and fostering a better understanding of India's aviation landscape.
          </p>
        </section>

        <section id="data-sources" className="about-section">
          <h2>Data Sources</h2>
          <div className="source-cards">
            <div className="source-card">
              <h3>Directorate General of Civil Aviation (DGCA)</h3>
              <p>
                The DGCA is the regulatory body for civil aviation in India. We source official 
                statistics on passenger traffic, aircraft movements, load factors, and safety data 
                from DGCA's monthly and annual publications.
              </p>
              <a 
                href="https://www.dgca.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Visit DGCA Website →
              </a>
            </div>
            <div className="source-card">
              <h3>Airports Authority of India (AAI)</h3>
              <p>
                The AAI manages most of India's airports and provides infrastructure data, airport 
                capacity information, and operational statistics. We integrate AAI data to provide 
                comprehensive airport-level insights.
              </p>
              <a 
                href="https://www.aai.aero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
              >
                Visit AAI Website →
              </a>
            </div>
          </div>
        </section>

        <section id="methodology" className="about-section">
          <h2>Methodology</h2>
          <div className="methodology-content">
            <h3>Data Collection</h3>
            <p>
              Data is collected from official publications released by DGCA and AAI. We aggregate 
              monthly and annual statistics to create comprehensive datasets covering:
            </p>
            <ul>
              <li>Passenger traffic (domestic and international)</li>
              <li>Aircraft movements and operations</li>
              <li>Load factors and capacity utilization</li>
              <li>Revenue and financial metrics</li>
              <li>Airport infrastructure and capacity</li>
            </ul>

            <h3>Data Processing</h3>
            <p>
              All data undergoes validation and cleaning processes to ensure accuracy. We:
            </p>
            <ul>
              <li>Cross-reference data from multiple sources</li>
              <li>Validate against official publications</li>
              <li>Handle missing data appropriately</li>
              <li>Normalize formats for consistency</li>
            </ul>

            <h3>Visualization</h3>
            <p>
              Interactive charts and visualizations are created using industry-standard tools, 
              ensuring accuracy and clarity. All visualizations are responsive and accessible.
            </p>
          </div>
        </section>

        <section id="updates" className="about-section">
          <h2>Data Updates</h2>
          <p>
            The dashboard is updated regularly to reflect the latest available data:
          </p>
          <ul>
            <li><strong>Monthly Updates:</strong> Passenger traffic, aircraft movements, and operational data</li>
            <li><strong>Quarterly Updates:</strong> Airport rankings, infrastructure data, and detailed reports</li>
            <li><strong>Annual Updates:</strong> Comprehensive annual statistics and trend analysis</li>
          </ul>
          <p>
            The last updated date is displayed in the footer of each page.
          </p>
        </section>

        <section id="contact" className="about-section">
          <h2>Contact</h2>
          <p>
            For questions, feedback, or data requests, please contact:
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <strong>Email:</strong> data@aviationdashboard.in
            </div>
            <div className="contact-item">
              <strong>Data Requests:</strong> requests@aviationdashboard.in
            </div>
            <div className="contact-item">
              <strong>Technical Support:</strong> support@aviationdashboard.in
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Disclaimer</h2>
          <p>
            This dashboard is for informational purposes only. While we strive for accuracy, 
            users should verify critical data from official sources. The dashboard is not 
            responsible for decisions made based on the information presented here.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;


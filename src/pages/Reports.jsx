import { FiDownload, FiFileText } from 'react-icons/fi';
import './Reports.css';

const Reports = () => {
  const reports = [
    {
      title: 'Annual Aviation Statistics 2024',
      description: 'Comprehensive annual report covering all key aviation metrics',
      format: 'PDF',
      size: '2.5 MB',
      date: '2024-12-15',
    },
    {
      title: 'Monthly Passenger Traffic Data',
      description: 'Detailed monthly breakdown of passenger traffic by airport',
      format: 'CSV',
      size: '1.2 MB',
      date: '2024-12-01',
    },
    {
      title: 'Aircraft Operations Dataset',
      description: 'Complete dataset of aircraft movements, kilometers, and hours',
      format: 'CSV',
      size: '850 KB',
      date: '2024-12-01',
    },
    {
      title: 'Revenue Analysis Report',
      description: 'Detailed revenue breakdown by source and region',
      format: 'PDF',
      size: '1.8 MB',
      date: '2024-11-28',
    },
    {
      title: 'Airport Performance Rankings',
      description: 'Quarterly rankings and performance metrics for all airports',
      format: 'Excel',
      size: '650 KB',
      date: '2024-11-15',
    },
    {
      title: 'Load Factor Analysis',
      description: 'Historical load factor data and trend analysis',
      format: 'CSV',
      size: '420 KB',
      date: '2024-11-01',
    },
  ];

  const datasets = [
    {
      name: 'Passenger Traffic (2020-2024)',
      description: 'Yearly passenger traffic data for all airports',
      records: '15,240',
      lastUpdated: '2024-12-15',
    },
    {
      name: 'Aircraft Movements (2020-2024)',
      description: 'Complete aircraft movement records',
      records: '12,580',
      lastUpdated: '2024-12-15',
    },
    {
      name: 'Revenue Data (2020-2024)',
      description: 'Financial data and revenue metrics',
      records: '8,920',
      lastUpdated: '2024-12-10',
    },
    {
      name: 'Airport Infrastructure',
      description: 'Airport capacity, terminals, and infrastructure data',
      records: '450',
      lastUpdated: '2024-11-30',
    },
  ];

  const handleDownload = (report) => {
    // In a real application, this would trigger an actual download
    console.log('Downloading:', report.title);
    alert(`Downloading ${report.title}...\n\nIn a production environment, this would download the actual file.`);
  };

  return (
    <div className="reports-page">
      <div className="page-header">
        <h1>Reports & Datasets</h1>
        <p className="page-subtitle">
          Download comprehensive reports and datasets for analysis
        </p>
      </div>

      <div className="reports-section">
        <h2>Available Reports</h2>
        <div className="reports-grid">
          {reports.map((report, index) => (
            <div key={index} className="report-card">
              <div className="report-icon">
                <FiFileText />
              </div>
              <div className="report-content">
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <div className="report-meta">
                  <span className="report-format">{report.format}</span>
                  <span className="report-size">{report.size}</span>
                  <span className="report-date">{report.date}</span>
                </div>
              </div>
              <button 
                className="download-btn"
                onClick={() => handleDownload(report)}
              >
                <FiDownload />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="datasets-section">
        <h2>Datasets</h2>
        <div className="datasets-table">
          <table>
            <thead>
              <tr>
                <th>Dataset Name</th>
                <th>Description</th>
                <th>Records</th>
                <th>Last Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((dataset, index) => (
                <tr key={index}>
                  <td><strong>{dataset.name}</strong></td>
                  <td>{dataset.description}</td>
                  <td>{dataset.records}</td>
                  <td>{dataset.lastUpdated}</td>
                  <td>
                    <button 
                      className="download-btn-small"
                      onClick={() => handleDownload(dataset)}
                    >
                      <FiDownload />
                      Download CSV
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="data-notes">
        <h3>Data Notes</h3>
        <ul>
          <li>All data is sourced from DGCA and AAI official publications</li>
          <li>Reports are updated monthly, datasets are updated quarterly</li>
          <li>For custom data requests, please contact the data team</li>
          <li>Data is provided in standard formats (PDF, CSV, Excel)</li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;


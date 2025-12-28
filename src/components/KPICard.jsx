import './KPICard.css';

const KPICard = ({ title, value, change, icon: Icon, trend }) => {
  return (
    <div className="kpi-card">
      <div className="kpi-header">
        <div className="kpi-icon">
          {Icon && <Icon />}
        </div>
        <span className="kpi-title">{title}</span>
      </div>
      <div className="kpi-value">{value}</div>
      {change && (
        <div className={`kpi-change ${trend === 'up' ? 'positive' : trend === 'down' ? 'negative' : ''}`}>
          {trend === 'up' && '↑'} {trend === 'down' && '↓'} {change}
        </div>
      )}
    </div>
  );
};

export default KPICard;


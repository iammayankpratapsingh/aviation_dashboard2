import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TimeLapseMap from './pages/TimeLapseMap';
import Airports from './pages/Airports';
import Trends from './pages/Trends';
import Reports from './pages/Reports';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/time-lapse-map" element={<TimeLapseMap />} />
          <Route path="/airports" element={<Airports />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

# India Civil Aviation Performance Dashboard

A modern, responsive web dashboard for visualizing India's civil aviation data. This dashboard provides comprehensive insights into passenger traffic, aircraft operations, airport infrastructure, and aviation revenue.

## Features

- **Home Page**: Overview with KPI cards and key visualizations
- **Dashboard**: Detailed interactive charts with year and operation type filters
- **Time-Lapse Map**: Interactive India map showing aviation activity over time
- **Airports**: Airport-level performance, rankings, and historical trends
- **Trends**: Long-term trend analysis and growth patterns
- **Reports**: Downloadable datasets and summary reports
- **About**: Data sources, methodology, and contact information

## Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Recharts** - Interactive charts and visualizations
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable components (Navbar, Footer, Layout, KPICard)
├── pages/          # Page components (Home, Dashboard, Airports, etc.)
├── styles/         # Additional stylesheets
├── data/           # Data files (if needed)
├── App.jsx         # Main app component with routing
└── main.jsx        # Entry point
```

## Data Sources

- **DGCA** (Directorate General of Civil Aviation)
- **AAI** (Airports Authority of India)

## Features in Detail

### Navigation
- Fixed top navigation bar with all main sections
- Active route highlighting
- Responsive design for mobile and tablet

### Visualizations
- Interactive line charts
- Bar charts
- Area charts
- Pie charts
- Time-lapse map visualization

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Smooth animations and transitions

## License

This project is for informational purposes only.

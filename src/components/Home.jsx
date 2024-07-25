import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EVSalesChart from './EVSalesChart';
import EVForcasted from './EVForcasted';
import GlobalTempChange from './GlobalTempChange';
import EVCO2 from './EVCO2';
import TeslaStock from './TeslaStock';
import ElectricityPrice from './ElectricityPrice';
import AvgEVPrice from './AvgEVPrice';
import Lottie from 'react-lottie';
import carAnimation from '../assets/car.json';
import graphAnimation from '../assets/graph.json';
import Analysis from './Analysis';

const Home = () => {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAll = () => {
    setViewAll(true);
  };


  const car = {
    loop: true,
    autoplay: true,
    animationData: carAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const graph = {
    loop: true,
    autoplay: true,
    animationData: graphAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Router>
      <div className="bg-black min-h-screen text-center font-sans">
      <header className="flex justify-center items-center py-4">
  <Lottie options={car} height={150} width={150} style={{ marginRight: '8px' }} />
  <h1 className="text-4xl font-serif text-green-600">GreenDriveAnalytics</h1>
  <Lottie options={graph} height={80} width={80} style={{ marginLeft: '15px', marginTop: '-px' }} />
</header>

      <nav className="flex justify-center flex-wrap space-x-1">
          <Link to="/ev-sales" onClick={() => setViewAll(false)}>
            <button className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
              EV Sales
            </button>
          </Link>
          <Link to="/ev-sales-forecast" onClick={() => setViewAll(false)}>
            <button className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
              EV Sales Forecast
            </button>
          </Link>
          <Link to="/global-temperature-change" onClick={() => setViewAll(false)}>
            <button className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
              Global Temperature Change
            </button>
          </Link>
          <Link to="/ev-sales-vs-co2-emissions" onClick={() => setViewAll(false)}>
            <button className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
              EV Sales vs CO2 Emissions
            </button>
          </Link>
          <Link to="/electricity-price-trends" onClick={() => setViewAll(false)}>
            <button className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
              Electricity Price Trends
            </button>
          </Link>
          <Link to="/tesla-stocks" onClick={() => setViewAll(false)}>
            <button className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
              Tesla Stocks
            </button>
          </Link>
          <Link to="/average-price-of-ev" onClick={() => setViewAll(false)}>
            <button className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
              Average Price of EV
            </button>
          </Link>
          <button onClick={handleViewAll} className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
            View All
          </button>
          <Link to="/analysis" onClick={() => setViewAll(false)}>
            <button className="bg-green-900 text-white px-4 py-2 m-2 rounded hover:bg-green-500">
              Analysis
            </button>
          </Link>
        </nav>
        {viewAll ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <EVSalesChart />
            <EVForcasted />
            <GlobalTempChange />
            <EVCO2 />
            <ElectricityPrice />
            <TeslaStock />
            <AvgEVPrice />
          </div>
        ) : (
          <Routes>
            <Route path="/ev-sales" element={<EVSalesChart />} />
            <Route path="/ev-sales-forecast" element={<EVForcasted />} />
            <Route path="/global-temperature-change" element={<GlobalTempChange />} />
            <Route path="/ev-sales-vs-co2-emissions" element={<EVCO2 />} />
            <Route path="/electricity-price-trends" element={<ElectricityPrice />} />
            <Route path="/tesla-stocks" element={<TeslaStock />} />
            <Route path="/average-price-of-ev" element={<AvgEVPrice />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default Home;

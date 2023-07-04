import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


import Home from './Components/Home';
import ForecastPage from './Components/ForecastPage';

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/forecast/:city" element={<ForecastPage />} />
          <Route path="/" element={<Home />} />
        </Routes>


      </Router>
      </>
  );
}

export default App;

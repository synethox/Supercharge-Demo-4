import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUS from './components/AboutUS';
import Footer from './components/Footer';
import SolarPanels from './pages/SolarPanels';
import Mobility from './pages/Mobility';
import Models from './pages/Models';
import ModelDetail from './pages/ModelDetail';
import DealerFinder from './pages/DealerFinder';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <AboutUS />
              </>
            }
          />
          <Route path="/solar-panels" element={<SolarPanels />} />
          <Route path="/mobility" element={<Mobility />} />
          <Route path="/models" element={<Models />} />
          <Route path="/models/:id" element={<ModelDetail />} />
          <Route path="/dealer-finder" element={<DealerFinder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
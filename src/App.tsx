import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other routes will be added as we create more pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
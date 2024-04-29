// React Router imports
import { HashRouter as Router, Route, Routes } from "react-router-dom";

// Page imports
import Home from './pages/Home';
import Kitchens from './pages/Kitchens';
import Furniture from './pages/Furniture';
import Pricing from './pages/Pricing';
import ContactMe from "./pages/ContactMe";

// React imports
import React from 'react';

// Component Imports
import Navbar from "./components/NavBar";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Kitchens" element={<Kitchens />} />
          <Route path="/Furniture" element={<Furniture />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

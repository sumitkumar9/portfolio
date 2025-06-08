import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

/**
 * Main App component with routing configuration
 * Wraps all pages in the Layout component for consistent structure
 */
function App() {
  return (
    <Layout>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        
        {/* About page route */}
        <Route path="/about" element={<About />} />
        
        {/* Skills page route */}
        <Route path="/skills" element={<Skills />} />
        
        {/* Projects page route */}
        <Route path="/projects" element={<Projects />} />
        
        {/* Contact page route */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback route - redirect to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;

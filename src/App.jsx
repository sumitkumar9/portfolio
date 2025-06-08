import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import PageLoader from './components/ui/PageLoader';

// Eagerly load frequently visited pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';

// Only lazy load heavier or less frequently visited pages
const Projects = lazy(() => import('./pages/Projects'));
const Experience = lazy(() => import('./pages/Experience'));
const Contact = lazy(() => import('./pages/Contact'));
const Resume = lazy(() => import('./pages/Resume'));

/**
 * Main App component with routing configuration
 * Wraps all pages in the Layout component for consistent structure
 */
function App() {
  return (
    <Layout>
      <Routes>
        {/* Eagerly loaded routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        
        {/* Lazy-loaded routes */}
        <Route path="/projects" element={
          <Suspense fallback={<PageLoader />}>
            <Projects />
          </Suspense>
        } />
        <Route path="/experience" element={
          <Suspense fallback={<PageLoader />}>
            <Experience />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        } />
        <Route path="/resume" element={
          <Suspense fallback={<PageLoader />}>
            <Resume />
          </Suspense>
        } />
        
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import SchoolsPage from './pages/SchoolsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schools" element={<SchoolsPage />} />
        <Route path="/schools/jesus-cares" element={<SchoolsPage />} />
        <Route path="/ministries" element={<HomePage />} />
        <Route path="/stories" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
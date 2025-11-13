import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => <h2 className='page-title'>Welcome to the Home Page</h2>
const Contact = () => <h2 className='page-title'>📞 Contact Us at contact@example.com</h2>
const About = () => <h2 className='page-title'>This is the About Page</h2>
const Error = () => <h2 className='page-title'>❌ 404 - Page Not Found</h2>

export function App() {
  return (
    <Router>
      <div className='container'>
        <nav className='navbar'>
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
        </nav>

        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

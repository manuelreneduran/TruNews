import React from 'react';
import Navbar from './Navbar.jsx';
import Feed from './Feed.jsx';
import Footer from './Footer.jsx';
import '../style.css';

export default function App() {
  return (
    <div className="app">
      <div className="container-navbar">
        <Navbar/>
      </div>
      <div className="container-feed">
        <Feed/>
      </div>
      <div className="container-footer">
        <Footer/>
      </div>
    </div>
  )
}
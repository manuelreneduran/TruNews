import React from 'react';
import Login from './Login.jsx';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container-logo">
        <h1 className="logo">SEENT</h1>
      </div>
      <div className="container-login">
        <Login/>
      </div>
    </div>
  )
}
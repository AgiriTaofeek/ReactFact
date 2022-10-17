import React from 'react';
import reactLogo from '../assets/react.svg';
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav__items">
        <img src={reactLogo} />
        <h3 className="nav__logo">ReactFacts</h3>
        <h4 className="nav__title">React Course - project 1</h4>
      </div>
    </nav>
  );
}

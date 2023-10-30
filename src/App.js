import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './navbar.js';
import cards from './cards.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar /> {navbar()}
      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800357886</p>
      <p>Hi, I am David Gongola</p>
      <cards /> {cards()}
    </div>
  );
}

export default App;

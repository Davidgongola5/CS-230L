import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar.js';
import Card from './card.js';
import Home from './home.js';
import Contact from './contact.js';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
   </BrowserRouter>
 </div>

  );
}

export default App;

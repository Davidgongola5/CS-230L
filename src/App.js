import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './navbar.js';
import cards from './cards.js';
import home from './home.js';
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

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Player, Start, Subscription } from './components';
import './App.css';


function App() {
  return (
    <div className="appDiv">
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
        <Route path='/player' element={<Player />} />
        <Route path='/subscription' element={<Subscription />} />
      </Routes>
    </div>
  );
}

export default App;

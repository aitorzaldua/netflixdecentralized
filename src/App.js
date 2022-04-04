import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Player } from './components';
import './App.css';


function App() {
  return (
    <div className="appDiv">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/player' element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;

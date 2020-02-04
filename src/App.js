import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './Chart';
import Debug from './Debug';
const sugar = require('./sugar.json');

function App() {
  const data = sugar;

  return (
    <div className="App">
      <div className="title-bar">
        <div className="title">Title</div>
        <div className="legend">Legend 1</div>
        <div className="legend">Legend 2</div>
      </div>
      <div className="chart">
        <Chart data={data} />
      </div>
      <div className="controls">Controls</div>
      <Debug data={data} />
    </div>
  );
}

export default App;

import React from 'react';
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
        <div className="legend">Colorscale</div>
        <div className="legend">Linewidths</div>
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

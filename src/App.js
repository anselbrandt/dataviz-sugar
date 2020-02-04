import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Chart from './Chart';
import Debug from './Debug';
import useGetViewport from './useGetViewport';
const sugar = require('./sugar.json');

function App() {
  const [data, setData] = useState();
  const svgRef = useRef();
  const { width } = useGetViewport();
  const [svgWidth, setSvgWidth] = useState();
  const [svgHeight, setSvgHeight] = useState();
  const [svgData, setSvgData] = useState();
  const [domain, setDomain] = useState();
  const [range, setRange] = useState();

  useEffect(() => {
    setSvgWidth(width * 0.6);
    setSvgHeight(width * 0.6 * 0.5);
  }, [width]);

  useEffect(() => {
    setData(sugar);
  }, []);

  useEffect(() => {
    if (data) {
      const allAges = data.filter(value => value.gender === null);
      const allAges2008 = allAges.map(value => {
        return { id: value.id, age: value.age, level: value['2008-10'] };
      });
      setSvgData(allAges2008);
      setDomain([0, allAges2008.length - 1]);
      let values = new Set();
      data.forEach(element => {
        values.add(element['2008-10']);
        values.add(element['2010-12']);
        values.add(element['2012-14']);
        values.add(element['2014-16']);
      });
      setRange([Math.min(...values), Math.max(...values)]);
    }
  }, [data]);

  return (
    <div className="App">
      <div className="title-bar">
        <div className="title">Title</div>
        <div className="legend">Colorscale</div>
        <div className="legend">Linewidths</div>
      </div>
      <div className="chart">
        <Chart
          svgRef={svgRef}
          svgData={svgData}
          width={svgWidth}
          height={svgHeight}
          domain={domain}
          range={range}
        />
      </div>
      <div className="controls">Controls</div>
      <Debug
        data={svgData}
        width={svgWidth}
        height={svgHeight}
        domain={domain}
        range={range}
      />
    </div>
  );
}

export default App;

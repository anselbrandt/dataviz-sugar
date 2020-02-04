import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Chart from './Chart';
import Debug from './Debug';
import Controls from './Controls';
import useGetViewport from './useGetViewport';
const sugar = require('./sugar.json');

function App() {
  const [data, setData] = useState();
  const svgRef = useRef();
  const { width } = useGetViewport();
  const [svgWidth, setSvgWidth] = useState();
  const [svgHeight, setSvgHeight] = useState();
  const [svgData, setSvgData] = useState();
  const [data2008, setData2008] = useState();
  const [data2010, setData2010] = useState();
  const [data2012, setData2012] = useState();
  const [data2014, setData2014] = useState();
  const [domain, setDomain] = useState();
  const [range, setRange] = useState();
  const [labels, setLabels] = useState();

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
      setData2008(allAges2008);

      const allAges2010 = allAges.map(value => {
        return { id: value.id, age: value.age, level: value['2010-12'] };
      });
      setData2010(allAges2010);

      const allAges2012 = allAges.map(value => {
        return { id: value.id, age: value.age, level: value['2012-14'] };
      });
      setData2012(allAges2012);

      const allAges2014 = allAges.map(value => {
        return { id: value.id, age: value.age, level: value['2014-16'] };
      });
      setData2014(allAges2014);
    }
  }, [data]);

  useEffect(() => {
    if (!svgData && data2008) {
      setSvgData(data2008);
    }
  }, [svgData, data2008]);

  useEffect(() => {
    if (data) {
      setDomain([0, 6]);
      let values = new Set();
      data.forEach(element => {
        values.add(element['2008-10']);
        values.add(element['2010-12']);
        values.add(element['2012-14']);
        values.add(element['2014-16']);
      });
      setRange([Math.min(...values), Math.max(...values) * 1.1]);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const groups = data
        .filter(value => value.gender === null)
        .map(value => value.age);
      setLabels(groups);
    }
  }, [data]);

  const handleSelect2008 = () => setSvgData(data2008);
  const handleSelect2010 = () => setSvgData(data2010);
  const handleSelect2012 = () => setSvgData(data2012);
  const handleSelect2014 = () => setSvgData(data2014);

  return (
    <div className="App">
      <div className="title-bar">
        <div className="title">Sugar</div>
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
          labels={labels}
        />
      </div>
      <div className="controls">
        <Controls
          handleSelect2008={handleSelect2008}
          handleSelect2010={handleSelect2010}
          handleSelect2012={handleSelect2012}
          handleSelect2014={handleSelect2014}
        />
      </div>
      {/*<Debug
        data={svgData}
        width={svgWidth}
        height={svgHeight}
        domain={domain}
        range={range}
      />*/}
    </div>
  );
}

export default App;

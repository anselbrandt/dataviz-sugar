import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import styles from './App.module.css';
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
  const [data2008, setData2008] = useState();
  const [data2010, setData2010] = useState();
  const [data2012, setData2012] = useState();
  const [data2014, setData2014] = useState();
  const [domain, setDomain] = useState();
  const [range, setRange] = useState();
  const [labels, setLabels] = useState();
  const [selected, setSelected] = useState([0, 0]);

  useEffect(() => {
    setSvgWidth(width * 0.8);
    setSvgHeight(width * 0.8 * 0.5);
  }, [width]);

  useEffect(() => {
    setData(sugar);
  }, []);

  useEffect(() => {
    if (data) {
      const allAges = data.filter(value => value.gender === null);

      const allAges2008 = allAges.map(value => {
        return { id: value.id, age: value.age, level: value['2008-10'] / 5 };
      });
      setData2008(allAges2008);

      const allAges2010 = allAges.map(value => {
        return { id: value.id, age: value.age, level: value['2010-12'] / 5 };
      });
      setData2010(allAges2010);

      const allAges2012 = allAges.map(value => {
        return { id: value.id, age: value.age, level: value['2012-14'] / 5 };
      });
      setData2012(allAges2012);

      const allAges2014 = allAges.map(value => {
        return { id: value.id, age: value.age, level: value['2014-16'] / 5 };
      });
      setData2014(allAges2014);
    }
  }, [data]);

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
      setRange([Math.min(...values) / 5, (Math.max(...values) / 5) * 1.1]);
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

  const handleSelect2008 = () => setSelected([selected[1], 2008]);
  const handleSelect2010 = () => setSelected([selected[1], 2010]);
  const handleSelect2012 = () => setSelected([selected[1], 2012]);
  const handleSelect2014 = () => setSelected([selected[1], 2014]);
  const handleClear = () => setSelected([0, 0]);

  return (
    <div className={styles.app}>
      <div className={styles.titleBar}>
        <div className={styles.title}>Daily Sugar Intake over Recommended</div>
      </div>
      <div className={styles.chart}>
        <Chart
          svgRef={svgRef}
          width={svgWidth}
          height={svgHeight}
          domain={domain}
          range={range}
          labels={labels}
          data2008={data2008}
          data2010={data2010}
          data2012={data2012}
          data2014={data2014}
          selected={selected}
        />
      </div>
      <div className={styles.controls}>
        <Controls
          handleSelect2008={handleSelect2008}
          handleSelect2010={handleSelect2010}
          handleSelect2012={handleSelect2012}
          handleSelect2014={handleSelect2014}
          handleClear={handleClear}
          selected={selected}
        />
      </div>
      <div className={styles.footer}>
        <a href="https://github.com/anselbrandt/dataviz-sugar">(Code)</a>
      </div>
      <div>
        {/*<Debug
        data={svgData}
        width={svgWidth}
        height={svgHeight}
        domain={domain}
        range={range}
      />*/}
      </div>
    </div>
  );
}

export default App;

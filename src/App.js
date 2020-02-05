import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import styles from './App.module.css';
import Chart from './Chart';
import useGetViewport from './useGetViewport';
import Controls from './Controls';

function App() {
  const domain = [0, 6];
  const range = [1.75, 3.25];
  const svgRef = useRef();
  const { width, height } = useGetViewport();
  const [svgWidth, setSvgWidth] = useState();
  const [svgHeight, setSvgHeight] = useState();
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState('aggregated');

  useEffect(() => {
    setSvgWidth(width * 0.6);
    setSvgHeight(height * 0.5);
  }, [width, height]);

  const handleSelect2008 = () => setSelected([selected[1], '2008-10']);
  const handleSelect2010 = () => setSelected([selected[1], '2010-12']);
  const handleSelect2012 = () => setSelected([selected[1], '2012-14']);
  const handleSelect2014 = () => setSelected([selected[1], '2014-16']);
  const handleClear = () => {
    if (filter !== 'mvsf') setSelected(['', '']);
  };
  const handleAggregated = () => {
    setFilter('aggregated');
    setSelected(['', '']);
  };
  const handleMale = () => {
    setFilter('male');
    setSelected(['', '']);
  };
  const handleFemale = () => {
    setFilter('female');
    setSelected(['', '']);
  };
  const handleMvsF = () => {
    setFilter('mvsf');
    setSelected(['', '2008-10']);
  };

  return (
    <div className={styles.app}>
      <div className={styles.titleBar}>
        <div className={styles.title}>
          Daily Sugar Intake Over Recommended (UK)
        </div>
      </div>
      <div className={styles.chart}>
        <Chart
          svgRef={svgRef}
          width={svgWidth}
          height={svgHeight}
          domain={domain}
          range={range}
          selected={selected}
          filter={filter}
        />
      </div>
      <Controls
        handleSelect2008={handleSelect2008}
        handleSelect2010={handleSelect2010}
        handleSelect2012={handleSelect2012}
        handleSelect2014={handleSelect2014}
        handleClear={handleClear}
        selected={selected}
        filter={filter}
        handleAggregated={handleAggregated}
        handleMale={handleMale}
        handleFemale={handleFemale}
        handleMvsF={handleMvsF}
      />
      <div className={styles.footer}>
        <a href="https://github.com/anselbrandt/dataviz-sugar">(Code)</a>
      </div>
    </div>
  );
}

export default App;

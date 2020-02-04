import React, { useEffect } from 'react';
import styles from './App.module.css';
import {
  select,
  line,
  scaleLinear,
  curveCardinal,
  axisBottom,
  axisLeft,
} from 'd3';

export default function Chart(props) {
  const { svgRef, svgData, width, height, domain, range, labels } = props;

  useEffect(() => {
    if (svgRef && svgData && width && height && domain && range && labels) {
      const svg = select(svgRef.current);

      const xScale = scaleLinear()
        .domain(domain)
        .range([0, width]);
      const yScale = scaleLinear()
        .domain(range)
        .range([height, 0]);

      const xAxis = axisBottom(xScale)
        .ticks(6)
        .tickFormat(value => `${labels[value]}`);
      svg
        .select(`.${styles.xAxis}`)
        .style('transform', `translateY(${height}px)`)
        .call(xAxis)
        .attr('color', 'dimgrey');
      const yAxis = axisLeft(yScale)
        .ticks(4)
        .tickFormat(value => value + 'mg')
        .tickSizeOuter(0);
      svg
        .select(`.${styles.yAxis}`)
        .call(yAxis)
        .attr('color', 'dimgrey');

      const lineChart = line()
        .x((value, index) => xScale(index))
        .y(value => yScale(value.level))
        .curve(curveCardinal);
      svg
        .attr('width', `${width}px`)
        .attr('height', `${height}px`)
        .selectAll('.line')
        .data([svgData])
        .join('path')
        .attr('class', 'line')
        .attr('d', lineChart)
        .attr('fill', 'none')
        .attr('stroke', 'grey')
        .attr('stroke-width', '2');
    }
  }, [svgRef, svgData, width, height, domain, range, labels]);

  return (
    <React.Fragment>
      <svg className={styles.svg} ref={svgRef}>
        <g className={styles.xAxis} />
        <g className={styles.yAxis} />
      </svg>
    </React.Fragment>
  );
}

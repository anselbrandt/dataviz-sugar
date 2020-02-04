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
  const {
    svgRef,
    width,
    height,
    domain,
    range,
    labels,
    data2008,
    data2010,
    data2012,
    data2014,
    selected,
  } = props;

  useEffect(() => {
    if (
      svgRef &&
      width &&
      height &&
      domain &&
      range &&
      labels &&
      data2008 &&
      data2010 &&
      data2012 &&
      data2014 &&
      selected
    ) {
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

      const line2008 = line()
        .x((value, index) => xScale(index))
        .y(value => yScale(value.level))
        .curve(curveCardinal);
      svg
        .attr('width', `${width}px`)
        .attr('height', `${height}px`)
        .selectAll('.line2008')
        .data([data2008])
        .join('path')
        .attr('class', 'line2008')
        .attr('d', line2008)
        .attr('fill', 'none')
        .attr(
          'stroke',
          selected[1] === 2008
            ? 'tomato'
            : selected[0] === 2008
            ? 'dodgerblue'
            : 'grey',
        )
        .attr(
          'stroke-width',
          selected[1] === 2008 ? '4' : selected[0] === 2008 ? '4' : '2',
        );

      const line2010 = line()
        .x((value, index) => xScale(index))
        .y(value => yScale(value.level))
        .curve(curveCardinal);
      svg
        .attr('width', `${width}px`)
        .attr('height', `${height}px`)
        .selectAll('.line2010')
        .data([data2010])
        .join('path')
        .attr('class', 'line2010')
        .attr('d', line2010)
        .attr('fill', 'none')
        .attr(
          'stroke',
          selected[1] === 2010
            ? 'tomato'
            : selected[0] === 2010
            ? 'dodgerblue'
            : 'grey',
        )
        .attr(
          'stroke-width',
          selected[1] === 2010 ? '4' : selected[0] === 2010 ? '4' : '2',
        );

      const line2012 = line()
        .x((value, index) => xScale(index))
        .y(value => yScale(value.level))
        .curve(curveCardinal);
      svg
        .attr('width', `${width}px`)
        .attr('height', `${height}px`)
        .selectAll('.line2012')
        .data([data2012])
        .join('path')
        .attr('class', 'line2012')
        .attr('d', line2012)
        .attr('fill', 'none')
        .attr(
          'stroke',
          selected[1] === 2012
            ? 'tomato'
            : selected[0] === 2012
            ? 'dodgerblue'
            : 'grey',
        )
        .attr(
          'stroke-width',
          selected[1] === 2012 ? '4' : selected[0] === 2012 ? '4' : '2',
        );

      const line2014 = line()
        .x((value, index) => xScale(index))
        .y(value => yScale(value.level))
        .curve(curveCardinal);
      svg
        .attr('width', `${width}px`)
        .attr('height', `${height}px`)
        .selectAll('.line2014')
        .data([data2014])
        .join('path')
        .attr('class', 'line2014')
        .attr('d', line2014)
        .attr('fill', 'none')
        .attr(
          'stroke',
          selected[1] === 2014
            ? 'tomato'
            : selected[0] === 2014
            ? 'dodgerblue'
            : 'grey',
        )
        .attr(
          'stroke-width',
          selected[1] === 2014 ? '4' : selected[0] === 2014 ? '4' : '2',
        );
    }
  }, [
    svgRef,
    width,
    height,
    domain,
    range,
    labels,
    data2008,
    data2010,
    data2012,
    data2014,
    selected,
  ]);

  return (
    <React.Fragment>
      <svg className={styles.svg} ref={svgRef}>
        <g className={styles.xAxis} />
        <g className={styles.yAxis} />
      </svg>
    </React.Fragment>
  );
}

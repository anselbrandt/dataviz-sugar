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
const data = require('./sugar.json');

export default function Chart(props) {
  const { svgRef, width, height, domain, range, selected, filter } = props;

  useEffect(() => {
    if (Object.values(props).every(item => item)) {
      const svg = select(svgRef.current);

      const aggregated = data.filter(value => value.gender === null);
      const male = [
        ...data.filter(value => value.group === 'child'),
        ...data.filter(value => value.gender === 'male'),
      ];
      const female = [
        ...data.filter(value => value.group === 'child'),
        ...data.filter(value => value.gender === 'female'),
      ];
      const combined = year => {
        return aggregated.map((value, index) => {
          return {
            age: value.age,
            aggregated: aggregated[index][year],
            male: male[index][year],
            female: female[index][year],
          };
        });
      };
      const labels = aggregated.map(value => value.age);
      const years = Object.keys(data[0]).slice(4, 8);

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
        .tickFormat(value => value + 'X')
        .tickSizeOuter(0);
      svg
        .select(`.${styles.yAxis}`)
        .call(yAxis)
        .attr('color', 'dimgrey');

      const lineChart = group =>
        line()
          .x((value, index) => xScale(index))
          .y(value => yScale(value[group] / 5))
          .curve(curveCardinal);

      function svgLine(data, group) {
        svg
          .selectAll(`.line${data}`)
          .data([combined(data)])
          .join('path')
          .attr('class', `line${data}`)
          .attr('d', lineChart(group))
          .attr('opacity', filter === 'mvsf' ? 0 : 1)
          .attr('fill', 'none')
          .attr(
            'stroke',
            selected[1] === data
              ? 'tomato'
              : selected[0] === data
              ? 'dodgerblue'
              : 'grey',
          )
          .attr(
            'stroke-width',
            selected[1] === data ? '4' : selected[0] === data ? '4' : '2',
          );
      }

      function svgLineColored(data, group) {
        svg
          .selectAll(`.line${group}`)
          .data([combined(data)])
          .join('path')
          .attr('class', `line${group}`)
          .attr('d', lineChart(group))
          .attr('fill', 'none')
          .attr('stroke', group === 'male' ? 'CornflowerBlue' : 'Orchid')
          .attr('stroke-width', '4');
      }

      svg.attr('width', `${width}px`).attr('height', `${height}px`);

      switch (filter) {
        case 'mvsf':
          years.forEach(year => svg.selectAll(`.line${year}`).remove());
          svgLineColored(selected[1], 'male');
          svgLineColored(selected[1], 'female');
          break;
        default:
          svg.selectAll('.linemale').remove();
          svg.selectAll('.linefemale').remove();
          svgLine('2008-10', filter);
          svgLine('2010-12', filter);
          svgLine('2012-14', filter);
          svgLine('2014-16', filter);
      }

      if (filter === 'mvsf') {
      } else {
      }
    }
  }, [props, svgRef, width, height, domain, range, selected, filter]);

  return (
    <React.Fragment>
      <svg className={styles.svg} ref={svgRef}>
        <g className={styles.xAxis} />
        <g className={styles.yAxis} />
      </svg>
    </React.Fragment>
  );
}

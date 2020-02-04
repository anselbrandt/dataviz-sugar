import React, { useEffect } from 'react';
import { select, line, scaleLinear, curveCardinal } from 'd3';

export default function Chart(props) {
  const { svgRef, svgData, width, height, domain, range } = props;

  useEffect(() => {
    if (svgRef && svgData && width && height && domain && range) {
      const svg = select(svgRef.current);

      const xScale = scaleLinear()
        .domain(domain)
        .range([0, width]);
      const yScale = scaleLinear()
        .domain(range)
        .range([height, 0]);

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
  }, [svgRef, svgData, width, height, domain, range]);

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
    </React.Fragment>
  );
}

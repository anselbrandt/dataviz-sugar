import React from 'react';

export default function Debug(props) {
  const { data, width, height, domain, range } = props;
  return (
    <React.Fragment>
      <br></br>
      <div>SVG Width: {width}px</div>
      <div>SVG Height: {height}</div>
      <br></br>
      <div>Domain {domain ? `Domain: ${domain[0]}, ${domain[1]}` : null}</div>
      <div>{range ? `Range ${range[0]}, ${range[1]}` : null}</div>
      <br></br>
      <div>
        {data &&
          data.map(value => (
            <div key={value.id}>
              {value.age}: {value.level}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

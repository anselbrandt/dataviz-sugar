import React from 'react';

export default function Debug(props) {
  const { data } = props;
  return (
    <React.Fragment>
      <br></br>
      <div>Debug Info</div>
      <br></br>
      <div>
        {data
          .filter(value => !value.gender)
          .map(value => (
            <div>
              {value.group} {value.age}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

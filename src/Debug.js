import React from 'react';

export default function Debug(props) {
  const { data } = props;
  return (
    <React.Fragment>
      <br></br>
      <div>
        {data
          .filter(value => !value.gender)
          .map(value => (
            <div key={value.id}>
              {value.group} {value.age}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

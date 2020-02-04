import React from 'react';

export default function Controls(props) {
  const {
    handleSelect2008,
    handleSelect2010,
    handleSelect2012,
    handleSelect2014,
  } = props;
  return (
    <React.Fragment>
      <div className="button">
        <button onClick={handleSelect2008}>2008-2010</button>
      </div>
      <div className="button">
        <button onClick={handleSelect2010}>2010-2012</button>
      </div>
      <div className="button">
        <button onClick={handleSelect2012}>2012-2014</button>
      </div>
      <div className="button">
        <button onClick={handleSelect2014}>2014-2016</button>
      </div>
    </React.Fragment>
  );
}

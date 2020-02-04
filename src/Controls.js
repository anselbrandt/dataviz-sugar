import React from 'react';
import styles from './App.module.css';

export default function Controls(props) {
  const {
    handleSelect2008,
    handleSelect2010,
    handleSelect2012,
    handleSelect2014,
    handleClear,
    selected,
  } = props;
  return (
    <React.Fragment>
      <div className={styles.buttonContainer}>
        <button
          className={
            selected[1] === 2008
              ? styles.buttonSelected
              : selected[0] === 2008
              ? styles.buttonPrevious
              : styles.button
          }
          onClick={handleSelect2008}
        >
          2008-2010
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={
            selected[1] === 2010
              ? styles.buttonSelected
              : selected[0] === 2010
              ? styles.buttonPrevious
              : styles.button
          }
          onClick={handleSelect2010}
        >
          2010-2012
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={
            selected[1] === 2012
              ? styles.buttonSelected
              : selected[0] === 2012
              ? styles.buttonPrevious
              : styles.button
          }
          onClick={handleSelect2012}
        >
          2012-2014
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={
            selected[1] === 2014
              ? styles.buttonSelected
              : selected[0] === 2014
              ? styles.buttonPrevious
              : styles.button
          }
          onClick={handleSelect2014}
        >
          2014-2016
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleClear}>
          Clear
        </button>
      </div>
    </React.Fragment>
  );
}

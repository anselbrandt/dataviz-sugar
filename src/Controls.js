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
    filter,
    handleAggregated,
    handleMale,
    handleFemale,
    handleMvsF,
  } = props;
  return (
    <React.Fragment>
      <div className={styles.controls}>
        <div className={styles.buttonContainer}>
          <button
            className={
              selected[1] === '2008-10'
                ? styles.buttonSelected
                : selected[0] === '2008-10' && filter !== 'mvsf'
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
              selected[1] === '2010-12'
                ? styles.buttonSelected
                : selected[0] === '2010-12' && filter !== 'mvsf'
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
              selected[1] === '2012-14'
                ? styles.buttonSelected
                : selected[0] === '2012-14' && filter !== 'mvsf'
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
              selected[1] === '2014-16'
                ? styles.buttonSelected
                : selected[0] === '2014-16' && filter !== 'mvsf'
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
      </div>
      <div className={styles.controls}>
        <div className={styles.buttonContainer}>
          <button
            className={
              filter === 'aggregated' ? styles.buttonSelected : styles.button
            }
            onClick={handleAggregated}
          >
            Aggregated
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={
              filter === 'male' ? styles.buttonSelected : styles.button
            }
            onClick={handleMale}
          >
            Male
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={
              filter === 'female' ? styles.buttonSelected : styles.button
            }
            onClick={handleFemale}
          >
            Female
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={
              filter === 'mvsf' ? styles.buttonSelected : styles.button
            }
            onClick={handleMvsF}
          >
            M vs. F
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

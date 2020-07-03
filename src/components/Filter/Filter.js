import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, changeFilter }) => (
  <>
    <label className={styles.filter_title}>
      Find contacts by name <br />
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;

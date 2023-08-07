import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

class Filter extends Component {
 
  handleChange = e => {
    const { value } = e.currentTarget;
    this.props.onFindInput(value);
  };

  render() {
    return (
      <input
        // value={}
        // неуправляемый елемент, 
        // разыскивается в 7-ми штатах
        name="filter"
        className={style.input_seach}
        onChange={this.handleChange}
      />
    );
  }
}

Filter.propTypes = {
  onFindInput: PropTypes.func.isRequired,
};

export default Filter;

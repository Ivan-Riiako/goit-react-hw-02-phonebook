import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

export class Filter extends Component {
 
  handleChange = e => {
    const { value } = e.currentTarget;
    this.props.onChangeInput(value);
  };

  render() {
    return (
      <input
        name="filter"
        className={style.input_seach}
        onChange={this.handleChange}
      />
    );
  }
}

Filter.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
};
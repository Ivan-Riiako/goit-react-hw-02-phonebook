import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import style from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
// исправление ошибки в консоли number
    // if (name === 'name') {
    // return}
    // const regex =
    //   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

    // if (regex.test(value)) {
    //   this.setState({ number: value });
    // }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    // e.currentTarget.reset();
  };

  render() {
    const nameImputId = nanoid();
    const tellNumberImputId = nanoid();
    const { name, number } = this.state;
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label htmlFor={nameImputId}>Name</label>
        <input
          id={nameImputId}
          value={name}
          type="text"
          name="name"
          // оригинальный паттерн из-за которого ошибка в консоли
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // новый исправленный паттерн \\
          pattern="^[a-zA-Zа-яА-Я]+(['\- ][a-zA-Zа-яА-Я ]*[a-zA-Zа-яА-Я])?$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
        />
        <label htmlFor={tellNumberImputId}>Namber</label>
        <input
          id={tellNumberImputId}
          value={number}
          type="tel"
          name="number"
          // оригинальный паттерн из-за которого ошибка в консоли
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // новый исправленный паттерн \\
          // pattern="\+?\d{1,4}?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

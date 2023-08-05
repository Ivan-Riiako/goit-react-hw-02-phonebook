import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number }],
    }));

    // e.currentTarget.reset();
    console.log(this.state);
  };
  handleFindInput = (e) => {
    const { contacts, filter } = this.state;
    const { value } = e.currentTarget;
    if (value === "") {
      this.setState({ filter: "" });
    return
    }
    console.log(value);
    const find= contacts.filter(contact =>
       contact.name.toLowerCase().includes(value.toLowerCase()) 
         
    );
    this.setState({filter:find})
    console.log(filter);
  }

  render() {
    const { contacts,filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />

          <label>Namber</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          name="filter"
          className={style.input_seach}
          onChange={this.handleFindInput}
        />

        <ul className={style.list_contacts}>
          { ((filter==="")?contacts:filter).map(({ name, number }) => (
            <li key={nanoid()}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

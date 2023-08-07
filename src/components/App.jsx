import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import style from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = formState => {
    const { name, number } = formState;
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacrs`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: nanoid() }],
    }));
  };

  handleFindInput = value => {
    const { contacts } = this.state;

    if (value === '') {
      this.setState({ filter: '' });
      return;
    }

    const findArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({ filter: findArray });
  };

  hendleDeleteContact = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={style.section}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter onChangeInput={this.handleFindInput} />
        <ContactList
          contactList={contacts}
          filterList={filter}
          onDeleteContact={this.hendleDeleteContact}
        />
      </div>
    );
  }
}

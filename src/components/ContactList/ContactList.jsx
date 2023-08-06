import React, { Component } from 'react';
import style from './ContactList.module.css';
import { nanoid } from 'nanoid';


export class ContactList extends Component {
  

    render() {
    const { contactList: contacts, filterList: filter } = this.props;
    return (
      <ul className={style.list_contacts}>
        {(filter === '' ? contacts : filter).map(({ name, number }) => (
          <li key={nanoid()}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}

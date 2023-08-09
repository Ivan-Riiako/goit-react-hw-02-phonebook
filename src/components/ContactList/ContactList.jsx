import React from 'react';
import PropTypes from 'prop-types';

import style from './ContactList.module.css';

 const ContactList = ({
  contactList,
  onDeleteContact,
}) => {
  return (
    <ul className={style.list_contacts}>
      {contactList.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export const ContactList = ({
  contactList: contacts,
  filterList: filter,
  onDeleteContact,
}) => {
  return (
    <ul className={style.list_contacts}>
      {(filter === '' ? contacts : filter).map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDeleteContact(name)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterList: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
// Specifies the default values for props:
ContactList.defaultProps = {
  filterList: '',
};
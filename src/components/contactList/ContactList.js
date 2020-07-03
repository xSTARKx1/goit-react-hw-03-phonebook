import React from 'react';
import Proptypes, { shape } from 'prop-types';
import Contact from './Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={styles.contact}>
        <Contact
          name={name}
          number={number}
          id={id}
          onDeleteContact={onDeleteContact}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: Proptypes.arrayOf(
    shape({
      id: Proptypes.string.isRequired,
    }),
  ),
};

export default ContactList;

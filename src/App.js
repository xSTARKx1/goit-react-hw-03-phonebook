import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/contactForm';
import ContactList from './components/contactList';
import Filter from './components/Filter';
import styles from './App.module.css';
import helpers from './helpers/helpers';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = helpers.getFromLS('contacts');

    this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      helpers.saveToLS('contacts', contacts);
    }
  }

  addContact = ({ name, number }) => {
    const isUniqueName = this.state.contacts.some(
      contact => contact.name === name,
    );

    if (isUniqueName) {
      alert(`${name} is alredy in contacts`);

      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    const { contacts, filter } = this.state;

    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length >= 2 ? (
          <Filter changeFilter={this.changeFilter} value={filter} />
        ) : null}
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

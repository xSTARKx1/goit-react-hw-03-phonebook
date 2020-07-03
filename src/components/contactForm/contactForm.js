import React, { Component } from 'react';
import styles from './ContactForm.module.css';

class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={styles.wrapper}>
        <form onSubmit={this.handleSubmit}>
          <h3 className={styles.title_form}>Name</h3>
          <input
            className={styles.input}
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <h3 className={styles.title_form}>Number</h3>
          <input
            className={styles.input}
            value={number}
            name="number"
            onChange={this.handleChange}
          />
          <br />
          <button className={styles.add_contact_btn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactEditor;

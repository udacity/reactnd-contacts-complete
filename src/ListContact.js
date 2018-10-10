import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import escapeRegExp from 'escape-string-regexp';
import { Link } from 'react-router-dom';

class ListContact extends Component {
  static propTypes = {
    contactList: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  updateQuery = (query) => {
    this.setState({
      query: query.trim(),
    });
  };

  clearQuery = () => this.setState({ query: '' });

  render() {
    const { contactList, onDeleteContact } = this.props;
    const { query } = this.state;

    let showingContacts;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingContacts = contactList.filter((contact) =>
        match.test(contact.name),
      );
    } else {
      showingContacts = contactList;
    }

    showingContacts.sort(sortBy('name'));

    return (
      <div className="list-contacts">
        <div className="list-contact-top">
          <input
            type="text"
            className="search-contacts"
            placeholder="Search Contacts"
            value={query}
            onChange={(e) => this.updateQuery(e.target.value)}
          />
          <Link to="/create" className="add-contact">
            Add Contact
          </Link>
        </div>

        {showingContacts.length !== contactList.length && (
          <div className="showing-contacts">
            <span>
              Now Showing {showingContacts.length} of {contactList.length}
            </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}
        <ol className="contact-list">
          {showingContacts.map((contact) => (
            <li className="contact-list-item" key={contact.id}>
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${contact.avatarURL})` }}
              />
              <div className="contact-details">
                <p className="contact-details">{contact.name}</p>
                <p className="contact-details">{contact.email}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => onDeleteContact(contact)}>
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContact;

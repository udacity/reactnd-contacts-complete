import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const value = serializeForm(e.target, { hash: true });
    this.props.onAddContact(value);
  };
  render() {
    return (
      <Fragment>
        <Link to="/" className="close-create-contact" />
        <form className="create-contact-form" onSubmit={this.handleSubmit}>
          <ImageInput
            className="create-contact-avatar-input"
            name="avatar"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default CreateContact;

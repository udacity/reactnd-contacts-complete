import React, { Component } from 'react';
import ListContact from './ListContact';
import CreateContact from './CreateContact';
import * as ContactsApi from './utils/ContactsAPI';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount = () => {
    ContactsApi.getAll().then((data) => this.setState({ contacts: data }));
  };

  removeContact = (contact) => {
    this.setState((state) => {
      contacts: state.contacts.filter((c) => c.id !== contact.id);
    });

    ContactsApi.remove(contact);
  };

  addContact = (contact) => {
    ContactsApi.create(contact).then((contact) =>
      //we use the arrow function method when we add to the previous state...
      // we can also use the this.seState({object:method})
      this.setState((state) => {
        contacts: state.contacts.concat([contact]);
      }),
    );
  };

  render() {
    const { contacts } = this.state;
    // line 45:We use the render prop method when we want to pass props to the components inside the route
    //  If we are not passing props we can use the component={Component name goes here}
    // line 58: HISTORY we use destructuring to get out from props the history object and we then push the / or index route after the form submit
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => (
              <ListContact
                contactList={contacts}
                onDeleteContact={this.removeContact}
              />
            )}
          />
          <Route
            path="/create"
            render={({ history }) => (
              <CreateContact
                onAddContact={(contact) => {
                  this.addContact(contact);
                  history.push('/');
                }}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

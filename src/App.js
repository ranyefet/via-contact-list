import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';

// Should be configurable
const API_URL = 'http://private-05627-frontendnewhire.apiary-mock.com/contact_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      contacts: [],
    }
  }
  componentDidMount() {
    // Set isFetching to true
    this.setState({
      isFetching: true
    });

    // Make an API call
    fetch(API_URL)
      .then(response => response.json())
      .then(json => {
        // Update isFetching to false and contacts
        this.setState({
          isFetching: false,
          contacts: json
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;

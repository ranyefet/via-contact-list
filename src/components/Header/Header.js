import React from 'react';
import SearchBox from '../SearchBox';
import './Header.css';

const Header = () => (
  <header className="Header">
    <h1 className="App-title">Via - Contact List</h1>
    <SearchBox />
  </header>
);

export default Header;
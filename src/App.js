import React, { Component } from 'react';
import './App.css';

import Header from './components/navigation/Header/Header.js';
import List from './components/jobs/List.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <List />
        </div>
      </div>
    );
  }
}

export default App;

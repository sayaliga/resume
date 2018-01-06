import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
        </Router>
      </div>
    );
  }
}

export default App;

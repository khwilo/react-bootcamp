import React, { Component } from 'react';

import About from './About';
import Home from './Home';
import Topics from './Topics';

class App extends Component {
  render() {
    return (
      <div>
        React Bootcamp
        <Home />
        <About />
        <Topics />
      </div>
    );
  }
}

export default App;

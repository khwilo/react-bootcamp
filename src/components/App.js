import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Topics from './Topics';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/topics" component={Topics} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

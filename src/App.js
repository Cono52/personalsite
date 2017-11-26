import React, { Component } from 'react';

import Nav from './components/nav';
import Home from './views/home';
import About from './views/about';
import Work from './views/work';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
        <About />
        <Work />
      </div>
    );
  }
}

export default App;

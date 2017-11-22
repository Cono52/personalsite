import React, { Component } from 'react';

import Home from './views/home';
import About from './views/about';
import Work from './views/work';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Work />
      </div>
    );
  }
}

export default App;

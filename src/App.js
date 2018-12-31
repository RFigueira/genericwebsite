import React, { Component } from 'react';
import Routes from './routes';

import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;

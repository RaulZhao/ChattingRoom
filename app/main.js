import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import App from './components/productBox';

class App extends Component {
  render() {
    return (
      <h1>Hello, world</h1>
    );
  }
}

ReactDom.render( <App />, App);
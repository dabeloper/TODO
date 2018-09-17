import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body';


class App extends Component {
  render() {
    this.user = "Usuario";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Body user={this.user}></Body>
      </div>
    );
  }
}

export default App;

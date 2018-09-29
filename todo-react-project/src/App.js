import React, { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Tasks owner="Proyecto"></Tasks>
      </div>
    );
  }
}

export default App;

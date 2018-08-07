import React, { Component } from 'react';
import logo from './Logo.svg.png';
import './App.css';
import TodoContainer from './containers/todoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Welcome to, Todo App.
        </p>
        <TodoContainer/>

      </div>
    );
  }
}

export default App;

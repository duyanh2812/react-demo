import React, { Component } from 'react';
import './App.css';
import NewComp from './Components/state/NewComp';
export class App extends Component {
  styles = {
    fontStyle: 'Bold',
    color: 'teal',
  };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}> Welcome</h1>
        <NewComp />
      </div>
    );
  }
}

export default App;

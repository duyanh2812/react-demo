import React, { Component } from 'react';
import './App.css';
import NewComp from './Components/state/NewComp';
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'user',
    };
  }

  onUserChange = () => {
    console.log('parent call');
    this.setState({
      name: 'Duy Anh',
    });
  };
  styles = {
    fontStyle: 'Bold',
    color: 'teal',
  };
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}> {this.state.name}</h1>
        <NewComp changeUser={this.onUserChange} />
      </div>
    );
  }
}

export default App;

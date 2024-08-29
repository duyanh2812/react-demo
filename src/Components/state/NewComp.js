import React, { Component } from 'react';

export class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Subcribe to Simplilearn',
      sub: 'Subscribe',
    };
  }

  styles = {
    fontStyle: 'Italic',
    color: 'purple',
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button>{this.state.sub}</button>
      </div>
    );
  }
}

export default NewComp;

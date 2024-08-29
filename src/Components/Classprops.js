import React, { Component } from 'react';

export class Classprops extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name} from {this.props.place}! Welcome to duy anh
          learn
        </h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Classprops;

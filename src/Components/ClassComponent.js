import React, { Component } from 'react';

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Test',
    };
  }
  render() {
    return (
      <div>
        <h1>This class compoen</h1>
      </div>
    );
  }
}

export class ClassComponent2 extends Component {
  render() {
    return (
      <div>
        <h1>This class component 2</h1>
      </div>
    );
  }
}

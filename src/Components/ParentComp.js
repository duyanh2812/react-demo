import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'test',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'test' });
    }, 3000);
  }

  onAdd = () => {};

  render() {
    console.log('Regular component render');
    return (
      <div>
        I'm t he parent component
        <RegComp name={this.state.name} onAdd={this.onAdd} />
        <PureComp />
      </div>
    );
  }
}

export default ParentComp;

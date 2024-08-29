import React, { Component } from 'react';
import PC from './PureComp';
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

  render() {
    console.log('Regular component render');
    return (
      <div>
        I'm t he parent component
        <RegComp name={this.state.name} />
        <PC />
      </div>
    );
  }
}

export default ParentComp;

import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
    console.log('Pure component render');
    return <div>I'm the pure component this.pro {this.props.name}</div>;
  }
}

export default PureComp;

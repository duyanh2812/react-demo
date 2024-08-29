import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Render Pure Component");
    return (
      <div>I'm the pure component</div>
    )
  }
}

export default PureComponent;
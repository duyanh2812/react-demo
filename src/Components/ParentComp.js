import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
export class ParentComp extends Component {
  constructor(props){
    super(props);

    this.state = {
      name:"test"
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setInterval({name:"test"})
    }, 3000);
  }

  render() {
    return (
      <div>I'm t
        he parent component
        <RegComp name = {this.state.name}/>
        <PureComp name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
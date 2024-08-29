import React, { Component } from 'react';
import bellA from './bellA.png';
import bellB from './bellB.png';

export class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Subcribe to Simplilearn',
      sub: 'Subscribe',
      imageUrl: bellB,
    };
  }

  styles = {
    fontStyle: 'Italic',
    color: 'purple',
  };

  ButtonChange = () => {
    this.props.changeUser();
    this.setState({
      message: 'Hit the bell icon to never miss an update',
      sub: 'Subscribed',
      imageUrl: bellB,
    });
  };

  ImageClick = () => {
    this.setState({
      message: 'Thank you! Happy Learning',
      imageUrl: bellA,
    });
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p />
        <img
          src={this.state.imageUrl}
          style={{ width: '30px', height: '30px' }}
          onClick={this.ImageClick}
          alt=""
        />
      </div>
    );
  }
}

export default NewComp;

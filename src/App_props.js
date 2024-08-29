import React, { Component } from 'react';
import Classprops from './Components/Classprops';
import Functionprops from './Components/Functionprops';
export class App extends Component {
  render() {
    return (
      <div>
        <Classprops name="Duy Anh" place="placeX">
          <p>Happy leanrning</p>
        </Classprops>
        <Classprops name="Mai Huong" place="placeY">
          <button>Click here!</button>
        </Classprops>
        <Classprops name="Duy Phat" place="placeZ" />
        <Classprops name="Tu Uyen" place="placeG" />
        <Functionprops name="Ngo Thi Oanh" place="placeA">
          {' '}
        </Functionprops>
      </div>
    );
  }
}

export default App;

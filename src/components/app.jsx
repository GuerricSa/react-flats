import React, { Component } from 'react';
import FlatList from './flat-list';
import Map from './map';
import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: [flats]
    };
  }
  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList />
        </div>
        <div className="right-scene">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;

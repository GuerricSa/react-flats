import React, { Component } from 'react';
import FlatList from './flat-list';
import flats from '../../data/flats';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  // selectFlat = () => {
  //   this.setState({ selectedFlat: flats[index]});
  // }

  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList
            flats={this.state.flats}
            // selectFlat={this.selectFlat}
            // selectedFlat={this.state.selectedFlat}
          />
        </div>
        <div className="right-scene" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            defaultCenter={this.center}
            defaultZoom={11}
          />
        </div>
      </div>
    );
  }
}

export default App;

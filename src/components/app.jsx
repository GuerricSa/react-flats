import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const apiKey = 'AIzaSyDgBQmTPYcwUAvjh-_WyKwYkr26EKrgZKM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList
            flats={this.state.flats}
            selectFlat={this.selectFlat}
            selectedFlat={this.state.selectedFlat}
          />
        </div>
        <div className="right-scene" style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={this.center()}
            defaultZoom={12}
          >
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;

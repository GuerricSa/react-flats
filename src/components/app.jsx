import React, { Component } from 'react';
// import dotenv from 'dotenv';
import GoogleMapReact from 'google-map-react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import Marker from './marker';

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
    const apiKey = 'AIzaSyDgBQmTPYcwUAvjh-_WyKwYkr26EKrgZKM';

    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectFlat={this.selectFlat}
          selectedFlat={this.state.selectedFlat}
        />
        <div className="map-container">
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

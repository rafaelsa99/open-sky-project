import './App.css';
import Nav from './Nav';
import ListPlaneComponent from './ListPlaneComponent';
import Historic from './Historic';
import ReactMapGL from 'react-map-gl';
import {useState} from 'react';
import React, { Component }from 'react';
import {Marker} from 'react-map-gl';
import FlightService from './PlaneService';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [viewport, setViewport] = useState({
    latitude: 34.053691,
    longitude:  -118.242766,
    width: '100vw',
    height: '100vh',
    zoom: 10
});
  return (
    <Router>
    <div className="App">
    <Nav />
      <ReactMapGL 
      mapStyle={'mapbox://styles/mapbox/dark-v9'}
       mapboxApiAccessToken={
         "pk.eyJ1IjoidmVzdGVyciIsImEiOiJja25idHlzd2oxdjg4MnBwOXpldzRtazYzIn0.YuVQQPP_eM-SSCvbvB2QlA"
        }
      {...viewport}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
     >
       {/* COMENTÁRIO JSX 
         {planes.map(planes=> ( 
          <Marker 
          key={planes.callsign} 
          latitude={planes.latitude}
          longitude={planes.longitude}
          >
          <div>Plane</div>
          </Marker>
        ))} */}
        
      </ReactMapGL>

    
    <Switch>
      <Route path="/" exact component={ListPlaneComponent}/>
      <Route path="/historic" component={Historic}/>
    </Switch>
    
    
    </div>
    </Router>
  );
}

export default App;

import ReactMapGL from 'react-map-gl';
import {useState} from 'react';
import React, { Component }from 'react';
import FlightService from './PlaneService';
import {Marker} from 'react-map-gl';

    function Map(Component){
        return function WrappedComponent(props){
        const [viewport, setViewport] = useState({
            latitude: 34.053691,
            longitude:  -118.242766,
            width: '100vw',
            height: '100vh',
            zoom: 10
        });
        return <Component {...props} viewport={[viewport, setViewport]} />;
    }
    }

    class ListPlaneComponent extends Component {
        intervalID;
        constructor(){
            super();
            this.state = {
                planes :[]
            }
        }   
    
        componentDidMount(){
            this.getData();
        }
        componentWillUnmount() {
            clearTimeout(this.intervalID);
        }
        getData(){
            FlightService.getPlanes().then((res) => {
                this.setState({planes: res.data});
                this.intervalID = setTimeout(this.getData.bind(this), 5000);
            }
            
            ); 
        }
        render() {
            const [viewport, setViewport] = this.props.viewport;
            return (
                <div>
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
                    {
                        this.state.planes.map(planes=> ( 
                        <Marker 
                            key={planes.callsign} 
                            latitude={planes.latitude}
                            longitude={planes.longitude}
                        >
                          <button class="marker-btn">
                            <img src="/plane3.svg" alt="Plane Icon"/>
                          </button>
                        </Marker>
                     ))} 
                        
                    </ReactMapGL>
                    <h1 className="text-center">List of Planes in Metropolitan LA</h1>
                    <p><b>Total of planes:</b> {this.state.planes.length}</p>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Callsign</th>
                                    <th>Origin Country</th>
                                    <th>Latitude</th>
                                    <th>Longitude</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.planes.map(
                                        planes=>
                                        <tr key={planes.callsign}>
                                            <td>{planes.callsign}</td>
                                            <td>{planes.origin_country}</td>
                                            <td>{planes.latitude}</td>
                                            <td>{planes.longitude}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    
                    </div>
                
            );
            
        }
    }
    
    export default Map(ListPlaneComponent);
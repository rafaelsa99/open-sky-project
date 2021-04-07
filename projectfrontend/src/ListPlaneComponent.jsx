
import React, { Component } from 'react';
import FlightService from './PlaneService';
    
    class ListPlaneComponent extends Component {
        constructor(){
            super();
            this.state = {
                planes :[]
            }
        }

        componentDidMount(){
            FlightService.getPlanes().then((res) => {
                this.setState({planes: res.data});
            }
            ); 
        }

        render() {
            return (
                <div>
                    <h1 className="text-center">List of Planes in Metropolitan LA</h1>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Callsign</th>
                                    <th>Origin Country</th>
                                    <th>Geometric Altitude (meters)</th>
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
                                            <td>{planes.geo_altitude}</td>
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
    
    export default ListPlaneComponent;
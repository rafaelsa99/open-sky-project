
import React, { Component } from 'react';
import FlightService from './PlaneService';
    
    class ListPlaneComponent extends Component {
        constructor(){
            super();
            this.state = {
                planes :[],
                history :[]
            }
        }

        componentDidMount(){
            FlightService.getPlanes().then((res) => {
                this.setState({planes: res.data});
            }
            ); 
            FlightService.getHistory().then((res) => {
                this.setState({history: res.data});
            }
            );
        }

        render() {
            return (
                <div>
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
                    <h2 className="text-center">Geometric and Barometric Altitude of Planes entering Metropolitan LA</h2>
                    <p><b>Total of planes in history:</b> {this.state.history.length}</p>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Callsign</th>
                                    <th>Origin Country</th>
                                    <th>Geometric Altitude (meters)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.history.map(
                                        history=>
                                        <tr key={history.callsign}>
                                            <td>{history.callsign}</td>
                                            <td>{history.origin_country}</td>
                                            <td>{history.geo_altitude}</td>
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
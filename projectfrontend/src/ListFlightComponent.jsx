
import React, { Component } from 'react';
import FlightService from './FlightService';
    
    class ListFlightComponent extends Component {
        constructor(){
            super();
            this.state = {
                flights :[]
            }
        }

        componentDidMount(){
            FlightService.getFlights().then((res) => {
                this.setState({flights: res.data});
            }
            ); 
        }

        render() {
            return (
                <div>
                    <h1 className="text-center">Flight List</h1>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Callsign</th>
                                    <th>Origin Airport</th>
                                    <th>First Seen</th>
                                    <th>Last Seen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.flights.map(
                                        flights=>
                                        <tr key={flights.callsign}>
                                            <td>{flights.callsign}</td>
                                            <td>{flights.estDepartureAirport}</td>
                                            <td>{flights.firstSeen}</td>
                                            <td>{flights.lastSeen}</td>
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
    
    export default ListFlightComponent;
import React, { Component } from 'react';
import FlightService from './PlaneService';
    
class Historic extends Component {
    intervalID;
    constructor(){
        super();
        this.state = {
            planes :[],
            history :[]
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
        FlightService.getHistory().then((res) => {
            this.setState({history: res.data});
        }
        );
        }
        render() {
            return (
               <div>
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
    
    export default Historic;
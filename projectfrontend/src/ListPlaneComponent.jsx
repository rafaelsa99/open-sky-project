import ReactMapGL from 'react-map-gl';
import {useState} from 'react';
import React, { Component }from 'react';
import FlightService from './PlaneService';
    
    class ListPlaneComponent extends Component {
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
    
    export default ListPlaneComponent;
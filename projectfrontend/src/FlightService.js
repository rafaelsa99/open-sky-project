import axios from "axios"

const OPEN_SKY_API_BASE_URL = "http://localhost:8080/flights";

class FlightService{
    getFlights(){
        return axios.get(OPEN_SKY_API_BASE_URL);
    }
}

export default new FlightService();

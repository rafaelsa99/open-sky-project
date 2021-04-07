import axios from "axios"

const OPEN_SKY_API_BASE_URL = "http://localhost:8080/planes";

class PlaneService{
    getPlanes(){
        return axios.get(OPEN_SKY_API_BASE_URL);
    }
}

export default new PlaneService();

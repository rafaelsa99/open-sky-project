import axios from "axios"

const OPEN_SKY_API_BASE_URL = "http://localhost:8080/";


class PlaneService{
    getPlanes(){
        return axios.get(OPEN_SKY_API_BASE_URL + "planes");
    }

    getHistory(){
        return axios.get(OPEN_SKY_API_BASE_URL + "history");
    }
}

export default new PlaneService();

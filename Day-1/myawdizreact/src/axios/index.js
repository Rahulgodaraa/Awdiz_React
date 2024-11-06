import axios from "axios";


let currentMode = "";
let currentBackendUrl = "";
if(currentMode == "PROD"){
    currentBackendUrl = "http://prod:8000/api/v2";
} else if (currentMode == "NONPROD") {
    currentBackendUrl = "http://nonprod:8000/api/v1"
} else {
    currentBackendUrl = "http://localhost:8000/api/v2"
}

const api = axios.create({
    // baseURL : process.env.DEVBACKENDURL,
    // baseURL : "http://localhost:8000/api/v2"
    baseURL : currentBackendUrl,
    withCredentials : true,
})

export default api;
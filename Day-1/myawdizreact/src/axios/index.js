import axios from "axios";

const api = axios.create({
    baseURL : process.env.DEVBACKENDURL,
})

export default api;
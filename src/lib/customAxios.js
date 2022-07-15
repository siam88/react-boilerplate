import axios from 'axios';



const instance = axios.create({
    baseURL: "http://65.0.51.7:9999/api/v1/",
})
// instance.defaults.headers.common['Authorization'] = 'Auth token from instance'
instance.defaults.headers["Access-Control-Allow-Origin"] = "*";
instance.defaults.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
instance.defaults.headers["Access-Control-Allow-Headers"] = "Content-Type,Accept, X-Auth-Token, Origin, Authorization";


// instance.defaults.headers["content-type"] = "multipart/form-data";


export default instance;





import axios from "axios";

const request = axios.create({
    // baseURL: "ets-service-production.up.railway.app",
    baseURL: "http://localhost:8080",
    //   baseURL:"linkdeploy"
});

export default request;

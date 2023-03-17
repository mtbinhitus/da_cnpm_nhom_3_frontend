import axios from "axios";

const request = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL:"http://ets-service-production.up.railway.app"
});

export default request;

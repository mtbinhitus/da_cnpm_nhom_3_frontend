import axios from "axios";

const request = axios.create({
  baseURL: "https://ets-service-production.up.railway.app/",
//   baseURL:"linkdeploy"
});

export default request;

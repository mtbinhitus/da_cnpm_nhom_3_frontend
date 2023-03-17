import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8080",
//   baseURL:"linkdeploy"
});

export default request;

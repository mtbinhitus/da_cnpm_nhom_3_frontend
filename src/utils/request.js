import axios from 'axios';

const request = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: 'http://18.139.83.149:8080/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

export default request;

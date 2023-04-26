import axios from 'axios';

const request = axios.create({
    // baseURL: 'http://localhost:8081',
    baseURL: 'http://ec2-52-221-234-236.ap-southeast-1.compute.amazonaws.com:8081',
    // baseURL: 'http://18.139.83.149:8080/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

export default request;

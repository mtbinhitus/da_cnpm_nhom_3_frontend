import axios from 'axios';

const request = axios.create({
    baseURL: 'https://19127017.smolbee.link:8081/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});

export default request;

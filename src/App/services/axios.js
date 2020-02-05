import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://5b27755162e42b0014915662.mockapi.io/api/v1'
})

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL:"https://fierce-garden-03419.herokuapp.com/"
});

export default instance;
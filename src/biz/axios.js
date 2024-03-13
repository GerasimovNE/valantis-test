import Axios from 'axios';
import md5 from 'crypto-js/md5';

const axios = Axios.create({
    withCredentials: true,
});

axios.interceptors.request.use((config) => {
    const date = new Date().toISOString().slice(0, 10).split('-');
    const XAuth = md5(`Valantis_${date[0]}${date[1]}${date[2]}`);
    config.headers['X-Auth'] = XAuth;
    return config;
});

export default axios;

import axios from 'axios';
import { API_BASE_URL, API_TOKEN_RAPIDAPI_KEY } from './consts';

export const axiosConfig = {
    headers: {
        "x-rapidapi-host": `${API_BASE_URL}`,
        "x-rapidapi-key": `${API_TOKEN_RAPIDAPI_KEY}`
    },
};

export const axiosClientInstance = axios.create(axiosConfig);

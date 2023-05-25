import axios from "axios";

const ApiSystem = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    withCredentials: true,
    timeout: 100000,
})

ApiSystem.interceptors.request.use((request) => {
    return request
}, (error) => {
    return error
})

ApiSystem.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    if (!error.response) throw new Error('Error connection')

    if (error.response.status === 401) {
        //Do something here to refresh token
    }

    return Promise.reject(error.response.data);
})

export const setSpootifyAuthToken = (token) => {
    ApiSystem.defaults.headers.common['Authorization'] = '';

    delete ApiSystem.defaults.headers.common['Authorization'];

    if (token) {
        ApiSystem.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

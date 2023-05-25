import axios from "axios";
import {store} from "../store";
import {updateSpootifyTokenAction} from "../store/features/spootifySlice";

const GenerateToken = () => {
    const params = new URLSearchParams()

    params.append('client_id', `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`)
    params.append('client_secret', `${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)
    params.append('grant_type', 'client_credentials')

    axios.post(`${process.env.REACT_APP_SPOTIFY_AUTH_API_URL}/token`, params, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
        .then((res) => {
            store.dispatch(updateSpootifyTokenAction(res.data))

            setSpootifyAuthToken(res.data.access_token)

            // window.location.reload()
        })
}

const ApiSpootify = axios.create({
    baseURL: `${process.env.REACT_APP_SPOTIFY_BASE_API_URL}`,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
})

ApiSpootify.interceptors.request.use((request) => {
    return request
}, (error) => {
    return error
})

ApiSpootify.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    if (!error.response || error.response.status === 401) {
        GenerateToken()
    }

    if (!error.response) throw new Error('Error connection')

    return Promise.reject(error.response.data);
})

export const setSpootifyAuthToken = (token) => {
    ApiSpootify.defaults.headers.common['Authorization'] = '';

    delete ApiSpootify.defaults.headers.common['Authorization'];

    if (token) {
        ApiSpootify.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

export default ApiSpootify

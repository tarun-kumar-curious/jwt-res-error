import axios from "axios";
import { KEY_ACCESS_TOKEN, getItem, setItem } from "./localStorageManager";

const baseURL = "http://localhost:4000";
export const axiosClient = axios.create({
    baseURL,
    withCredentials: true,
});

axiosClient.interceptors.request.use((request) => {
    const accessToken = getItem(KEY_ACCESS_TOKEN);
    console.log("access token from axios req:", accessToken);
    request.headers["Authorization"] = `Bearer ${accessToken}`;

    return request;
});

axiosClient.interceptors.response.use(
    async (response) => {
        try {
        const data = response.data;
        console.log("response from axios res:", data);

        if (data.status === "ok") {
            return data;
        }

        const originalRequest = response.config;
        const statusCode = data.statusCode;
        const error = data.message;

        if (statusCode === 401 && !originalRequest._retry) {
            // this means that the access token is expired
            originalRequest._retry = true;
            // const response = await axios.get('/auth/refresh');

            const response = await axios
                .create({
                    withCredentials: true,
                })
                .get(`${process.env.REACT_APP_SERVER_BASE_URL}/api/refresh`);

            // console.log('response from  backend', response);

            if (response.data.status === "ok") {
                setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);

                originalRequest.headers["Authorization"] = `Bearer ${response.data.result.accessToken}`;

                return axios(originalRequest);
            } else {
                removeItem(KEY_ACCESS_TOKEN);
                window.location.replace("/local", "_self");
                return Promise.reject(error);
            }
        }
        // console.log("Axios error", error);

        return Promise.reject(error);
        } catch (error) {
            return console.log(error);
        }
    }
);

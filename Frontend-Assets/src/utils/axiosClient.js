import axios, { AxiosError } from "axios";
import { KEY_ACCESS_TOKEN, getItem, removeItem, setItem } from "./localStorageManager";
import { json } from "react-router-dom";

const baseURL = "http://localhost:5000";
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
            console.log("response", response);
            const responseStatus = response.status;

            if (responseStatus === 200) {
                return response.data;
            }
        } catch (error) {
            return console.log("catch error:", error);
        }
    },
    async (error) => {
        try {
            const originalRequest = error.response.config;
            if (error.response && error.response.status === 401 && !originalRequest._retry) {
                // Handle 401 error explicitly
                originalRequest._retry = true;
                const response = await axios
                    .create({
                        withCredentials: true,
                    })
                    .post(`/api/refresh`);

                console.log("response from  backend", response);

                if (response.status === 200 || response.status === 201) {
                    setItem(KEY_ACCESS_TOKEN, response.data.accessToken);
                    console.log("setItem donewith ", response.data.accessToken);
                    originalRequest.headers["Authorization"] = `Bearer ${response.data.accessToken}`;
                    console.log("originalRequest", originalRequest);
                    return axios(originalRequest);
                } else {
                    console.log("Error.response", error.response);
                    removeItem(KEY_ACCESS_TOKEN);
                    window.location.replace("/signin", "_self");
                    return Promise.reject(error);
                }

                console.error("Unauthorized error:", error);
                // Perform any additional actions or redirect to login page
            }
            return Promise.reject(error);
        } catch (error) {
            return console.log("catch error: error param", error);
        }
    }
);

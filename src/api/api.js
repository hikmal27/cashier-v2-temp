import axios from "axios";
import { API_URL, API_URL_V2 } from "./constant";

const api = axios.create({
    baseURL: API_URL,
    timeout: 100000
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status == 401) {
            // const authStore = useAuthStore();
            // authStore.isLogout = !authStore.isLogout;
            // 401 Unauthorized
            // Do Something..
        } else if (error.response?.status == 400) {
            // 400 Bad Request
            // Do Something..
        } else if (error.response?.status == 404) {
            // 404 Not Found
            // Do Something..
        } else if (error.response?.status == 500) {
            // 500 Internal Server Error
            // Do Something..
        }

        return Promise.reject(error);
    }
);

const api2 = axios.create({
    baseURL: API_URL_V2,
    timeout: 100000
});

api2.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status == 401) {
            // const authStore = useAuthStore();
            // authStore.isLogout = !authStore.isLogout;
            // 401 Unauthorized
            // Do Something..
        } else if (error.response?.status == 400) {
            // 400 Bad Request
            // Do Something..
        } else if (error.response?.status == 404) {
            // 404 Not Found
            // Do Something..
        } else if (error.response?.status == 500) {
            // 500 Internal Server Error
            // Do Something..
        }

        return Promise.reject(error);
    }
);

export { api, api2 };

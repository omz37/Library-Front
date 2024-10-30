import axios, {AxiosInstance, InternalAxiosRequestConfig} from "axios";
import {AppRoutes} from "../constants/RoutesConstants";
import {RouteInterface} from "../interfaces/Route.interface";

/**
 * Créer une instance Axios pour effectuer des requêtes HTTP.
 * @type {AxiosInstance}
 */
const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': "application/json"
    }
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>):InternalAxiosRequestConfig<any> =>  {
        const token: string = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config
    }
)

export default axiosInstance;

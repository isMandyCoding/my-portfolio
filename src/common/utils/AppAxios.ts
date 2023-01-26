import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

const AppAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  timeout: 10000,
});

const interceptMethods = ['post', 'put', 'delete'];
const isInterceptMethod = (method: string | undefined) => interceptMethods.includes(method ?? "");

const onRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig<any>> => {
    const csrf = Cookies.get('XSRF-TOKEN');
  if (csrf) {
    return config;
  }
  if (isInterceptMethod(config.method)) {
    await setCSRFToken();
    return config;
  }
  return config;
}

const setCSRFToken = (): Promise<any> => {
  return AppAxios.get('/sanctum/csrf-cookie'); 
}

AppAxios.interceptors.request.use(onRequest, null);


export default AppAxios;
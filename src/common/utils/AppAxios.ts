import axios from "axios";

const AppAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  timeout: 10000,
});

export default AppAxios;
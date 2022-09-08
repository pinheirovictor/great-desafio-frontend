import axios from "axios";

const gateway = process.env.REACT_APP_GATEWAY;

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Accept: `application/json`,
  },
});

export default api;
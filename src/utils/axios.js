import axios from "axios";

const api = axios.create({
  baseURL: "https://jobs-api.return0.codes",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default api;

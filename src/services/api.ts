import axios from "axios";

const api = axios.create({
  baseURL: "https://mks-frontend-challenge-api.herokuapp.com/api/v1/",
});

export default api;

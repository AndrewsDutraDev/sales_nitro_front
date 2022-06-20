import axios from "axios";

const api = axios.create({
  baseURL: "https://sales-nitro-back.herokuapp.com",
});

export default api;
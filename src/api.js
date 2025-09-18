import axios from "axios";

const api = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key: "fa5b382469634e31b498e33879638aec",
    },
  });

export default api;
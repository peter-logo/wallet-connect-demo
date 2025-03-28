import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.CMC_PRO_BASE_URL,
  headers: {
    "X-CMC_PRO_API_KEY": import.meta.env.CMC_PRO_API_KEY,
  },
});

import axios from "axios";
const BASE_URL = "http://localhost:3300/api/v1";

const token = localStorage.getItem("token") || null;

export const GET = () => {
  return axios.get(BASE_URL);
};

export const POST = (url, data) => {
  return axios.post(`${BASE_URL}${url}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

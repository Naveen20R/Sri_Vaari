import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const http = axios.create({
  baseURL: "http://localhost:8000/api",
  headers,
});

export default http;

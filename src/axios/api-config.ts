import axios from "axios";

export const api = axios.create({
  baseURL: "/api/", // localhost:3000
});

export const EndPoints = {
  heroes: "heroes",
};

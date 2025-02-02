import axios from "axios";

export const API = axios.create({
  baseURL: "https://asanabdi50.pythonanywhere.com/ru/api/v1/"
})
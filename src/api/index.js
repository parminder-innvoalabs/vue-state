import axios from "axios";
import { URL } from "@/api/global.env";

const apiDefaults = axios.create({
  baseURL: `${URL}`,
  timeout: 10000,
});

export { apiDefaults, axios };

import axios from "axios";
import { URL } from "@/api/global.env";

const apiDefaults = {
  baseURL: `${URL}`,
  timeout: 10000,
};
export { apiDefaults, axios };

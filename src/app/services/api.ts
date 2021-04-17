import axios, { Method } from "axios";

export const apiCall = async (method: Method, url: string) => {
  return axios({
    method,
    url,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.data);
};

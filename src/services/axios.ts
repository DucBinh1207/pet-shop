import Cookies from "js-cookie";
import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000, // nếu vượt quá timeout thì sẽ ngừng request (throw về error)
});

apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const status = error.response.status;
      switch (status) {
        case 400:
          console.error("Bad Request: ", error.response.data.message);
          throw new Error(error.response.data.message);
        case 401:
          console.error("Unauthorized: ", error.response.data.message);
          Cookies.remove("token");
          throw new Error(error.response.data.message);
        case 404:
          console.error("Not Found: ", error.response.data.message);
          throw new Error(error.response.data.message);
        case 500:
          console.error("Server Error: ", error.response.data.message);
          Cookies.remove("token");
          throw new Error(error.response.data.message);
        default:
          console.error("Error: ", error.response.data.message);
      }
      return Promise.reject(error.response.data.message);
    }
    if (error.request) {
      console.error("Network Error: No response received from the server");
      return;
    }
    console.error("Error: ", error.message);
  },
);

export const get = <T>({
  url,
  params,
  config,
}: {
  url: string;
  params?: AxiosRequestConfig["params"];
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.get(url, { url, params, ...config });

export const post = <T>({
  url,
  data,
  config,
}: {
  url: string;
  data: unknown;
  config?: AxiosRequestConfig;
}): Promise<T> => apiClient.post(url, data, config);

export const update = ({
  url,
  data,
  config,
}: {
  url: string;
  data: unknown;
  config?: AxiosRequestConfig;
}) => apiClient.put(url, data, config);

export const remove = ({ url }: { url: string }) => apiClient.delete(url);

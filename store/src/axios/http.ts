import axios, { AxiosRequestConfig } from "axios";

axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
  // console.log(">>>>>config says helllo", config.url)

  if (config.url?.includes('/login')) return config;
  if (config.url?.includes('/register')) return config;


  // validateToken()

  config.headers!['Authorization'] = "Bearer " + localStorage.getItem("access_token")
  config.headers!['Content-Type'] = "application/json";
  return config
},
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(">>>>>>error", error)

    const request = error.config; //this is actual request that was sent, and error is received in response to that request
    if (error?.request.status === 401 && !request._retry) {
    // console.log("error from config", error)

      request._retry = true;
      axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("access_token")
      axios.defaults.headers.common["Content-Type"] = "application/json";
      return axios(request);
    } 
    return Promise.reject(error);
  }
);

const http = axios

// eslint-disable-next-line import/no-anonymous-default-export
export { http };


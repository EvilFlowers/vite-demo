import axios from "axios";

const request = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
})

request.interceptors.request.use(
    (config) => {
      return config
    }
)

request.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      return Promise.reject(error)
    }
)

export function get(url, params) {
  return request.get(url, params)
}

export function post(url, data) {
  return request.post(url, data)
}

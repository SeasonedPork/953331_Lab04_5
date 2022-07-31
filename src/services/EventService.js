import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3004",
  //this should use the WebAPI but for as they said the API is not gud so
  // baseURL: "https://api.instantwebtools.net/v1/passenger?page=0&size=10", 502bad gate way test with pose man
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(perPage, page) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  //Added new call
  getEvent(id) {
    return apiClient.get('/events/' + id)
  }
}

import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/se331-2022/passengerdb",
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
  getEvents() {
    return apiClient.get("/passenger?_page=1&_limit=5");
  },
  getEventsPassenger(id) {
    return apiClient.get("/passenger/" + id);
  },
};

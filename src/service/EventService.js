import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.instantwebtools.net/v1/passenger?page=0&size=10",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEventsAirline() {
    return apiClient.get("/airline");
  },
  //Added new call
  getEventsPassengers() {
    return apiClient.get("/passengers");
  },
};

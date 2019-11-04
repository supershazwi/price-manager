import http from "./httpService";

export function getDates() {
  return http.get("https://enigmatic-stream-42646.herokuapp.com/api/dates");
}

import http from "./httpService";

export function getDates() {
  return http.get("http://localhost:3900/api/dates");
}

import http from "./httpService";

export function getProducts() {
  return http.get("http://localhost:3900/api/products");
}

export function getProduct(id) {
  return http.get(`http://localhost:3900/api/products/${id}`);
}

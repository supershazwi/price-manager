import http from "./httpService";

export function getProducts() {
  return http.get("https://enigmatic-stream-42646.herokuapp.com/api/products");
}

export function getProduct(id) {
  return http.get(
    `https://enigmatic-stream-42646.herokuapp.com/api/products/${id}`
  );
}

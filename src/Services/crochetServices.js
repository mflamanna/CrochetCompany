import axios from "axios";
const baseURL = "https://sheetsu.com/apis/v1.0su/48b7af5e1403/";

export const crochetServices = {
  getAllProducts() {
    const products = axios.get(baseURL).then((res) => res.data);
    return products;
  },

  getProductById(id) {
    const products = axios.get(baseURL +"/id/" + id).then((res) => res.data);
    return products;
  }

};
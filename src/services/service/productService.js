import axios from "../axios/index";

export const getProductService = (filterData) => {
  console.log(axios);
  return axios.post(`/products`, filterData);
};

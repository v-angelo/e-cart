import { axiosAllProducts, axiosInstance } from "./axiosInstance";

export const apiService01 = async (url) => {
  try {
    const response = await axiosAllProducts.get(url);
    return response;
  } catch (err) {
    throw new Error(`Error: ${err.msg}`);
  }
};

export const apiService02 = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url,
    data: reqBody,
  };

  try {
    const response = await axiosInstance(reqConfig);
    return response;
  } catch (err) {
    throw err;
  }
};

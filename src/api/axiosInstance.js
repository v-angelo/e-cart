import axios from "axios";

export const axiosAllProducts = axios.create({
  timeout: 5000,
});

// response interceptors
axiosAllProducts.interceptors.response.use(
  (response) => {
    console.log("response received!");
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      let errMsg = "";
      if (status == 401) {
        errMsg = "Invalid API url!";
      } else if (status == 404) {
        errMsg = "Invalid Input! Try again with another input.";
      } else if (status == 500) {
        errMsg = "Server Errror!";
      } else if (error.request) {
        errMsg = "No response! Please try again after sometime.";
      } else {
        console.log("Error: " + error.message);
      }
      errMsg && console.log(errMsg);
      error.msg = errMsg;
      return Promise.reject(error);
    }
  },
);

// json server instance
export const axiosInstance = axios.create({
  baseURL: "https://random-server-rwy5.onrender.com",
  timeout: 5000,
});

// response interceptors
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response received!");
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      if (status == 401) {
        console.log("Unauthorised Access! Redirect to Login...");
      } else if (status == 404) {
        console.log("API not found!");
      } else if (status == 500) {
        console.log("Server Errror!");
      } else if (error.request) {
        console.log("No response from server...");
      } else {
        console.log("Error: " + error.message);
      }
      return Promise.reject(error);
    }
  },
);

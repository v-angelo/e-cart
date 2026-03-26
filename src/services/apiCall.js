import { apiService01, apiService02 } from "../api/apiService";

export const diplayAllProducts = async () => {
  const response = await apiService01("https://fakestoreapi.com/products");
  const data = response.data;

  return data;
};

export const addToCart = async (item) => {
  const existing = await apiService02("GET", `/cart?id=${item.id}`, {});

  if (existing?.data.length > 0) {
    const data = existing.data[0];

    const newQuantity = data.quantity ? data.quantity + 1 : 1;

    await apiService02("PATCH", `/cart/${data.id}`, {
      quantity: newQuantity,
    });
  } else {
    await apiService02("POST", "/cart", {
      ...item,
      quantity: 1,
    });
  }
};

export const removeFromCart = async (item) => {
  const existing = await apiService02("GET", `/cart?id=${item.id}`, {});

  if (existing?.data.length > 0) {
    const data = existing.data[0];

    const newQuantity = data.quantity ? data.quantity - 1 : 0;

    if (newQuantity == 0) {
      await apiService02("DELETE", `/cart/${data.id}`, {});
    } else {
      await apiService02("PATCH", `/cart/${data.id}`, {
        quantity: newQuantity,
      });
    }
  } else {
    throw new Error("Failed to retrieve data!");
  }
};

export const displayCartItems = async () => {
  const response = await apiService02("GET", "/cart", {});
  const data = response.data;

  return data;
};

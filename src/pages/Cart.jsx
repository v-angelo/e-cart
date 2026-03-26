import React, { useEffect, useRef, useState } from "react";
import {
  addToCart,
  displayCartItems,
  removeFromCart,
} from "../services/apiCall";

function Cart() {
  const [cart, setCart] = useState([]);
  const [call, setCall] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const displayCart = async () => {
      const data = await displayCartItems();
      setCart(data);
      console.log(data);

      let total = data.reduce((acc, curr) => {
        acc += curr.quantity * curr.price;
        return acc;
      }, 0);
      setTotalPrice(total.toFixed(2));
    };
    displayCart();
  }, [call]);

  return (
    <article className="max-w-5xl m-10 mx-auto relative">
      <table className="w-full text-center container mx-auto">
        <thead className="bg-blue-500">
          <tr>
            <th className="p-2">Image</th>
            <th className="p-2">Item</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>

        <tbody>
          {cart?.map((item) => (
            <tr key={item.id} className="border-b border-black/15">
              <td className="p-2">
                <img
                  className="h-15 w-15 object-contain"
                  src={`${item?.image}`}
                  alt="image"
                />
              </td>
              <td className="p-2">{item?.title}</td>
              <td>
                <div className="flex justify-center items-center p-2 gap-2">
                  <button
                    onClick={async () => {
                      await removeFromCart(item);
                      setCall(!call);
                    }}
                    className="cursor-pointer active:opacity-85"
                  >
                    ➖
                  </button>
                  <h4>{item?.quantity}</h4>
                  <button
                    onClick={async () => {
                      await addToCart(item);
                      setCall(!call);
                    }}
                    className="cursor-pointer active:opacity-85"
                  >
                    ➕
                  </button>
                </div>
              </td>
              <td className="p-2">${item?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {cart.length > 0 && (
        <section className="flex justify-between items-center text-2xl font-semibold w-70 absolute -bottom-10 right-0">
          <h2>Total Price:</h2>
          <h2>${totalPrice}</h2>
        </section>
      )}
    </article>
  );
}

export default Cart;

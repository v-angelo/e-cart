import React from "react";

function Cart({
  cart,
  addToCart,
  removeFromCart,
  call,
  setCall,
  itemCount,
  totalPrice,
}) {
  return (
    <article className="max-w-3xl mt-10 mb-30 mx-auto relative">
      <table className="w-full text-center mx-auto">
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

      {cart?.length > 0 && (
        <section className="md:w-70 w-50 absolute -bottom-18 right-0">
          <div className="flex justify-between items-center md:text-xl font-semibold mb-2">
            <h2>Total Items:</h2>
            <h2>{itemCount}</h2>
          </div>
          <div className="flex justify-between items-center md:text-2xl text-lg font-bold">
            <h2>Total Price:</h2>
            <h2>${totalPrice}</h2>
          </div>
        </section>
      )}
    </article>
  );
}

export default Cart;

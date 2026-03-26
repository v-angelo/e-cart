import React, { useEffect, useState } from "react";
import { diplayAllProducts, addToCart } from "../services/apiCall";

function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await diplayAllProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <section className="flex flex-wrap mx-auto max-w-5xl items-center justify-center">
      {products?.map((item, index) => (
        <article
          key={index}
          className="border border-black/20 w-50 h-80 m-2 rounded flex flex-col justify-center items-center p-2 text-center"
        >
          <img
            className="h-2/3 object-contain"
            src={`${item.image}`}
            alt="img"
          />

          <h4>{item.title}</h4>
          <h4>$ {item.price}</h4>
          <button
            onClick={async () => {
              await addToCart(item);
              alert("Item added to Cart!");
            }}
            className="cursor-pointer p-2 rounded bg-gray-900 text-white"
          >
            Add to Cart
          </button>
        </article>
      ))}
    </section>
  );
}

export default ProductCard;

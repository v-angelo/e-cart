import React from "react";
import ProductCard from "../components/ProductCard";

function AllProducts({ setCall, call }) {
  return (
    <section>
      <ProductCard setCall={setCall} call={call} />
    </section>
  );
}

export default AllProducts;

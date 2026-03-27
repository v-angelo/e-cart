import React from "react";
import { Link } from "react-router-dom";

function NavBar({ itemCount }) {
  return (
    <header className="h-15 bg-emerald-600 sticky top-0 z-10">
      <nav className="mx-auto max-w-5xl px-5 h-full flex justify-between items-center text-2xl font-semibold">
        <Link to={"/"}>E-Cart</Link>
        <Link to={"/cart"} className="">
          <article className="flex justify-between gap-1 items-center">
            <h4>🛒Cart Items</h4>
            <h4 className="text-sm bg-gray-500 text-white px-2 py-1 rounded-lg">
              {itemCount}
            </h4>
          </article>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;

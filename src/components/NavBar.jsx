import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="h-15 bg-emerald-600">
      <nav className="mx-auto max-w-5xl px-5 h-full flex justify-between items-center text-2xl font-semibold">
        <Link to={"/"}>E-Cart</Link>
        <Link to={"/cart"} className="">
          🛒Cart Items
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;

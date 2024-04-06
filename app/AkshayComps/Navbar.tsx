import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="mx-17 flex items-center justify-between">
      <Link href="/"className="flex">
        <img src="logo.png" className="h-11"></img>
        <div className="my-3 font-bold text-lg mx-3">NextCoffee</div>
      </Link>

      <div className="join">
        <Link href="/Account" className="btn join-item bg-white px-10 hover:bg-orange-200">Near You</Link>
        <Link href="/Account" className="btn join-item bg-white px-10 hover:bg-orange-200">Menu</Link>
        <Link href="/Account" className="btn join-item bg-white px-10 hover:bg-orange-200">About Us</Link>
      </div>

      <div>
        <button className="btn bg--900 border-none text-white btn-primary ml-5">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

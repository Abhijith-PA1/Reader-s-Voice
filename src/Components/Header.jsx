import React from "react";
import rV from "../assets/readersvoice.svg"
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar bg-black text-white shadow-sm sm:p-6">
        <Link to={'/'} className="btn bg-black text-white border-black md:text-xl hover:text-yellow-400 shadow-2xl"><img src={rV} className="h-full" alt="" /> Reader’s Voice</Link>
        <div className="flex justify-around w-full">
          <Link to={'/'} className="hover:underline underline-offset-8 hover:text-yellow-400"><i className="fa-regular fa-house sm:fa-lg"></i>Home</Link>
          <Link to={'/booklist'} className="hover:underline underline-offset-8 hover:text-yellow-400"><i className="fa-solid fa-book sm:fa-xl"></i>Book List</Link>
          <Link to={'/login'} className="hover:underline underline-offset-8 hover:text-yellow-400"><i className="fa-regular fa-user sm:fa-xl"></i>Sign in</Link>
        </div>
      </div>
    </>
  );
}

export default Header;

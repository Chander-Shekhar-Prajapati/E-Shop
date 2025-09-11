import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavBar = ({
  handelScroll,
  setSearchTerm,
  isScrolled,
  handelPanel,
  totalItem,
  wishlist,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ body scroll lock/unlock on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="max-w-[1350px] h-[12vh] flex items-center justify-between mx-auto px-6 md:px-12">
        {/* logo */}
        <a href="#" className="flex w-12 h-12 bg-zinc-100 rounded-full p-[5px]">
          <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
        </a>

        {/* Desktop nav actions */}
        <div className=" md:flex items-center gap-x-5">
          {/* search bar */}
          <div className="relative w-52 md:w-80">
            <input
              type="text"
              placeholder="Search item..."
              autoComplete="off"
              className="h-10 pl-4 pr-12 w-full rounded-full border-2 border-blue-600 focus:outline-none"
              onFocus={handelScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
              <IoIosSearch />
            </button>
          </div>

          {/* wishlist */}
          <button
            className="hidden md:block text-[1.7rem] text-zinc-800 relative cursor-pointer"
            onClick={() => handelPanel("wishlist")}
          >
            <GoHeartFill />
            {wishlist.length > 0 && (
              <span className=" flex justify-center items-center bg-red-600 text-white w-5 h-5 text-[12px] rounded-full absolute top-4 right-3 border-2 border-white">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* cart */}
          <button
            className="hidden md:block text-[1.7rem] text-zinc-800 relative cursor-pointer"
            onClick={() => handelPanel("cart")}
          >
            <HiShoppingBag />
            {totalItem > 0 && (
              <span className="flex justify-center items-center bg-red-600 text-white w-5 h-5 text-[12px] rounded-full absolute top-4 right-3 border-2 border-white">
                {totalItem}
              </span>
            )}
          </button>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-2xl text-zinc-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[12vh] bg-white shadow-lg px-6 py-4 flex flex-col gap-4 z-40 overflow-y-auto">
          {/* search */}
          {/* <div className="flex p-1 rounded-full border-2 border-blue-600">
            <input
              type="text"
              placeholder="Search item..."
              autoComplete="off"
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
              onFocus={handelScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 text-white text-xl">
              <IoIosSearch />
            </button>
          </div> */}

          {/* wishlist */}
          <button
            className="flex items-center gap-2 text-lg text-zinc-800 relative cursor-pointer"
            onClick={() => handelPanel("wishlist")}
          >
            <GoHeartFill className="text-2xl" />
            <span>Wishlist</span>
            {wishlist.length > 0 && (
              <span className="ml-auto flex justify-center items-center bg-red-600 text-white w-5 h-5 text-[12px] rounded-full border-2 border-white">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* cart */}
          <button
            className="flex items-center gap-2 text-lg text-zinc-800 relative cursor-pointer"
            onClick={() => handelPanel("cart")}
          >
            <HiShoppingBag className="text-2xl" />
            <span>Cart</span>
            {totalItem > 0 && (
              <span className="ml-auto flex justify-center items-center bg-red-600 text-white w-5 h-5 text-[12px] rounded-full border-2 border-white">
                {totalItem}
              </span>
            )}
          </button>
        </div>
      )}
    </header>
  );
};

export default NavBar;

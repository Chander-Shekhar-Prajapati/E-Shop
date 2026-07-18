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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl"
          : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-[1350px] h-[12vh] mx-auto flex items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <a
          href="#"
          className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100 p-1 shadow"
        >
          <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
        </a>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative w-[340px]">
            <input
              type="text"
              placeholder="Search products..."
              autoComplete="off"
              onFocus={handelScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 rounded-full border-2 border-blue-600 pl-5 pr-14 outline-none transition focus:ring-4 focus:ring-blue-200"
            />

            <button
              aria-label="Search"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition"
            >
              <IoIosSearch size={20} />
            </button>
          </div>

          {/* Wishlist */}
          <button
            onClick={() => handelPanel("wishlist")}
            className="relative text-3xl text-zinc-700 hover:text-red-500 transition"
          >
            <GoHeartFill />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => handelPanel("cart")}
            className="relative text-3xl text-zinc-700 hover:text-blue-600 transition"
          >
            <HiShoppingBag />

            {totalItem > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-white text-[11px] flex items-center justify-center">
                {totalItem}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => handelPanel("wishlist")}
            className="relative text-2xl text-zinc-700"
          >
            <GoHeartFill />

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          <button
            onClick={() => handelPanel("cart")}
            className="relative text-2xl text-zinc-700"
          >
            <HiShoppingBag />

            {totalItem > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-600 text-white text-[9px] flex items-center justify-center">
                {totalItem}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-zinc-700"
          >
            {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "top-[12vh] opacity-100 max-h-[100vh]"
            : "top-[12vh] opacity-0 max-h-0"
        }`}
      >
        <div className="p-5">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              autoComplete="off"
              onFocus={handelScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 rounded-full border-2 border-blue-600 pl-5 pr-14 outline-none"
            />

            <button className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <IoIosSearch />
            </button>
          </div>
          {/* Wishlist */}
          <button
            onClick={() => {
              handelPanel("wishlist");
              closeMenu();
            }}
            className="mt-6 flex items-center justify-between w-full rounded-xl border border-zinc-200 p-4 hover:bg-zinc-100 transition"
          >
            <div className="flex items-center gap-3">
              <GoHeartFill className="text-2xl text-red-500" />
              <span className="font-medium text-zinc-700">Wishlist</span>
            </div>

            {wishlist.length > 0 && (
              <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => {
              handelPanel("cart");
              closeMenu();
            }}
            className="mt-4 flex items-center justify-between w-full rounded-xl border border-zinc-200 p-4 hover:bg-zinc-100 transition"
          >
            <div className="flex items-center gap-3">
              <HiShoppingBag className="text-2xl text-blue-600" />
              <span className="font-medium text-zinc-700">Cart</span>
            </div>

            {totalItem > 0 && (
              <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                {totalItem}
              </span>
            )}
          </button>

          {/* Divider */}
          <div className="my-6 h-px bg-zinc-200" />

          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Close Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

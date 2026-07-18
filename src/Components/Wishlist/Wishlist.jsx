import React from "react";
import { GoHeartFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";

const Wishlist = ({
  activePanel,
  closePanel,
  wishlist,
  addToCart,
  clearWishlist,
}) => {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closePanel}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          activePanel === "wishlist"
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <section
        className={`
        fixed z-50 flex flex-col overflow-hidden
        bg-white/95 backdrop-blur-xl
        border border-white/30
        shadow-[0_20px_60px_rgba(0,0,0,.18)]
        transition-all duration-500

        /* Desktop */
        md:top-0 md:right-0 md:h-screen md:w-[430px]
        md:rounded-l-[32px]
        ${
          activePanel === "wishlist"
            ? "md:translate-x-0"
            : "md:translate-x-full"
        }

        /* Mobile */
        left-0 right-0 bottom-0 h-[88vh]
        rounded-t-[32px]
        ${activePanel === "wishlist" ? "translate-y-0" : "translate-y-full"}
      `}
      >
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                My Wishlist
              </h2>

              <p className="mt-1 text-sm text-white/80">
                {wishlist.length} Item{wishlist.length !== 1 && "s"} Saved
              </p>
            </div>

            <button
              onClick={closePanel}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white transition hover:rotate-90 hover:bg-white hover:text-red-500"
            >
              <IoClose size={24} />
            </button>
          </div>
        </div>

        {/* Wishlist Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-50 to-white p-5 space-y-4">
          {" "}
          {/* Empty State */}
          {wishlist.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-red-100 shadow-lg">
                <GoHeartFill className="text-6xl text-red-500" />
              </div>

              <h3 className="mt-8 text-3xl font-bold text-zinc-800">
                Your Wishlist is Empty
              </h3>

              <p className="mt-3 max-w-xs leading-7 text-zinc-500">
                Save your favorite products here and access them anytime.
              </p>
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative flex items-center justify-center bg-gradient-to-br from-zinc-100 via-white to-pink-50 p-5">
                  <img
                    src={product.Image}
                    alt={product.name}
                    className="h-40 object-contain transition duration-500 group-hover:scale-110"
                  />

                  {/* Added Date */}
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-600 shadow">
                    {product.addDate}
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-bold text-zinc-800">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    Added at {product.addTime}
                  </p>{" "}
                  {/* Price */}
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-zinc-400 line-through">
                        ₹ {product.oldPrice.toFixed(2)}
                      </p>

                      <p className="text-3xl font-bold text-red-500">
                        ₹ {product.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      Saved ₹{(product.oldPrice - product.price).toFixed(2)}
                    </div>
                  </div>
                  {/* Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-6 flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
                  >
                    🛒 Add To Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Footer */}
        <div className="border-t border-zinc-200 bg-white/90 backdrop-blur-xl p-5">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={closePanel}
              className="h-14 rounded-2xl border border-zinc-300 bg-white font-semibold text-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg active:scale-95"
            >
              Close
            </button>

            <button
              onClick={clearWishlist}
              className="h-14 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              Clear Wishlist
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-zinc-400">
            Your saved items will remain here until you remove them.
          </p>
        </div>
      </section>
    </>
  );
};

export default Wishlist;

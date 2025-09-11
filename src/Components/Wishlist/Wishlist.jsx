import React from "react";
import { GoHeartFill } from "react-icons/go";

const Wishlist = ({
  activePanel,
  closePanel,
  wishlist,
  addToCart,
  clearWishlist,
}) => {
  return (
    <div
      className={`
  flex flex-col justify-between gap-5 bg-zinc-100 fixed z-50 border-zinc-300 py-7 
  transform transition-transform duration-300

  /* ✅ Desktop → Right Drawer */
  md:top-0 md:right-0 md:bottom-0 md:left-auto md:w-[400px] md:h-full md:border-l
  ${activePanel === "wishlist" ? "md:translate-x-0" : "md:translate-x-full"}

  /* ✅ Mobile → Bottom Drawer */
  top-auto bottom-0 left-0 right-0 h-[80vh] border-t md:border-0
  ${
    activePanel === "wishlist"
      ? "translate-y-0 md:translate-y-0"
      : "translate-y-full md:translate-y-0"
  }
`}
    >
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 text-center">
          Your Wishlist
        </h3>
      </div>

      {/* card item */}

      <div className="flex-1 flex flex-col gap-2 overflow-y-auto scroll">
        {wishlist.length === 0 ? (
          <div className="flex justify-center items-center gap-2 font-bold ">
            <span className="flex justify-center items-center w-12 h-12">
              <GoHeartFill className="text-[2rem] text-red-600" />
            </span>
            <p>Your Wishlist is Empty...</p>
          </div>
        ) : (
          wishlist.map((product, inx) => {
            return (
              <div
                className={`flex items-center gap-3 px-3 py-1 border-y-1 border-zinc-300 ${
                  inx % 2 === 0 ? "bg-white" : "bg-blue-100"
                }`}
                key={product.id}
              >
                <div className="w-20 h-20  rounded-[.4rem]">
                  {/* card image */}
                  <img
                    src={product.Image}
                    alt="cloth"
                    className="w-full h-full object-contain "
                  />
                </div>

                {/* product detail */}

                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-zinc-800 text-lg">
                      {product.name}
                    </h4>
                    <div className="m-0">
                      <span className="text-[10px]">{product.addDate}</span>
                      <br />
                      <span className="text-[10px]">{product.addTime}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mt-2">
                    <div className="flex flex-col">
                      <span className="line-through text-[.8rem]">
                        ₹ {product.oldPrice.toFixed(2)}
                      </span>
                      <span className="text-red-500 text-xl font-bold">
                        ₹ {product.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      className="bg-blue-600 text-white text-sm p-1.5 rounded-full px-5 active:bg-blue-700 cursor-pointer"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* button */}
      <div className="flex gap-x-2">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] rounded-full mx-1 cursor-pointer active:bg-blue-700"
          onClick={closePanel}
        >
          Close
        </button>
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] rounded-full mx-1 cursor-pointer active:bg-blue-700"
          onClick={clearWishlist}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Wishlist;

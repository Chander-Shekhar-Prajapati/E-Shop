import React from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Cart = ({
  activePanel,
  closePanel,
  cart,
  removeItem,
  QuantityIncrement,
  QuantityDisIncrement,
  subTotal,
  shippingFee,
  orderTotal,
  setOrderSummary,
}) => {
  const isOpen = activePanel === "cart";

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closePanel}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`
        fixed z-50 bg-white shadow-2xl
        flex flex-col
        transition-all duration-500 ease-in-out

        /* Desktop */
        md:top-0 md:right-0 md:h-screen md:w-[430px]
        ${isOpen ? "md:translate-x-0" : "md:translate-x-full"}

        /* Mobile */
        left-0 right-0 bottom-0
        h-[88vh]
        rounded-t-[28px]
        ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        {/* Drag Handle (Mobile) */}
        <div className="md:hidden flex justify-center pt-3">
          <div className="w-14 h-1.5 rounded-full bg-zinc-300"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200">
          <div>
            <h2 className="text-2xl font-bold text-zinc-800">Shopping Cart</h2>

            <p className="text-sm text-zinc-500 mt-1">
              {cart.length} Item
              {cart.length !== 1 && "s"} in your cart
            </p>
          </div>

          <button
            onClick={closePanel}
            className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                <FaShoppingCart className="text-5xl text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold mt-6">Your Cart is Empty</h3>

              <p className="text-zinc-500 mt-2">
                Looks like you haven't added anything yet.
              </p>
            </div>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className="group flex gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image */}
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-zinc-100 flex-shrink-0">
                  <img
                    src={product.Image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-zinc-800 line-clamp-2">
                        {product.name}
                      </h4>

                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-red-600 font-bold text-lg">
                          ₹{(product.price * product.quantity).toFixed(2)}
                        </span>

                        <span className="text-sm text-zinc-400 line-through">
                          ₹{product.oldPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Delete */}
                    <button
                      onClick={() => removeItem(product)}
                      className="w-9 h-9 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition flex items-center justify-center"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center rounded-full border border-zinc-300 overflow-hidden">
                      <button
                        onClick={() => QuantityDisIncrement(product)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-zinc-100 transition"
                      >
                        <FaMinus size={12} />
                      </button>

                      <span className="w-10 text-center font-semibold">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() => QuantityIncrement(product)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-zinc-100 transition"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>

                    <span className="text-sm text-zinc-500">
                      ₹{product.price.toFixed(2)} / item
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Footer / Order Summary */}
        <div className="border-t border-zinc-200 bg-white p-5 shadow-[0_-6px_20px_rgba(0,0,0,0.06)]">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-zinc-600">
              <span>Subtotal</span>
              <span className="font-medium">₹ {subTotal.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between text-zinc-600">
              <span>Shipping</span>
              <span className="font-medium">₹ {shippingFee.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between border-t pt-3">
              <span className="text-lg font-bold text-zinc-800">Total</span>

              <span className="text-2xl font-bold text-blue-600">
                ₹ {orderTotal.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={closePanel}
              className="h-12 rounded-xl border border-zinc-300 font-semibold text-zinc-700 hover:bg-zinc-100 transition"
            >
              Continue Shopping
            </button>

            <button
              disabled={cart.length === 0}
              onClick={() => {
                closePanel();
                setOrderSummary(true);
              }}
              className={`h-12 rounded-xl font-semibold text-white transition ${
                cart.length === 0
                  ? "bg-zinc-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Cart;

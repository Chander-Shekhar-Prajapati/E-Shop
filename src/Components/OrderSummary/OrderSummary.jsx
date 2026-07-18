import React from "react";
import { IoClose } from "react-icons/io5";
import { FaClipboardCheck } from "react-icons/fa";

const OrderSummary = ({
  cart,
  subTotal,
  orderTotal,
  shippingFee,
  setOrderPlace,
  setOrderSummary,
  setCart,
}) => {
  const handelPlaceOrder = () => {
    setOrderSummary(false);
    setOrderPlace(true);
    setCart([]);
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      {/* Modal */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden animate-[popup_.35s_ease]">
        {/* Top Gradient */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>

        {/* Close Button */}
        <button
          onClick={() => setOrderSummary(false)}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 transition hover:bg-red-500 hover:text-white"
        >
          <IoClose size={22} />
        </button>

        {/* Header */}
        <div className="px-8 pt-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <FaClipboardCheck className="text-5xl text-blue-600" />
          </div>

          <h2 className="mt-5 text-3xl font-bold text-zinc-800">
            Order Summary
          </h2>

          <p className="mt-2 text-zinc-500">
            Please review your order before placing it.
          </p>
        </div>

        {/* Product List */}
        <div className="mt-8 max-h-[320px] overflow-y-auto px-6 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-4 hover:shadow-md transition"
            >
              <div>
                <h4 className="font-semibold text-zinc-800">{item.name}</h4>

                <p className="mt-1 text-sm text-zinc-500">
                  Quantity : {item.quantity}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-blue-600">
                  ₹ {(item.price * item.quantity).toFixed(2)}
                </p>

                <p className="text-sm text-zinc-500">
                  ₹ {item.price.toFixed(2)} / item
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Bill Summary */}
        <div className="px-6 mt-6">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex items-center justify-between py-2">
              <span className="text-zinc-600">Subtotal</span>

              <span className="font-semibold text-zinc-800">
                ₹ {subTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-zinc-600">Shipping & Handling</span>

              <span className="font-semibold text-zinc-800">
                ₹ {shippingFee.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span className="text-zinc-600">GST</span>

              <span className="font-semibold text-green-600">Included</span>
            </div>

            <div className="my-4 border-t border-dashed border-zinc-300"></div>

            {/* Total */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100">Total Amount</p>

                  <h3 className="mt-1 text-3xl font-bold">
                    ₹ {orderTotal.toFixed(2)}
                  </h3>
                </div>

                <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                  Secure Payment
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="mt-8 flex flex-col-reverse gap-3 px-6 pb-8 sm:flex-row">
          <button
            onClick={() => setOrderSummary(false)}
            className="flex-1 rounded-xl border border-zinc-300 py-3 font-semibold text-zinc-700 transition-all duration-300 hover:bg-zinc-100 hover:border-zinc-400 active:scale-95"
          >
            Cancel
          </button>

          <button
            onClick={handelPlaceOrder}
            className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-95"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Popup Animation */}
      <style>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.9);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default OrderSummary;

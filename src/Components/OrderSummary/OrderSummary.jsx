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
    <section className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-3 backdrop-blur-md sm:p-5 mt-6">
      {/* Modal */}
      <div className="relative flex max-h-[95vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.25)] animate-[popup_.35s_ease]">
        {/* Top Gradient */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

        {/* Close Button */}
        <button
          onClick={() => setOrderSummary(false)}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition-all duration-300 hover:bg-red-500 hover:text-white active:scale-95"
        >
          <IoClose size={22} />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Header */}
          <div className="px-5 pt-7 text-center sm:px-8 sm:pt-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 shadow-lg sm:h-20 sm:w-20">
              <FaClipboardCheck className="text-4xl text-blue-600 sm:text-5xl" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-zinc-800 sm:text-3xl">
              Order Summary
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500 sm:text-base">
              Please review all your selected items carefully before placing
              your order.
            </p>
          </div>

          {/* Product List */}
          <div className="mt-6 space-y-4 px-4 sm:mt-8 sm:px-6">
            <div className="max-h-[250px] space-y-4 overflow-y-auto pr-1 sm:max-h-[320px]">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Product Details */}
                    <div className="min-w-0 flex-1">
                      <h4 className="truncate text-base font-semibold text-zinc-800 sm:text-lg">
                        {item.name}
                      </h4>

                      <p className="mt-2 text-sm text-zinc-500">
                        Quantity :{" "}
                        <span className="font-semibold text-zinc-700">
                          {item.quantity}
                        </span>
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-left sm:text-right">
                      <p className="text-xl font-bold text-blue-600">
                        ₹ {(item.price * item.quantity).toFixed(2)}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        ₹ {item.price.toFixed(2)} / item
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bill Summary */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-zinc-600 sm:text-base">
                  Subtotal
                </span>

                <span className="font-semibold text-zinc-800">
                  ₹ {subTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-zinc-600 sm:text-base">
                  Shipping & Handling
                </span>

                <span className="font-semibold text-zinc-800">
                  ₹ {shippingFee.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-zinc-600 sm:text-base">GST</span>

                <span className="font-semibold text-green-600">Included</span>
              </div>

              <div className="my-5 border-t border-dashed border-zinc-300"></div>

              {/* Total */}
              <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-5 text-white shadow-xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-blue-100">Total Amount</p>

                    <h3 className="mt-1 text-2xl font-bold sm:text-3xl">
                      ₹ {orderTotal.toFixed(2)}
                    </h3>
                  </div>

                  <div className="w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
                    Secure Payment
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3 px-4 pb-6 sm:mt-8 sm:flex-row sm:px-6 sm:pb-8">
            <button
              onClick={() => setOrderSummary(false)}
              className="w-full rounded-xl border border-zinc-300 bg-white py-3 font-semibold text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-100 active:scale-95 sm:flex-1"
            >
              Cancel
            </button>

            <button
              onClick={handelPlaceOrder}
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95 sm:flex-1"
            >
              Place Order
            </button>
          </div>
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

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default OrderSummary;

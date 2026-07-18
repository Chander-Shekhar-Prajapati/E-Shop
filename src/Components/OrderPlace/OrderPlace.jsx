import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const OrderPlace = ({ setOrderPlace }) => {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-md">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/20 blur-3xl"></div>
        <div className="absolute left-1/3 top-1/3 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      {/* Modal */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] animate-[popup_.4s_ease]">
        {/* Premium Gradient */}
        <div className="h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-600"></div>

        {/* Close Button */}
        <button
          onClick={() => setOrderPlace(false)}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-all duration-300 hover:rotate-90 hover:bg-red-500 hover:text-white"
        >
          <IoClose size={22} />
        </button>

        <div className="px-8 py-10 text-center">
          {/* Success Icon */}
          <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-green-100 to-emerald-200 shadow-lg">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-green-400/30 blur-xl"></div>

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <FaCheckCircle className="text-6xl text-green-600" />
            </div>
          </div>

          {/* Badge */}
          <div className="mt-6 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            ✓ Payment Successful
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-zinc-900">
            Order Confirmed!
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-md leading-8 text-zinc-500">
            Thank you for shopping with
            <span className="font-semibold text-zinc-800"> E-Shop</span>. Your
            order has been placed successfully and is now being prepared for
            shipment.
          </p>

          {/* Order Info Card */}
          <div className="mt-10 space-y-4 rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 p-6 shadow-sm">
            {" "}
            <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm">
              <span className="font-medium text-zinc-500">Order Status</span>

              <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                Confirmed
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm">
              <span className="font-medium text-zinc-500">
                Estimated Delivery
              </span>

              <span className="font-semibold text-zinc-800">
                3 – 5 Business Days
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 shadow-sm">
              <span className="font-medium text-zinc-500">Payment Status</span>

              <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                Successful
              </span>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              onClick={() => setOrderPlace(false)}
              className="group h-14 rounded-2xl border border-zinc-300 bg-white font-semibold text-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg"
            >
              <span className="transition group-hover:tracking-wide">
                Continue Shopping
              </span>
            </button>

            <button
              onClick={() => setOrderPlace(false)}
              className="group h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              <span className="transition group-hover:tracking-wide">
                View Orders
              </span>
            </button>
          </div>

          {/* Footer */}
          <p className="mt-8 text-sm text-zinc-400">
            Need help? Contact our support team anytime.
          </p>
        </div>
      </div>

      {/* Popup Animation */}
      <style>{`
        @keyframes popup {
          0% {
            opacity: 0;
            transform: scale(.85) translateY(30px);
          }

          60% {
            transform: scale(1.03) translateY(-6px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default OrderPlace;

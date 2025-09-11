import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderPlace = ({ setOrderPlace }) => {
  return (
    <section className="flex justify-center items-center bg-black/95 fixed inset-0 z-51">
      <div className="bg-zinc-100 p-4 w-[600px] rounded-lg border-1 border-zinc-300 ">
        <div className="flex gap-4 items-center">
          <FaCheckCircle className="text-5xl text-green-600 font-bold " />
          <h2 className="text-3xl text-green-600 font-bold ">Order Place</h2>
        </div>
        <p className="text-zinc-800 my-4">Thanks For Purchase Product!</p>
        <button
          className="px-9 py-3 bg-blue-600 active:bg-blue-700 text-white rounded-full"
          onClick={() => setOrderPlace(false)}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default OrderPlace;

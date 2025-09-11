import React from "react";

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
    <section className="flex justify-center items-center bg-black/95 fixed inset-0 z-51">
      <div className="bg-zinc-100 p-8 w-[600px] rounded-lg border-1 border-zinc-300 ">
        <h2 className="text-3xl text-zinc-800 font-bold mb-5 text-center">
          Order Summary
        </h2>
        <div>
          <div>
            <div>
              {cart.map((item) => (
                <div
                  className="flex justify-between items-center z-52"
                  key={item.id}
                >
                  <span className="text-zinc-800 py-2">
                    {item.name} (x{item.quantity})
                  </span>

                  <span className="text-zinc-800 py-2">
                    {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-zinc-800 text-lg">SubTotal</span>
            <span className="text-zinc-800 ">₹ {subTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span className="text-zinc-800 text-lg">Shipping & Handling</span>
            <span className="text-zinc-800">₹ {shippingFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-2 bg-red-400 px-2 rounded-[.5rem]">
            <span className="text-blue-800 font-bold text-lg py-2">
              Total Amount
            </span>
            <span className="text-blue-800 font-bold py-2">
              ₹ {orderTotal.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex gap-3 mt-5 ">
          <button
            className={`bg-blue-500 flex-1 py-3 active:bg-blue-700 rounded-full text-[.9rem] font-bold cursor-pointer`}
            onClick={() => {
              setOrderSummary(false);
            }}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 flex-1 py-3 active:bg-blue-700 rounded-full text-[.9rem] font-bold "
            onClick={handelPlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;

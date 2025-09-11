// import React from "react";
// import { FaMinus, FaPlus, FaShoppingCart, FaTrash } from "react-icons/fa";

// const Cart = ({
//   activePanel,
//   closePanel,
//   cart,
//   removeItem,
//   QuantityIncrement,
//   QuantityDisIncrement,
//   subTotal,
//   shippingFee,
//   orderTotal,
//   setOrderSummary,
// }) => {
//   return (
//     <div
//       className={` flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 left-auto w-[400px] z-51 border-l border-zinc-300 py-7 transform transition-transform duration-300 ${
//         activePanel === "cart" ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div className="px-10">
//         <h3 className="text-3xl font-bold text-zinc-800 text-center">
//           Your Card
//         </h3>
//       </div>

//       {/* card item */}
//       <div className="flex-1 flex-col gap-2 overflow-y-auto scroll">
//         {cart.length === 0 ? (
//           <div className="flex justify-center items-center gap-2 font-bold ">
//             <span className="flex justify-center items-center w-12 h-12">
//               <FaShoppingCart className="text-[2rem]" />
//             </span>
//             <p>Your Cart is Empty...</p>
//           </div>
//         ) : (
//           cart.map((product, inx) => {
//             return (
//               <div
//                 className={`flex items-center gap-3 px-3 py-1 border-y-1 border-zinc-300 ${
//                   inx % 2 === 0 ? "bg-white" : "bg-blue-100"
//                 }`}
//                 key={product.id}
//               >
//                 <div className="w-20 h-20  rounded-[.4rem]">
//                   {/* card image */}
//                   <img
//                     src={product.Image}
//                     alt="cloth"
//                     className="w-full h-full object-contain "
//                   />
//                 </div>

//                 {/* product detail */}

//                 <div className="flex-1">
//                   <div className="flex justify-between">
//                     <h4 className="font-semibold text-zinc-800 text-lg">
//                       {product.name}
//                     </h4>
//                     <button
//                       className="flex w-8 h-8 rounded-full text-white bg-red-600 justify-center items-center active:bg-red-700 mr-7"
//                       onClick={() => removeItem(product)}
//                     >
//                       <FaTrash />
//                     </button>
//                   </div>

//                   <div className="flex justify-between mt-2">
//                     <div className="flex gap-4">
//                       <span className="line-through text-[.8rem]">
//                         ₹{product.oldPrice.toFixed(2)}
//                       </span>{" "}
//                       <span className="font-bold text-red-700">
//                         ₹{(product.price * product.quantity).toFixed(2)}
//                       </span>
//                     </div>

//                     <div className="flex gap-2">
//                       <button
//                         className="flex w-8 h-8 rounded-full text-white bg-blue-600 justify-center items-center text-[.7rem] cursor-pointer active:bg-blue-700"
//                         onClick={() => QuantityDisIncrement(product)}
//                       >
//                         <FaMinus />
//                       </button>
//                       <span className="text-xl">{product.quantity}</span>
//                       <button
//                         className="flex w-8 h-8 rounded-full text-white bg-blue-600 justify-center items-center text-[.7rem] cursor-pointer active:bg-blue-700"
//                         onClick={() => QuantityIncrement(product)}
//                       >
//                         <FaPlus />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>

//       {/* card total */}
//       <div className="px-10 border-y border-zinc-300 ">
//         <div className="flex justify-between mt-1">
//           <span className=" text-zinc-800">Sub Total</span>
//           <span className=" text-zinc-800">₹ {subTotal.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between mt-1">
//           <span className=" text-zinc-800">Shipping & Handlings</span>
//           <span className=" text-zinc-800">₹ {shippingFee.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between mt-1 border-t border-zinc-300">
//           <span className="text-lg text-blue-600 font-bold">Order Total</span>
//           <span className="text-lg text-blue-600 font-bold">
//             ₹ {orderTotal.toFixed(2)}
//           </span>
//         </div>
//       </div>

//       {/* button */}
//       <div className="flex gap-x-2">
//         <button
//           className={`bg-blue-600 text-white flex-1 h-[7vh] rounded-full mx-1 cursor-pointer active:bg-blue-700 `}
//           onClick={closePanel}
//         >
//           Close
//         </button>
//         <button
//           className={` text-white flex-1 h-[7vh] rounded-full mx-1  ${
//             cart.length === 0
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 cursor-pointer active:bg-blue-700"
//           }`}
//           disabled={cart.length === 0}
//           onClick={() => setOrderSummary(true)}
//         >
//           CheckOut
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaTrash } from "react-icons/fa";

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
  return (
    <div
      className={`
  flex flex-col justify-between gap-5 bg-zinc-100 fixed z-50 border-zinc-300 py-7 
  transform transition-transform duration-300

  /* ✅ Desktop → Right Drawer */
  md:top-0 md:right-0 md:bottom-0 md:left-auto md:w-[400px] md:h-full md:border-l
  ${activePanel === "cart" ? "md:translate-x-0" : "md:translate-x-full"}

  /* ✅ Mobile → Bottom Drawer */
  top-auto bottom-0 left-0 right-0 h-[80vh] border-t md:border-0
  ${
    activePanel === "cart"
      ? "translate-y-0 md:translate-y-0"
      : "translate-y-full md:translate-y-0"
  }
`}
    >
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 text-center">
          Your Cart
        </h3>
      </div>

      {/* card item */}
      <div className="flex-1 flex-col gap-2 overflow-y-auto scroll px-3">
        {cart.length === 0 ? (
          <div className="flex justify-center items-center gap-2 font-bold">
            <span className="flex justify-center items-center w-12 h-12">
              <FaShoppingCart className="text-[2rem]" />
            </span>
            <p>Your Cart is Empty...</p>
          </div>
        ) : (
          cart.map((product, inx) => (
            <div
              className={`flex items-center gap-3 px-3 py-1 border-y-1 border-zinc-300 ${
                inx % 2 === 0 ? "bg-white" : "bg-blue-100"
              }`}
              key={product.id}
            >
              <div className="w-20 h-20 rounded-[.4rem]">
                <img
                  src={product.Image}
                  alt="cloth"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-zinc-800 text-lg">
                    {product.name}
                  </h4>
                  <button
                    className="flex w-8 h-8 rounded-full text-white bg-red-600 justify-center items-center active:bg-red-700 mr-3"
                    onClick={() => removeItem(product)}
                  >
                    <FaTrash />
                  </button>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex gap-4">
                    <span className="line-through text-[.8rem]">
                      ₹{product.oldPrice.toFixed(2)}
                    </span>
                    <span className="font-bold text-red-700">
                      ₹{(product.price * product.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="flex w-8 h-8 rounded-full text-white bg-blue-600 justify-center items-center text-[.7rem] cursor-pointer active:bg-blue-700"
                      onClick={() => QuantityDisIncrement(product)}
                    >
                      <FaMinus />
                    </button>
                    <span className="text-xl">{product.quantity}</span>
                    <button
                      className="flex w-8 h-8 rounded-full text-white bg-blue-600 justify-center items-center text-[.7rem] cursor-pointer active:bg-blue-700"
                      onClick={() => QuantityIncrement(product)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* card total */}
      <div className="px-10 border-y border-zinc-300">
        <div className="flex justify-between mt-1">
          <span className="text-zinc-800">Sub Total</span>
          <span className="text-zinc-800">₹ {subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-zinc-800">Shipping & Handlings</span>
          <span className="text-zinc-800">₹ {shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-1 border-t border-zinc-300">
          <span className="text-lg text-blue-600 font-bold">Order Total</span>
          <span className="text-lg text-blue-600 font-bold">
            ₹ {orderTotal.toFixed(2)}
          </span>
        </div>
      </div>

      {/* button */}
      <div className="flex gap-x-2 px-3">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] rounded-full mx-1 cursor-pointer active:bg-blue-700"
          onClick={closePanel}
        >
          Close
        </button>
        <button
          className={`text-white flex-1 h-[7vh] rounded-full mx-1 ${
            cart.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 cursor-pointer active:bg-blue-700"
          }`}
          disabled={cart.length === 0}
          onClick={() => setOrderSummary(true)}
        >
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;

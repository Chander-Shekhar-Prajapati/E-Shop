// import React, { useState } from "react";
// import ProductsLists from "./ProductsList";
// import { GoHeartFill } from "react-icons/go";

// const Products = ({ searchTerm, addToCart, AddToWishlist, wishlist }) => {
//   const categories = [
//     "All",
//     "Mens",
//     "Women",
//     "Kids",
//     "New Arrivals",
//     "On Sale",
//   ];

//   const [activeTab, setActiveTab] = useState("All");

//   const filteredItem = ProductsLists.filter((item) => {
//     const result = activeTab === "All" || activeTab === item.cate;

//     const matchesSearch = item.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     return result && matchesSearch;
//   });

//   const renderProducts = filteredItem.map((product) => {
//     return (
//       <div className="bg-zinc-100 rounded-[.4rem] mt-5 p-3" key={product.id}>
//         <div className="flex justify-between">
//           <button
//             className={`text-3xl cursor-pointer ${
//               wishlist.some((item) => item.id === product.id)
//                 ? "text-red-600"
//                 : "text-zinc-700"
//             }`}
//             onClick={() => AddToWishlist(product)}
//           >
//             <GoHeartFill />
//           </button>

//           <div>
//             {
//               <span
//                 className={`px-3 py-1 rounded-[.5rem] ${
//                   product.onSale
//                     ? "bg-red-600"
//                     : product.NewArrival
//                     ? "bg-green-600"
//                     : "bg-pink-500"
//                 }`}
//               >
//                 {product.onSale ? "Sale" : product.NewArrival ? "New" : "Old"}
//               </span>
//             }
//           </div>
//         </div>

//         {/* image */}
//         <div className="bg-red-100 w-full h-[30vh] mt-5 rounded-lg  m-auto">
//           <img
//             src={product.Image}
//             alt="Product image"
//             className="w-full h-full object-contain"
//           />
//         </div>

//         <div className="text-center p-2">
//           <h3 className="text-lg font-bold">{product.name}</h3>
//           <div className="flex justify-around">
//             <span className="line-through text-[.8rem]">
//               ₹{product.oldPrice.toFixed(2)}
//             </span>{" "}
//             <span className="font-bold text-red-700">
//               ₹{product.price.toFixed(2)}
//             </span>
//           </div>
//           <button
//             className="bg-blue-600 text-white text-lg py-2 w-full mt-3 rounded-full cursor-pointer active:bg-blue-700"
//             onClick={() => addToCart(product)}
//           >
//             Add to cart
//           </button>
//         </div>
//       </div>
//     );
//   });

//   return (
//     <section
//       id="product-section"
//       className="max-w-[1350px] mx-auto px-12 py-12 "
//     >
//       <div className="flex gap-2 justify-center items-center  mt-8">
//         {categories.map((cate) => {
//           return (
//             <button
//               key={cate}
//               className={`px-8 py-2 rounded-full text-lg cursor-pointer
//                 ${
//                   activeTab === cate
//                     ? "bg-blue-500 text-white"
//                     : "bg-zinc-100 text-zinc-800"
//                 }`}
//               onClick={() => setActiveTab(cate)}
//             >
//               {cate}
//             </button>
//           );
//         })}
//       </div>

//       {/* ProductsListing */}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
//         {filteredItem.length === 0 ? (
//           <p className="w-[80vw] text-center p-10 mt-2 text-[1.4rem]">
//             Oops! No Products Found...{" "}
//           </p>
//         ) : (
//           renderProducts
//         )}
//       </div>
//     </section>
//   );
// };

// export default Products;

import React, { useState } from "react";
import ProductsLists from "./ProductsList";
import { GoHeartFill } from "react-icons/go";

const Products = ({ searchTerm, addToCart, AddToWishlist, wishlist }) => {
  const categories = [
    "All",
    "Mens",
    "Women",
    "Kids",
    "New Arrivals",
    "On Sale",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredItem = ProductsLists.filter((item) => {
    const result = activeTab === "All" || activeTab === item.cate;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return result && matchesSearch;
  });

  const renderProducts = filteredItem.map((product) => {
    return (
      <div className="bg-zinc-100 rounded-[.4rem] mt-5 p-3" key={product.id}>
        <div className="flex justify-between">
          {/* Wishlist button */}
          <button
            className={`text-3xl cursor-pointer ${
              wishlist.some((item) => item.id === product.id)
                ? "text-red-600"
                : "text-zinc-700"
            }`}
            onClick={() => AddToWishlist(product)}
          >
            <GoHeartFill />
          </button>

          {/* Tag */}
          <div>
            <span
              className={`px-3 py-1 rounded-[.5rem] ${
                product.onSale
                  ? "bg-red-600"
                  : product.NewArrival
                  ? "bg-green-600"
                  : "bg-pink-500"
              }`}
            >
              {product.onSale ? "Sale" : product.NewArrival ? "New" : "Old"}
            </span>
          </div>
        </div>

        {/* Product Image */}
        <div className="bg-red-100 w-full h-[30vh] mt-5 rounded-lg m-auto">
          <img
            src={product.Image}
            alt="Product"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Details */}
        <div className="text-center p-2">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <div className="flex justify-around">
            <span className="line-through text-[.8rem]">
              ₹{product.oldPrice.toFixed(2)}
            </span>
            <span className="font-bold text-red-700">
              ₹{product.price.toFixed(2)}
            </span>
          </div>
          <button
            className="bg-blue-600 text-white text-lg py-2 w-full mt-3 rounded-full cursor-pointer active:bg-blue-700"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <section
      id="product-section"
      className="max-w-[1350px] mx-auto px-4 md:px-12 py-12"
    >
      {/* Categories with scroll on mobile */}
      <div className="flex gap-2 justify-start items-center mt-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((cate) => {
          return (
            <button
              key={cate}
              className={`px-6 py-2 rounded-full text-base md:text-lg cursor-pointer flex-shrink-0
                ${
                  activeTab === cate
                    ? "bg-blue-500 text-white"
                    : "bg-zinc-100 text-zinc-800"
                }`}
              onClick={() => setActiveTab(cate)}
            >
              {cate}
            </button>
          );
        })}
      </div>

      {/* Products Listing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-6">
        {filteredItem.length === 0 ? (
          <p className="w-[80vw] text-center p-10 mt-2 text-[1.4rem]">
            Oops! No Products Found...
          </p>
        ) : (
          renderProducts
        )}
      </div>
    </section>
  );
};

export default Products;

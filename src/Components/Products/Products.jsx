import React, { useMemo, useState } from "react";
import ProductsLists from "./ProductsList";
import {
  GoHeart,
  GoHeartFill,
} from "react-icons/go";
import {
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

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

  /* Filter Products */
  const filteredProducts = useMemo(() => {
    return ProductsLists.filter((item) => {
      const categoryMatch = activeTab === "All" || item.cate === activeTab;

      const searchMatch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeTab, searchTerm]);

  /* Wishlist Check */
  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  /* Discount Percentage */
  const getDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };
  /* Product Card */
  const renderProducts = filteredProducts.map((product) => (
    <div
      key={product.id}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 h-72 flex items-center justify-center">
        {/* Discount Badge */}
        <span className="absolute left-4 top-4 z-20 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
          {getDiscount(product.oldPrice, product.price)}% OFF
        </span>

        {/* Wishlist */}
        <button
          onClick={() => AddToWishlist(product)}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
        >
          {isWishlisted(product.id) ? (
            <GoHeartFill className="text-2xl text-red-500" />
          ) : (
            <GoHeart className="text-2xl text-zinc-600" />
          )}
        </button>

        <img
          src={product.Image}
          alt={product.name}
          className="h-56 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
          {product.cate}
        </span>

        <h3 className="mt-4 line-clamp-2 text-lg font-bold text-zinc-800">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar key={star} className="text-sm text-yellow-400" />
          ))}

          <span className="ml-2 text-sm text-zinc-500">4.8</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price.toFixed(2)}
          </span>

          <span className="text-sm text-zinc-400 line-through">
            ₹{product.oldPrice.toFixed(2)}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  ));
  return (
    <section
      id="product-section"
      className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 lg:px-12"
    >
      {/* Heading */}
      <div className="mb-12 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          Our Collection
        </span>

        <h2 className="mt-5 text-4xl font-bold text-zinc-900">
          Featured Products
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-500">
          Explore our latest fashion collection with premium quality and
          exclusive discounts.
        </p>
      </div>

      {/* Categories */}

      <div className="mb-10 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cate) => (
          <button
            key={cate}
            onClick={() => setActiveTab(cate)}
            className={`whitespace-nowrap rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
              activeTab === cate
                ? "bg-blue-600 text-white shadow-lg"
                : "border border-zinc-200 bg-white text-zinc-700 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {cate}
          </button>
        ))}
      </div>

      {/* Products Grid */}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 && renderProducts}
      </div>
      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 py-20">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">
            🔍
          </div>

          <h3 className="mt-6 text-3xl font-bold text-zinc-800">
            No Products Found
          </h3>

          <p className="mt-3 max-w-md text-center leading-7 text-zinc-500">
            We couldn't find any products matching your search. Try another
            keyword or choose a different category.
          </p>

          <button
            onClick={() => setActiveTab("All")}
            className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Products
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;
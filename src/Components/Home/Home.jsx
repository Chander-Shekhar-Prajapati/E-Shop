import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlace from "./../OrderPlace/OrderPlace";
import Footer from "../Footer/footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [cart, setCart] = useState(() => {
    const storeCart = localStorage.getItem("cart");
    return storeCart ? JSON.parse(storeCart) : [];
  });
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
    const storeCart = localStorage.getItem("wishlist");
    return storeCart ? JSON.parse(storeCart) : [];
  });

  //Total calculations
  const subTotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  // totalItem
  const totalItem = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // shippingFee
  const shippingFee = totalItem * 2;

  // totalAmount
  const orderTotal = shippingFee + subTotal;

  useEffect(() => {
    const changeNavBar = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", changeNavBar);
  }, []);

  // save item to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  // handel Scroll
  const handelScroll = () => {
    const section = document.getElementById("product-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // cart and wishlist ShowTab function

  const handelPanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };

  // cart and wishlist HideTab function

  const closePanel = () => {
    setActivePanel(null);
  };

  // removeItem
  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // QuantityIncrement

  const QuantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // quantityDisIncrement

  const QuantityDisIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Add to card function

  const addToCart = (product) => {
    const alreadyAdd = cart.find((item) => item.id === product.id);

    if (alreadyAdd) {
      alert("Item Already Added in Cart");
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // wishlist
  const AddToWishlist = (product) => {
    const alreadyAdd = wishlist.find((item) => item.id === product.id);

    if (alreadyAdd) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      const addDate = new Date().toLocaleDateString();
      const addTime = new Date().toLocaleTimeString();
      setWishlist([...wishlist, { ...product, addDate, addTime }]);
    }
  };

  // clear wishlist
  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <>
      <NavBar
        handelScroll={handelScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handelPanel={handelPanel}
        totalItem={totalItem}
        wishlist={wishlist}
      />
      <Banner />
      <Products
        searchTerm={searchTerm}
        addToCart={addToCart}
        AddToWishlist={AddToWishlist}
        wishlist={wishlist}
      />

      <Cart
        activePanel={activePanel}
        closePanel={closePanel}
        cart={cart}
        removeItem={removeItem}
        QuantityIncrement={QuantityIncrement}
        QuantityDisIncrement={QuantityDisIncrement}
        subTotal={subTotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />

      <Wishlist
        activePanel={activePanel}
        closePanel={closePanel}
        wishlist={wishlist}
        addToCart={addToCart}
        cart={cart}
        clearWishlist={clearWishlist}
      />

      {orderSummary && (
        <OrderSummary
          cart={cart}
          subTotal={subTotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderPlace={setOrderPlaced}
          setOrderSummary={setOrderSummary}
          setCart={setCart}
        />
      )}

      {/* OrderPlace */}

      {orderPlaced && <OrderPlace setOrderPlace={setOrderPlaced} />}

      <Footer />
    </>
  );
};

export default Home;

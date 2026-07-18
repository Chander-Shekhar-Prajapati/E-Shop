import React, { useState, useEffect, useMemo, useCallback } from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderPlace from "../OrderPlace/OrderPlace";
import Footer from "../Footer/footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  /* ---------------- Scroll Effect ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- LocalStorage ---------------- */

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  /* ---------------- Calculations ---------------- */

  const subTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const totalItem = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const shippingFee = useMemo(() => {
    return totalItem * 2;
  }, [totalItem]);

  const orderTotal = useMemo(() => {
    return subTotal + shippingFee;
  }, [subTotal, shippingFee]);

  /* ---------------- Scroll To Products ---------------- */

  const handelScroll = useCallback(() => {
    document
      .getElementById("product-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ---------------- Panels ---------------- */

  const handelPanel = useCallback((panel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  }, []);

  const closePanel = useCallback(() => {
    setActivePanel(null);
  }, []);

  /* ---------------- Cart ---------------- */

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);

      if (exist) {
        alert("Item already added to cart.");
        return prevCart;
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  }, []);

  const QuantityIncrement = useCallback((product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }, []);

  const QuantityDisIncrement = useCallback((product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  }, []);

  /* ---------------- Wishlist ---------------- */

  const AddToWishlist = useCallback((product) => {
    setWishlist((prevWishlist) => {
      const exist = prevWishlist.find((item) => item.id === product.id);

      if (exist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }

      return [
        ...prevWishlist,
        {
          ...product,
          addDate: new Date().toLocaleDateString(),
          addTime: new Date().toLocaleTimeString(),
        },
      ];
    });
  }, []);

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);
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

      {orderPlaced && <OrderPlace setOrderPlace={setOrderPlaced} />}

      <Footer />
    </>
  );
};

export default Home;

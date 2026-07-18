import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaGooglePay,
} from "react-icons/fa";

const Footer = () => {
  const nav = {
    shop: [
      { label: "Men", href: "#" },
      { label: "Women", href: "#" },
      { label: "Kids", href: "#" },
      { label: "New Arrivals", href: "#" },
      { label: "Best Sellers", href: "#" },
    ],

    help: [
      { label: "Orders", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Payment", href: "#" },
      { label: "FAQ", href: "#" },
    ],

    company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    alert(`🎉 Thanks for subscribing!\n${email}`);

    e.target.reset();
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-zinc-950 text-white mt-20">
      {/* Top Gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-red-500"></div>

      <div className="max-w-[1350px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl font-bold shadow-lg">
                E
              </div>

              <div>
                <h2 className="text-3xl font-bold">E-Shop</h2>

                <p className="text-zinc-400 text-sm">Premium Fashion Store</p>
              </div>
            </div>

            <p className="mt-6 text-zinc-400 leading-7">
              Discover premium fashion with unbeatable quality and prices. Shop
              confidently with secure payments, fast delivery and exclusive
              discounts every week.
            </p>

            {/* Newsletter */}

            <form onSubmit={handleSubscribe} className="mt-8">
              <h3 className="font-semibold text-lg mb-3">
                Subscribe Newsletter
              </h3>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 rounded-xl bg-zinc-900 border border-zinc-700 px-4 outline-none focus:border-blue-500"
                />

                <button className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2">
                  <Mail size={18} />
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <button
                  key={index}
                  className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-blue-600 transition flex items-center justify-center"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>
          {/* Footer Links */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Shop */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Shop
                <span className="absolute left-0 -bottom-2 w-10 h-1 rounded-full bg-blue-600"></span>
              </h3>

              <ul className="space-y-4 mt-6">
                {nav.shop.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-zinc-400 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 inline-flex"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Help
                <span className="absolute left-0 -bottom-2 w-10 h-1 rounded-full bg-blue-600"></span>
              </h3>

              <ul className="space-y-4 mt-6">
                {nav.help.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-zinc-400 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 inline-flex"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold mb-5 relative inline-block">
                Company
                <span className="absolute left-0 -bottom-2 w-10 h-1 rounded-full bg-blue-600"></span>
              </h3>

              <ul className="space-y-4 mt-6">
                {nav.company.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-zinc-400 hover:text-blue-500 transition-all duration-300 hover:translate-x-2 inline-flex"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Contact & Payment */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-5 relative inline-block">
              Contact Us
              <span className="absolute left-0 -bottom-2 w-10 h-1 rounded-full bg-blue-600"></span>
            </h3>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 flex items-center justify-center">
                  <MapPin size={18} className="text-blue-500" />
                </div>

                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-sm text-zinc-400 mt-1 leading-6">
                    123 Market Street,
                    <br />
                    Mumbai, Maharashtra,
                    <br />
                    India - 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 flex items-center justify-center">
                  <Phone size={18} className="text-green-500" />
                </div>

                <div>
                  <p className="font-semibold">Phone</p>

                  <a
                    href="tel:+911234567890"
                    className="text-zinc-400 hover:text-blue-500 transition"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-zinc-900 flex items-center justify-center">
                  <Mail size={18} className="text-red-500" />
                </div>

                <div>
                  <p className="font-semibold">Email</p>

                  <a
                    href="mailto:support@eshop.com"
                    className="text-zinc-400 hover:text-blue-500 transition"
                  >
                    support@eshop.com
                  </a>
                </div>
              </div>
            </div>

            {/* Payment Methods */}

            <div className="mt-10">
              <h4 className="font-semibold mb-5">Secure Payments</h4>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 flex items-center gap-3 hover:border-blue-500 transition">
                  <FaCcVisa className="text-3xl text-blue-500" />
                  <span className="font-medium">Visa</span>
                </div>

                <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 flex items-center gap-3 hover:border-blue-500 transition">
                  <FaCcMastercard className="text-3xl text-red-500" />
                  <span className="font-medium">MasterCard</span>
                </div>

                <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 flex items-center gap-3 hover:border-blue-500 transition">
                  <FaCcPaypal className="text-3xl text-sky-500" />
                  <span className="font-medium">PayPal</span>
                </div>

                <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-4 flex items-center gap-3 hover:border-blue-500 transition">
                  <FaGooglePay className="text-3xl text-green-500" />
                  <span className="font-medium">UPI / GPay</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5">
                <p className="text-lg font-bold">🚚 Free Shipping</p>

                <p className="text-sm text-blue-100 mt-2 leading-6">
                  Enjoy free delivery on every order above
                  <span className="font-bold"> ₹999 </span>
                  anywhere in India.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}

        <div className="mt-16 border-t border-zinc-800 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-zinc-400 text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">E-Shop</span>. All
                rights reserved.
              </p>

              <p className="text-zinc-500 text-xs mt-2">
                Designed with ❤️ for modern shopping experience.
              </p>
            </div>

            {/* Quick Links */}

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/terms"
                className="text-zinc-400 hover:text-blue-500 transition"
              >
                Terms
              </a>

              <a
                href="/privacy"
                className="text-zinc-400 hover:text-blue-500 transition"
              >
                Privacy
              </a>

              <a
                href="/refund"
                className="text-zinc-400 hover:text-blue-500 transition"
              >
                Refund Policy
              </a>

              <a
                href="/contact"
                className="text-zinc-400 hover:text-blue-500 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Developer */}

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-5 text-center">
            <p className="text-zinc-400">Developed by</p>

            <h3 className="text-xl font-bold text-blue-500 mt-2">
              Chander Shekhar Prajapati
            </h3>

            <p className="text-sm text-zinc-500 mt-2">
              Frontend Developer • React • Tailwind CSS • JavaScript
            </p>
          </div>

          {/* Disclaimer */}

          <div className="mt-6 text-center">
            <p className="text-xs text-zinc-500 leading-6">
              Disclaimer: This website is created only for educational and
              portfolio purposes. All brand names, logos and product images
              belong to their respective owners.
            </p>
          </div>
        </div>
      </div>

      {/* Back To Top Button */}

      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
};

export default Footer;

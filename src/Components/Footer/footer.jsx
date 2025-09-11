import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Fully responsive E-commerce footer component using Tailwind CSS
export default function footer() {
  const nav = {
    shop: [
      { label: "Men", href: "/shop/men" },
      { label: "Women", href: "/shop/women" },
      { label: "Kids", href: "/shop/kids" },
      { label: "New Arrivals", href: "/shop/new" },
    ],
    help: [
      { label: "Orders & Returns", href: "/help/orders" },
      { label: "Shipping", href: "/help/shipping" },
      { label: "Payment Options", href: "/help/payment" },
      { label: "FAQ", href: "/help/faq" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Press", href: "/press" },
    ],
  };

  function handleSubscribe(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements["email"].value;
    if (!email) return alert("Please enter your email to subscribe");
    alert(`Subscribed ${email} `);
    form.reset();
  }

  return (
    <footer className="bg-white dark:bg-zinc-900 border-t dark:border-zinc-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Newsletter */}
          <div className="md:col-span-4">
            <a href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
                E
              </div>
              <span className="text-xl font-semibold text-zinc-900 dark:text-white">
                E-Shop
              </span>
            </a>

            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm max-w-md">
              We craft quality products with care. Free shipping on orders over
              ₹999. Connect with us for exclusive deals and updates.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 min-w-0 px-3 py-2 rounded-md border border-zinc-200 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
              />
              <button
                type="submit"
                className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Mail size={16} />
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-white"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 text-white"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Shop
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {nav.shop.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Help
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {nav.help.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {nav.company.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Payments */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              Contact
            </h3>
            <address className="not-italic mt-3 text-sm text-zinc-600 dark:text-zinc-400 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>123 Market Street, Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+911234567890" className="hover:underline">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:hello@eshop.example"
                  className="hover:underline"
                >
                  hello@eshop.example
                </a>
              </div>
            </address>

            <h4 className="mt-6 font-semibold text-zinc-900 dark:text-white">
              We accept
            </h4>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                <svg
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect width="36" height="24" rx="3" fill="red" />
                </svg>
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  Card
                </span>
              </div>

              <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                <svg
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect width="36" height="24" rx="3" fill="#06b6d4" />
                </svg>
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  UPI
                </span>
              </div>

              <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                <svg
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <rect width="36" height="24" rx="3" fill="#f59e0b" />
                </svg>
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  NetBanking
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t dark:border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center md:text-left">
            © {new Date().getFullYear()} E-Shop. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/terms"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
            >
              Privacy
            </a>
            <a
              href="/sitemap.xml"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:underline"
            >
              Sitemap
            </a>
          </nav>
        </div>
        <div className="w-full bg-gray-900 text-white text-center py-4 mt-10">
          <p className="text-sm">
            © {new Date().getFullYear()} Developed by{" "}
            <span className="font-semibold text-blue-400">
              Chander Shekhar Prajapati
            </span>
          </p>
        </div>
        <div className="w-full flex items-center  justify-center font-bold mt-5 text-gray-600">
          <p>Disclaimer :- This Website Create Only Eduction Purpose </p>
        </div>
      </div>
    </footer>
  );
}

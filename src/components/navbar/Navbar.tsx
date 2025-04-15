import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import Elixir_logo from "../../images/Layer-1.png";
import Elixir_colored_logo from "../../images/Elixir-Automation-Logo.png";

const Navbar = () => {
  interface navLinksType {
    name: string;
    href: string;
  }
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line
  const [activeLink, setActiveLink] = useState("Home");
  // const isServicePage = location.pathname === "/services";
  const isHomePage = location.pathname === "/";

  const currentLogo = isHomePage ? Elixir_logo : Elixir_colored_logo;
  const textColor = isHomePage ? "text-white" : "text-black";
  const navLinks: navLinksType[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      x: "-100%",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const overlayVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3, delay: 0.1 },
    },
  };

  return (
    <nav
      className={`pt-4 md:pt-6 lg:pt-[15px] relative ${
        isHomePage ? "bg-none" : "bg-white py-2"
      }`}
    >
      <div className="max-w-[1350px] mx-auto ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110 cursor-pointer">
            <img
              src={currentLogo}
              alt="uifry logo"
              className="h-auto w-[245px] md:w-[110px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="destop_nav_links hidden md:flex md:justify-start gap-5 md:absolute md:ml-40 space-x-4 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`z-10 font-bold
                 py-0 px-5 text-[17px]  md:justify-start transition-colors hover:text-[#B34B98] ${
                   location.pathname === link.href
                     ? "text-[#B34B98] font-bold"
                     : textColor
                 }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-3 z-40">
            {!isHomePage && (
              <div className="hidden md:flex gap-1">
                <Link
                  to="/login"
                  className={`${textColor} text-[17px] font-bold px-4 py-2 rounded-[100px] hover:text-[#B34B98]`}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#272364] text-[17px] font-bold text-white px-4 py-2 rounded-[100px] hover:bg-[#B34B98] transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
            {/* hide our team Button */}
            <motion.a
              className="hidden md:flex bg-[#272364] text-[17px] font-bold text-white px-4 py-2 rounded-[100px] relative overflow-hidden lg:mr-11"
              href="./"
              initial={false}
              whileHover={{
                backgroundColor: "#B34B98",
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex items-center"
              >
                Hide Our Team ➝
              </motion.span>

              {/* Background overlay for smooth transition */}
              <motion.div
                initial={{ backgroundColor: "#B34B98", opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0"
              />
            </motion.a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isMenuOpen ? (
                <svg
                  className={`h-6 w-6 ${
                    isHomePage ? "text-white" : "text-gray-600"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-[#B34B98]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-[95%] bg-white shadow-lg z-50"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="h-16 flex items-center justify-end px-4">
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="px-4 pt-2 pb-3 space-y-2">
                <img
                  src={Elixir_colored_logo}
                  alt="uifry logo"
                  className=" relative h-auto w-[123px] pb-4"
                />
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => {
                      setActiveLink(link.name);

                      setIsMenuOpen(false);
                    }}
                    className={`block px-[15px] py-[10px] text-lg font-bold rounded-md transition-colors ${
                      location.pathname === link.href
                        ? "text-[#B34B98]"
                        : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile  Button */}
                {/* <a
                  className="bg-[#272364] text-white px-5 py-3 rounded-md font-medium w-full block text-center mt-4 transition-all duration-500 ease-in-out hover:bg-[#B34B98]"
                  href={"pdfFile"}
                >
                  Hide Our Team ➝
                </a> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

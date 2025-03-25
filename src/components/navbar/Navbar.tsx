import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Elixir_logo from "../../images/Layer-1.png";
import Elixir_colored_logo from "../../images/Elixir-Automation-Logo.png";

const Navbar = () => {
  interface navLinksType {
    name: string;
    href: string;
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks: navLinksType[] = [
    { name: "Home", href: "#" },
    { name: "Service", href: "#" },
    { name: "Testimonials", href: "#" },
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
    <nav className="pt-4 md:pt-6 lg:pt-3 relative">
      <div className="max-w-7xl mx-auto px-3 md:px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110 cursor-pointer">
            <img
              src={Elixir_logo}
              alt="uifry logo"
              className="h-auto w-[245px] md:w-[100px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="destop_nav_links hidden md:flex md:justify-start md:absolute md:ml-40 space-x-4 ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={` z-10 font-bold
                 py-0 px-5 text-lg  md:justify-start transition-colors ${
                   activeLink === link.name
                     ? "text-[#B34B98] font-bold"
                     : "text-white"
                 }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* hide our team Button */}
          <a
            className="hidden md:flex bg-[#272364] text-[17px] font-bold text-white px-5 py-3 rounded-[100px]  hover:bg-[#B34B98;]"
            href="./"
          >
            Hide Our Team ➝
          </a>

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
                  className="h-6 w-6 text-white"
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
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-[15px] py-[10px] text-lg font-bold rounded-md transition-colors ${
                      activeLink === link.name
                        ? "text-[#B34B98]"
                        : "text-black hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </a>
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

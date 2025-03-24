import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Elixir_logo from "../../images/Layer-1.png";

const Navbar = () => {
  interface navLinksType {
    name: string;
    href: string;
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Track the active link

  const navLinks: navLinksType[] = [
    { name: "Home", href: "#" },
    { name: "Service", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  return (
    <nav className="pt-6 lg:pt-4">
      <div className="max-w-7xl mx-auto px-3 md:px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 transition delay-150 duration-300 ease-in-out hover:-translate-y hover:scale-110 cursor-pointer">
            <img
              src={Elixir_logo}
              alt="uifry logo"
              className="h-auto w-[100px]"
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

          {/* Download Button */}
          <a
            className="hidden md:flex bg-[#272364] text-lg font-bold text-white px-5 py-3 rounded-[100px]   hover:bg-[#B34B98;] z-10"
            // href={pdfFile}
            href="./"
          >
            Hide Our Team ➝
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-10">
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
                  className="h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="z-50 absolute top-12  md:hidden flex flex-col w-full bg-white border-t border-gray-200 mt-4"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-4 pt-4 pb-3 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-2 text-lg font-medium text-center border-b border-gray-400 transition-colors ${
                    activeLink === link.name
                      ? "text-red-500 font-semibold "
                      : "text-gray-700 hover:text-red-500"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              {/* Mobile Download Button */}
              <a
                className="bg-black text-white px-5 py-3 rounded-md font-medium w-full block text-center mt-4 transition-all duration-500 ease-in-out hover:-translate-y-1"
                // href={pdfFile}
                href={"pdfFile"}
                download="sample-report.pdf"
                aria-label="Download sample report"
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

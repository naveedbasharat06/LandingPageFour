import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intelleges_partner from "../../images/6-1.png";
import BOAG_partner from "../../images/2.png";
import CENTRA_partner from "../../images/7-1.png";
import HYRIDES_partner from "../../images/4-2.png";
import BIOTEKNICA_partner from "../../images/5-1.png";
import IF_then_partner from "../../images/3.png";
import Flatfree_partner from "../../images/1 (1).png";
import "./TrustedPartners.css";

const partners = [
  { id: 1, name: "Flatefree", logo: Flatfree_partner },
  { id: 2, name: "IF / Then", logo: IF_then_partner },
  { id: 3, name: "BIOTEKNICA", logo: BIOTEKNICA_partner },
  { id: 4, name: "Intelleges", logo: Intelleges_partner },
  { id: 5, name: "BOAG", logo: BOAG_partner },
  { id: 6, name: "CENTRA", logo: CENTRA_partner },
  { id: 7, name: "HYRIDE", logo: HYRIDES_partner },
];

const TrustedPartners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visiblePartners, setVisiblePartners] = useState(4);

  // Update visible partners based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisiblePartners(4);
      } else if (window.innerWidth >= 768) {
        setVisiblePartners(2);
      } else {
        setVisiblePartners(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(partners.length / visiblePartners);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const visibleItems = partners.slice(
    currentSlide * visiblePartners,
    currentSlide * visiblePartners + visiblePartners
  );

  return (
    <div className="trusted_partner_main relative flex flex-col py-10">
      <div className="max-w-[1350px] mx-auto px-4 w-full">
        <p className="text-[17px] font-semibold text-[#B34B98] text-center font-[Figtree]">
          Elixir Automation
        </p>
        <h2 className="text-[45px] font-extrabold text-[#272364] text-center mb-8 leading-[50px]">
          Trusted Partners
        </h2>

        <div className="relative overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10"
            >
              {visibleItems.map((partner) => (
                <motion.div
                  key={partner.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center h-[180px]"
                >
                  <div className="w-full flex items-center justify-center md:h-[170px] lg:h-[150px]">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="trusted_partner_logo rounded-xl max-h-full max-w-full object-contain px-4"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 hover:bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="h-8 w-8 text-[#B34B98]"
            >
              <path
                fill="#B34B98"
                d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                data-name="Left"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 hover:bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              className="h-8 w-8 text-[#B34B98]"
            >
              <path
                fill="#B34B98"
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-black w-6"
                  : "bg-gray-500 bg-opacity-30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;

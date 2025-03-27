import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
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
  const [autoSlide, setAutoSlide] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides, autoSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x > 50) {
      prevSlide();
    } else if (info.offset.x < -50) {
      nextSlide();
    }
  };

  // Get visible partners for current slide
  const visibleItems = [];
  for (let i = 0; i < visiblePartners; i++) {
    const index = (currentSlide * visiblePartners + i) % partners.length;
    visibleItems.push(partners[index]);
  }

  return (
    <div
      className="trusted_partner_main relative flex flex-col py-10"
      ref={sliderRef}
      onMouseEnter={() => setAutoSlide(false)}
      onMouseLeave={() => setAutoSlide(true)}
    >
      {/* <div className="trusted_partner_bg_overlay"></div> */}
      <div className="max-w-[1350px] mx-auto px-4 w-full">
        <p className="text-[17px] font-semibold text-[#B34B98] text-center font-[Figtree]">
          Elixir Automation
        </p>
        <h2 className="text-[45px] font-extrabold text-[#272364] text-center mb-6 leading-1">
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
              className={`grid grid-cols-1 ${
                visiblePartners >= 2 ? "sm:grid-cols-2" : ""
              } ${visiblePartners >= 4 ? "lg:grid-cols-4" : ""} gap-4 px-10`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {visibleItems.map((partner) => (
                <motion.div
                  key={partner.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center h-[180px] bg-white bg-opacity-10 rounded-xl p-5"
                >
                  <div className="w-full flex items-center justify-center h-[150px]">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="trusted_partner_logo max-h-full max-w-full object-contain rounded-xl"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-opacity-30 hover:bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 z-10"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-opacity-30 hover:bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 z-10"
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

        {/* Dots Navigation - Always show all 7 dots */}
        <div className="flex justify-center mt-2 space-x-2">
          {Array.from({ length: partners.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(Math.floor(index + 1))}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === Math.floor(index + 1)
                  ? // index+1 (index / visiblePartners)
                    "bg-black w-2"
                  : "bg-black bg-opacity-30"
              }`}
              aria-label={`Go to partner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;

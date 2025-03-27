import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import "./Herosection.css";
const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <div className="Hero_section_main">
      <div className="herosection_background_overlay"></div>
      <Navbar />

      <section className="hero_section z-20">
        <motion.div
          className="hero_content relative justify-center text-center px-4 md:px-6 lg:px-[153px] mx-auto max-w-[1140px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-[35px] md:text-[50px] lg:text-[83px] font-bold text-white leading-[120%]"
            variants={itemVariants}
          >
            How should I be using AI for my business?
          </motion.h1>
          <motion.p
            className="py-5 md:pt-14 md:pb-[60px] lg:px-8 text-[15px] md:text-[22px] font-[Figtree]"
            variants={itemVariants}
          >
            It’s simple: We start by automating your most time-consuming
            processes. With AI automation, the savings and efficiency gains
            often cover the investment in just a few months.
          </motion.p>
          <motion.a
            className=" bg-[#272364] text-lg font-bold text-white px-5 py-2 rounded-[100px] relative overflow-hidden "
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
              Schedule a free AI audit ➝
            </motion.span>

            {/* Background overlay for smooth transition */}
            <motion.div
              initial={{ backgroundColor: "#B34B98", opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-0"
            />
          </motion.a>
        </motion.div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 10"
        preserveAspectRatio="none"
        className="absolute bottom-0 fill-white w-[100%] "
      >
        <path
          className="elementor-shape-fill"
          d="M360 0L350 9.9 340 0 0 0 0 10 700 10 700 0"
        ></path>
      </svg>
    </div>
  );
};
export default HeroSection;

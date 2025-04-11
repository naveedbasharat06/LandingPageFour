import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AutomationCanApplies.css";

const automationApplied_card_data = [
  {
    Id: 1,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-1-01-2.svg",
    title: "Client Invoicing",
  },
  {
    Id: 2,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-2-01.svg",
    title: "Inbox Management",
  },
  {
    Id: 3,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-4.svg",
    title: "Project Management",
  },
  {
    Id: 4,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-4.svg",
    title: "Email Marketing",
  },
  {
    Id: 5,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-5-01.svg",
    title: "Data Entry",
  },
  {
    Id: 6,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-6-01.svg",
    title: "Client Onboarding",
  },
  {
    Id: 7,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-7-01.svg",
    title: "Financial Reporting",
  },
  {
    Id: 8,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-8-01.svg",
    title: "Social Media Management",
  },
  {
    Id: 9,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-9-01-01.svg",
    title: "Customer Support",
  },
  {
    Id: 10,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-10-01.svg",
    title: "Performance Tracking",
  },
  {
    Id: 11,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-11-01.svg",
    title: "Appointment Setting",
  },
  {
    Id: 12,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-12-01.svg",
    title: "Feedback Collection",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

const AutomationCanApplied: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 }); // Reduced threshold for mobile

  return (
    <div
      ref={ref}
      className="automationPercentile_can_applied relative py-12 md:py-20 bg-[#272364] overflow-hidden"
    >
      <img
        className="absolute top-0"
        src="https://elixirautomation.com/wp-content/uploads/2025/01/border-new-01-1.svg"
        alt=""
      />
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6">
        {" "}
        {/* Added sm:px-6 */}
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 px-2 sm:px-0" // Added padding for mobile
        >
          <h1 className="text-2xl sm:text-3xl md:text-[45px] font-extrabold text-white max-w-full md:max-w-[622px] leading-tight md:leading-[1.2] mb-4 md:mb-0">
            1% of where automation can be applied
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#B34B98] hover:text-purple-400 text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 mt-4 md:mt-0"
          >
            GET FREE AUDIT →
          </motion.button>
        </motion.div>
        {/* Cards Grid - Adjusted gap and padding for mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 px-2 sm:px-0" // Added mobile padding
        >
          {automationApplied_card_data.map((item) => (
            <motion.div
              key={item.Id}
              variants={itemVariants}
              whileHover={{
                y: window.innerWidth > 768 ? -10 : 0, // Disable lift on mobile
                boxShadow:
                  window.innerWidth > 768
                    ? "0 10px 25px -5px rgba(179, 75, 152, 0.3)"
                    : "none",
              }}
              className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-75 flex flex-col items-center text-center border-b-[6px] border-[#C5BAF8] z-20 hover:z-30 group overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay - hidden on mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: window.innerWidth > 768 ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-br from-[#B34B98]/20 to-[#272364]/20 transition-opacity duration-300"
              />

              {/* Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text with adjusted size for mobile */}
              <h2 className="text-[#272364] text-base sm:text-lg md:text-xl font-extrabold leading-tight sm:leading-normal px-1 sm:px-2">
                {item.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background image - hidden on small screens */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: window.innerWidth > 768 ? 0.2 : 0 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-0 max-w-[530px] hidden sm:block"
        src="https://elixirautomation.com/wp-content/uploads/2025/01/Vector-Smart-Object.png"
        alt="background"
      />
    </div>
  );
};

export default AutomationCanApplied;

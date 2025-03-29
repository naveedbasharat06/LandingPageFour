import React, { useRef } from "react";
// import Slider from "react-draggable-slider";
import { motion, useInView, useAnimation } from "framer-motion";
import "./ToolsWeLove.css";

const toolsWeLoveData = [
  {
    Id: 1,
    tool: "https://elixirautomation.com/wp-content/uploads/2025/02/Logo-3.png",
    name: "Instantly",
  },
  {
    Id: 2,
    tool: "https://elixirautomation.com/wp-content/uploads/2025/02/Logo-2.png",
    name: "OpenAI",
  },
  {
    Id: 3,
    tool: "https://elixirautomation.com/wp-content/uploads/2025/02/Logo-1.png",
    name: "ClickUp",
  },
];

const ToolsWeLove: React.FC = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Duplicate the items to create a seamless loop
  // const duplicatedTools = [
  //   ...toolsWeLoveData,
  //   ...toolsWeLoveData,
  //   ...toolsWeLoveData,
  // ];

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

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    const direction = velocity < 0 || offset < 0 ? 1 : -1;

    controls
      .start({
        x: [null, direction * 200],
        transition: { duration: 0.5 },
      })
      .then(() => {
        // Reset position after animation to create infinite loop
        controls.set({ x: 0 });
      });
  };

  return (
    <div ref={ref} className="ToolsWeLove_main">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="ToolWelove_section"
      >
        <motion.div
          className="hero_content relative justify-center text-center px-4  mx-auto max-w-[1350px]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-[17px] font-semibold text-[#B34B98] uppercase leading-[120%]"
            variants={itemVariants}
          >
            Elixir Automation
          </motion.h1>
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            src="https://elixirautomation.com/wp-content/uploads/2025/03/Happy-Clients-200-01-2048x192.png"
            alt="200+ Happy Clients"
            className="hidden lg:block"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            src="https://elixirautomation.com/wp-content/uploads/2025/03/Happy-Clients-Mobile-01-01-1024x229.png"
            alt="200+ Happy Clients"
            className="block lg:hidden items-center "
          />
          <motion.h1
            className="text-[45px] md:text-[58px] font-extrabold text-[#272364] leading-[120%]"
            variants={itemVariants}
          >
            Tools we love
          </motion.h1>
          <motion.p
            className="py-2 max-w-[95%] md:max-w-[681px] lg:max-w-[838px] text-lg font-[Figtree] text-[#2f2f2f]"
            variants={itemVariants}
          >
            There are countless amazing tools available to streamline workflows
            and save time. These are just a few of our favorites, helping us
            create tailored automation solutions for businesses like yours.
          </motion.p>

          {/* Infinite Draggable Carousel */}
          <div className="max-w-[1330px] overflow-hidden py-2 relative">
            <motion.div
              drag="x"
              dragConstraints={{ left: -1000, right: 1000 }}
              onDragEnd={handleDragEnd}
              animate={controls}
              // initial={{ opacity: 0 }}
              // animate={isInView ? { opacity: 1 } : {}}
              // transition={{ delay: 0.5, duration: 1 }} // wil un comment when use it
              className="flex gap-3 md:gap-5 lg:gap-8 cursor-grab active:cursor-grabbing"
              whileTap={{ cursor: "grabbing" }}
            >
              {toolsWeLoveData.map((item, index) => (
                <motion.div
                  key={`${item.Id}-${index}`}
                  variants={itemVariants}
                  // whileHover={{
                  //   y: window.innerWidth > 768 ? -10 : 0,
                  //   boxShadow:
                  //     window.innerWidth > 768
                  //       ? "0 10px 25px -5px rgba(179, 75, 152, 0.3)"
                  //       : "none",
                  // }}
                  className=""
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    // whileHover={{ opacity: window.innerWidth > 768 ? 1 : 0 }}
                    className="absolute inset-0"
                  />
                  <div className="w-auto md:w-[230px] lg:w-[258px]">
                    <img
                      src={item.tool}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      {/* <img
        className="absolute bottom-0"
        src="https://elixirautomation.com/wp-content/uploads/2025/01/border-new-01-1.svg"
        alt=""
      /> */}
    </div>
  );
};

export default ToolsWeLove;

import React, { useRef } from "react";
import { motion } from "framer-motion";

import "./ourTeam.css";
// import { TfiLinkedin } from "react-icons/tfi";
const OurTeamData = [
  {
    Id: 1,
    profilePhoto:
      "https://elixirautomation.com/wp-content/uploads/2025/01/1721148140488-1.jpeg",
    name: "Matthew Ortiz",
    designation: "CO-FOUNDER AND DEVELOPER",
    linkedIn: "LinkedIn",
    email: "Email",
  },
  {
    Id: 2,
    profilePhoto:
      "https://elixirautomation.com/wp-content/uploads/2025/01/1701487719482-1.jpeg",
    name: "Julian Stancioff",
    designation: "CO-FOUNDER AND DEVELOPER",
    linkedIn: "LinkedIn",
    email: "Email",
    tiktok: "Tiktok",
  },
  {
    Id: 3,
    profilePhoto:
      "https://elixirautomation.com/wp-content/uploads/2025/03/admin-ajax.jpg",
    name: "Mychal Ortiz",
    designation: "DEVELOPER",
    linkedIn: "LinkedIn",
    email: "Email",
  },
];

const MeetOurExpertTeam: React.FC = () => {
  //   const LinkedInIcon: JSX.Element = <TfiLinkedin />;
  const ref = useRef(null);
  // const controls = useAnimation();
  // const isInView = useInView(ref, { once: false, amount: 0.3 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="OurExpert_team_main pt-8 md:pt-16 lg:pt-16 px-2 md:px-8 lg:px-16 bg-white relative pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img
        src="https://elixirautomation.com/wp-content/uploads/2025/01/border-new-01-1.svg"
        alt="top horizontal line"
        className="absolute top-0 w-full"
      />
      <div className="ourTeam_backgroung_overlay"></div>

      <motion.div
        className="max-w-[838px] mx-auto text-center mb-12"
        variants={itemVariants}
      >
        <motion.h1
          className="text-[40px] md:text-4xl lg:text-[58px] font-extrabold px-0 md:px-20 text-[#272364] mb-6 leading-0 lg:leading-[69px]"
          variants={itemVariants}
        >
          Meet the Experts Behind Elixir Automation
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg font-normal text-[#2F2F2F] px-0 md:px-10 lg:px-0 max-w-[838] mx-auto"
          variants={itemVariants}
        >
          Our network is built on a foundation of skilled professionals who
          specialize in AI, automation, and creating custom solutions. Together,
          we bring innovative ideas to life, helping businesses streamline
          operations and save time.
        </motion.p>
      </motion.div>

      <motion.div
        className="ourExpertTeam grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {OurTeamData.map((item) => (
          <motion.div
            key={item.Id}
            className="card bg-[#f8f6f8] rounded-[14px] lg:w-[369px] lg:h-[563px] shadow-md overflow-hidden border-t-[10px] border-[#C5BAF8] relative"
            variants={itemVariants}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(179, 75, 152, 0.3)",
            }}
          >
            <div className="p-8 md:p-12 z-50">
              <div className="flex justify-center gap-6">
                <img
                  src={item.profilePhoto}
                  alt={item.name}
                  className="w-auto md:w-[265px] object-cover z-10"
                />
              </div>
              <h3 className="text-[32px] leading-1 m-0 pt-6 font-extrabold text-center text-[#272364] z-20">
                {item.name}
              </h3>
              <p className="text-[17px] uppercase pt-3 text-center font-semibold text-[#B34B98] z-10">
                {item.designation}
              </p>
              <p className="text-center text-base pt-2 underline text-[#272364] font-bold">
                🇮🇳 {item.linkedIn}
              </p>
              <p className="text-center text-base pt-2 underline text-[#272364] font-bold">
                ✉ {item.email}
              </p>
              <p className="text-center text-base pt-2 underline text-[#272364] font-bold">
                {item.Id === 2 ? `♪ ${item.tiktok}` : ""}
              </p>
            </div>
            <img
              src="https://elixirautomation.com/wp-content/uploads/2025/01/Vector-Smart-Objectcv-1.png"
              alt="bg grandiant"
              className="absolute bottom-0 left-0 opacity-30 w-[45%] z-0"
            />
          </motion.div>
        ))}
      </motion.div>
      {/* <img
        src="https://elixirautomation.com/wp-content/uploads/2025/01/border-new-01-1.svg"
        alt="top horizontal line"
        className="absolute bottom-0 w-full"
      /> */}
    </motion.div>
  );
};

export default MeetOurExpertTeam;

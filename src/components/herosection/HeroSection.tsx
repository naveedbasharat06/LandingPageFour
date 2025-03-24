import React from "react";
import Navbar from "../navbar/Navbar";
import "./Herosection.css";
const HeroSection: React.FC = () => {
  return (
    <div className="Hero_section_main">
      <Navbar />

      <section className="hero_section">
        <div className="hero_content relative justify-center text-center md:px-6 lg:px-[153px] mx-auto max-w-[1140px]">
          <h1 className="text-[83px] font-bold text-white leading-[120%]">
            How should I be using AI for my business?
          </h1>
          <p className="py-8 text-[22px] font-[Figtree]">
            It’s simple: We start by automating your most time-consuming
            processes. With AI automation, the savings and efficiency gains
            often cover the investment in just a few months.
          </p>
          <a
            className="hidden md:flex bg-[#272364] text-lg divide-solid font-bold text-white px-5 py-3 rounded-[100px]  hover:bg-[#B34B98;] z-10 max-w-[265px] items-center mx-auto text-center"
            // href={pdfFile}
            href="./"
          >
            Shedule a free AI audit ➝
          </a>
        </div>
      </section>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 10"
        preserveAspectRatio="none"
      >
        <path
          className="elementor-shape-fill"
          d="M360 0L350 9.9 340 0 0 0 0 10 700 10 700 0"
        ></path>
      </svg> */}
    </div>
  );
};
export default HeroSection;

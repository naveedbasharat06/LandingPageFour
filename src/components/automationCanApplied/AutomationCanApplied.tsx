import React from "react";
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
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-5-01.svg",
    title: "Email Marketing",
  },
  {
    Id: 5,
    icon: "https://elixirautomation.com/wp-content/uploads/2025/01/Service-4.svg",
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

const AutomationCanApplied: React.FC = () => {
  return (
    <div className="automationPercentile_can_applied relative py-20 bg-[#051330] ">
      <div className="max-w-[1350px] mx-auto px-4">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h1 className="text-[32px] md:text-[45px] font-extrabold text-white max-w-[622px] leading-[1.2] mb-4 md:mb-0">
            1% of where automation can be applied
          </h1>
          <button className="text-[#B34B98] hover:text-purple-400 text-xl md:text-2xl font-bold transition-colors duration-300">
            GET FREE AUDIT →
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {automationApplied_card_data.map((item) => (
            <div
              key={item.Id}
              className="bg-white  rounded-2xl p-6  transition-all duration-300 flex flex-col items-center text-center border-b-4 border-indigo-300 z-20"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mb-4 object-contain text-white"
              />
              <h2 className="text-[#272364] text-xl font-extrabold leading-1 px-2">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="z-10"> */}
      <img
        className="absolute bottom-0 left-0 max-w-[414px]"
        src="https://elixirautomation.com/wp-content/uploads/2025/01/Vector-Smart-Object.png"
        alt="backgroung img"
      />
      {/* </div> */}
    </div>
  );
};

export default AutomationCanApplied;

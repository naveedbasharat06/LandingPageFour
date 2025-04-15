import React, { useEffect } from "react";

const HeroSection = React.lazy(
  () => import("./components/herosection/HeroSection")
);
const TrustedPartners = React.lazy(
  () => import("./components/trustedPartners/TrustedPartners")
);
const AutomationCanApplied = React.lazy(
  () => import("./components/automationCanApplied/AutomationCanApplied")
);
const ToolsWeLove = React.lazy(
  () => import("./components/toolsWeLove/ToolsWeLove")
);
const MeetOurExpertTeam = React.lazy(
  () => import("./components/ourExpertTeam/OurTeam")
);
// const BookingCalendar = React.lazy(
//   () => import("./components/bookingCalender/BookingCalender")
// );
// const Footer = React.lazy(() => import("./components/footer/Footer"));

const MyComponent: React.FC = () => {
  useEffect(() => {
    document.title =
      " Elixir Automation – It’s simple: We start by automating your most time-consuming processes.";
  }, []);
  return (
    <div className="">
      <HeroSection />
      <TrustedPartners />
      <AutomationCanApplied />
      <ToolsWeLove />
      <MeetOurExpertTeam />
      {/* <BookingCalendar />
      <Footer /> */}
    </div>
  );
};
export default MyComponent;

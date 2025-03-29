import React from "react";
import BookingCalendar from "./components/bookingCalender/BookingCalender";

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

const MyComponent: React.FC = () => {
  return (
    <div className="">
      <HeroSection />
      <TrustedPartners />
      <AutomationCanApplied />
      <ToolsWeLove />
      <MeetOurExpertTeam />
      <BookingCalendar />
    </div>
  );
};
export default MyComponent;

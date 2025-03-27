import React from "react";

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

const MyComponent: React.FC = () => {
  return (
    <div className="">
      <HeroSection />
      <TrustedPartners />
      <AutomationCanApplied />
      <ToolsWeLove />
    </div>
  );
};
export default MyComponent;

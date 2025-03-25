import React, { Suspense } from "react";

const HeroSection = React.lazy(
  () => import("./components/herosection/HeroSection")
);
const TrustedPartners = React.lazy(
  () => import("./components/trustedPartners/TrustedPartners")
);
const AutomationCanApplied = React.lazy(
  () => import("./components/automationCanApplied/AutomationCanApplied")
);

const MyComponent: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustedPartners />
      <AutomationCanApplied />
    </div>
  );
};
export default MyComponent;

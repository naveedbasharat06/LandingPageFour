import React from "react";
import Navbar from "./components/navbar/Navbar";
import ServiceHeroSection from "./components/ServicesPage/serviceHeroSection";
// const BookingCalendar = React.lazy(
//   () => import("./components/bookingCalender/BookingCalender")
// );
// const Footer = React.lazy(() => import("./components/footer/Footer"));
const Services = () => {
  return (
    <div className="">
      <Navbar />
      <ServiceHeroSection />
      {/* <BookingCalendar />
      <Footer /> */}
    </div>
  );
};

export default Services;

// import "./output.css";
import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyComponent from "./MyComponents";
import Services from "./Services";
import BookingCalendar from "./components/bookingCalender/BookingCalender";
import Footer from "./components/footer/Footer";
import Login from "./components/userAuth/Login";
import SignUp from "./components/userAuth/SignUp";
import LoadingSpinner from "./components/loadingSpinner/LoadingSpinner";
import Testimonials from "./components/testimonials/testimonials";
// import Navbar from "./components/navbar/Navbar";
import OrderNowHeroSection from "./components/OrderNow/OrderNowHeroSection";
import AddToCard from "./components/addToCard/AddToCard";
import ScrollToTop from "./hooks/ScrollToTop";
import BackToTop from "./hooks/BackToTop";
function App() {
  return (
    <>
      <div className="App overflow-scroll">
        <Router>
          <ScrollToTop />
          {/* <Navbar /> */}
          {/* <MyComponent /> */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<MyComponent />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/orderNow/:title"
                element={<OrderNowHeroSection />}
              />
              <Route path="/addToCard/:title" element={<AddToCard />} />
            </Routes>
            {/* < /> */}
          </Suspense>
        </Router>
        <BookingCalendar />
        <Footer />
        <BackToTop />
      </div>
      {/* <LoadingSpinner /> */}
    </>
  );
}
export default App;

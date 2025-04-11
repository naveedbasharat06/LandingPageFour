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
// import Testimonials from "./testimonials";

function App() {
  return (
    <>
      <Router>
        <div className="App overflow-scroll">
          {/* <MyComponent /> */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<MyComponent />} />
              <Route path="/services" element={<Services />} />
              {/* <Route path="/testimonials" element={<Testimonials />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
      <BookingCalendar />
      <Footer />
      {/* <LoadingSpinner /> */}
    </>
  );
}

export default App;

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Select, Button, Modal, Switch } from "antd";
import logo1 from "../../images/logo (1).png";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";
import "./BookingCalender.css";

const { Option } = Select;
interface FAQItem {
  Id: number;
  question: string;
  answer: string;
}
const faqData: FAQItem[] = [
  {
    Id: 1,
    question: "Strictly Necessary Cookies",
    answer:
      "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.",
  },
  {
    Id: 2,

    question: "functional cookies",
    answer:
      "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.",
  },
  {
    Id: 3,

    question: "performance cookies",
    answer:
      "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
  },
  {
    Id: 4,

    question: "targeting cookies",
    answer:
      "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
  },
];
const BookingCalendar: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeZone, setTimeZone] = useState("Asia/Singapore");
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [availableMonths, setAvailableMonths] = useState<Date[]>([]);
  const [isCookieModalVisible, setIsCookieModalVisible] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<"calendar" | "form">(
    "calendar"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: [] as string[],
    companyName: "",
    companyWebsite: "",
    problemToAutomate: "",
  });
  // show less and more text show
  const [expanded, setExpanded] = useState(true);
  const fullText = `

  Schedule a discovery call with us to explore how our API automation solutions can transform your business operations. Whether you're looking to enhance efficiency, reduce errors, or streamline processes, we're here to tailor our expertise to your unique business needs. Book a slot today and take the first step towards super-powering your business!`;

  const shortText = fullText.slice(0, 150) + "...";
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // const [isOpen, setIsOpen] = useState(false);
  // const [cookies, setCookies] = useState({
  //   functional: false,
  //   performance: false,
  //   targeting: false,
  // });

  // const handleToggle = (type: keyof typeof cookies) => {
  //   setCookies((prev) => ({ ...prev, [type]: !prev[type] }));
  // };

  // Timezone data with current times
  const timeZones = [
    {
      value: "Asia/Singapore",
      label: "Singapore (SGT)",
      currentTime: new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Singapore",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      value: "America/New_York",
      label: "New York (EST)",
      currentTime: new Date().toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      value: "Europe/London",
      label: "London (GMT)",
      currentTime: new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      value: "Asia/Tokyo",
      label: "Tokyo (JST)",
      currentTime: new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
    {
      value: "Australia/Sydney",
      label: "Sydney (AEST)",
      currentTime: new Date().toLocaleTimeString("en-US", {
        timeZone: "Australia/Sydney",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ];

  // Initialize available months (current and next month)
  useEffect(() => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    setAvailableMonths([now, nextMonth]);
    setCurrentMonth(now);
  }, []);

  // Generate different time slots based on selected date
  useEffect(() => {
    if (selectedDate) {
      const day = selectedDate.getDay();
      const hours = [];

      // Different time slots for weekdays vs weekends
      if (day >= 1 && day <= 3) {
        // Weekdays
        hours.push(
          "12:00 AM",
          "1:30 AM",
          "2:00 AM",
          "3:30 AM",
          "4:00 AM",
          "5:00 AM",
          "6:00 PM",
          "7:30 PM",
          "10:00 PM",
          "11:00 PM"
        );
      } else if (day >= 4 && day <= 5) {
        hours.push(
          "11:00AM",
          "1:30 AM",
          "4:00 AM",
          "7:30 PM",
          "10:00 PM",
          "11:00 PM"
        );
      } else {
        // Weekends
        hours.push(
          "10:00 AM",

          "11:00 AM",

          "12:00 PM",

          "1:00 PM"
        );
      }

      setAvailableTimeSlots(hours);
      setSelectedTime(null);
    }
  }, [selectedDate]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + (direction === "next" ? 1 : -1));

    const isAvailable = availableMonths.some(
      (month) =>
        month.getMonth() === newMonth.getMonth() &&
        month.getFullYear() === newMonth.getFullYear()
    );

    if (isAvailable) {
      setCurrentMonth(newMonth);
      setSelectedDate(null);
      setSelectedTime(null);
    }
  };

  const isPrevDisabled = () => {
    return (
      availableMonths.length > 0 &&
      currentMonth.getMonth() <= availableMonths[0].getMonth() &&
      currentMonth.getFullYear() <= availableMonths[0].getFullYear()
    );
  };

  const isNextDisabled = () => {
    return (
      availableMonths.length > 0 &&
      currentMonth.getMonth() >=
        availableMonths[availableMonths.length - 1].getMonth() &&
      currentMonth.getFullYear() >=
        availableMonths[availableMonths.length - 1].getFullYear()
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return null;
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const showCookieModal = () => {
    setIsCookieModalVisible(true);
  };

  const handleCookieOk = () => {
    setIsCookieModalVisible(false);
  };

  // const handleCookieCancel = () => {
  //   setIsCookieModalVisible(false);
  // };

  const renderCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    // Adjust firstDay to match your week start (Monday)
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    const days = [];

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<div key={`empty-${i}`} className="day-cell empty"></div>);
    }

    // Add day cells for the current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isPast = date < today && date.getDate() !== today.getDate();
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === month;
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      // Only make some dates selectable (not all)
      const isSelectable = !isPast && (day % 2 === 0 || day % 3 === 0);

      days.push(
        <button
          key={`day-${day}`}
          className={`day-cell ${isPast ? "disabled" : ""} ${
            isSelected ? "selected" : ""
          } ${isWeekend ? "weekend" : ""} ${
            !isSelectable ? "isSelectable" : ""
          }`}
          onClick={() => isSelectable && !isPast && handleDateClick(date)}
          disabled={!isSelectable || isPast}
        >
          {day}
        </button>
      );
    }

    return days;
  };
  // form submission
  const renderForm = () => (
    <div className="booking-form">
      <h2 className="form-title">Enter Details</h2>

      <div className="form-group">
        <label>Name *</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label>Add Guests</label>
        <input
          type="text"
          value={formData.guests.join(", ")}
          onChange={(e) =>
            setFormData({ ...formData, guests: e.target.value.split(", ") })
          }
        />
      </div>

      <div className="form-group">
        <label>Company name *</label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          required
        />
      </div>

      <div className="form-group">
        <label>Company website *</label>
        <input
          type="url"
          value={formData.companyWebsite}
          onChange={(e) =>
            setFormData({ ...formData, companyWebsite: e.target.value })
          }
          required
        />
      </div>

      <div className="form-group">
        <label>
          Problem you are looking to automate(optional, but helpful to include).
        </label>
        <textarea
          value={formData.problemToAutomate}
          onChange={(e) =>
            setFormData({ ...formData, problemToAutomate: e.target.value })
          }
        />
        <p className="text-sm">
          By proceeding, you confirm that you have read and agree to{" "}
          <span className="text-blue-500"> Calendly's Terms of Use</span> and{" "}
          <span className="text-blue-500"> Privacy Notice.</span>
        </p>
      </div>

      <div className="form-actions">
        <Button onClick={() => setCurrentStep("calendar")}>Back</Button>
        <Button type="primary" onClick={handleSubmit}>
          Schedule Event
        </Button>
      </div>
    </div>
  );
  const handleSubmit = () => {
    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.companyName ||
      !formData.companyWebsite
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Submit the form data along with the selected date/time
    const bookingData = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      timeZone,
    };

    console.log("Submitting booking:", bookingData);
    // Here you would typically make an API call to submit the booking
  };
  const ScrollingText: React.FC = () => {
    return (
      <div className="overflow-hidden whitespace-nowrap bg-[#C5BAF8] ">
        <div className="animate-marquee  font-bold px-0 py-3 text-4xl text-center">
          <span className="text-lg">🛑</span> Save Hours with Automation{" "}
          <span className="text-lg">🛑</span> Save Hours with Automation
          <span className="text-lg">🛑</span> Save Hours with Automation
        </div>
      </div>
    );
  };
  return (
    <div className="apointmentBooking_main">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="booking-container"
      >
        <img
          src="https://elixirautomation.com/wp-content/uploads/2025/01/border-new-01-light-01.svg"
          alt="horizontal line"
          className="absolute top-0 w-full hidden md:block"
        />
        <p className="block md:hidden">
          <ScrollingText />
        </p>
        <motion.div
          className="hero_content relative justify-center text-center px-4 mx-auto max-w-[1350px]"
          variants={containerVariants}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            src="https://elixirautomation.com/wp-content/uploads/2025/03/Happy-Clients-200-01-2048x192.png"
            alt="200+ Happy Clients"
            className="hidden lg:block mx-auto"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            src="https://elixirautomation.com/wp-content/uploads/2025/03/Happy-Clients-Mobile-01-01-1024x229.png"
            alt="200+ Happy Clients"
            className="block lg:hidden mx-auto mb-4"
          />
          <motion.h1
            className="text-3xl md:text-[45px] font-bold text-[#272364] leading-[54px] mb-6"
            variants={itemVariants}
          >
            Schedule A Free AI Audit
          </motion.h1>
        </motion.div>
        <motion.div
          className="calendar-wrapper"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Powered by Calendry ribbon */}
          <div className="powered-by">
            <span>POWERED BY</span>
            <strong>Calendry</strong>
          </div>

          {/* Left scrollable section */}
          <div className="info-section">
            <div className="border-b-2 mb-5 text-center mx-auto">
              <img
                src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/ee19a8a4-5a3d-4bc2-a1d5-ccafa4afc1dd/e2b4dd84.png"
                alt="calendar bg"
                className="flex justify-center mx-auto items-center min-h-[120px] max-w-[120px]"
              />
            </div>
            <div className="info-content">
              <h3 className="text-base text-black opacity-35 leading-[24px] font-bold">
                Julian Stancioff
              </h3>
              <h4 className="text-[28px] font-bold text-black">
                Business Audit
              </h4>
              <p className="duration">🕒 20 min</p>
              <p className="conference-details">
                🎞️ Web conferencing details provided upon confirmation.
              </p>
              <p className="welcome-message">
                Welcome to Elixir Automation's booking page!
                <br />
                <br />
                {expanded ? fullText : shortText}
              </p>
              <button
                onClick={() => setExpanded(!expanded)}
                className="block md:hidden  mt-1 text-gray-600 font-semibold hover:underline "
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </div>
            <button
              className="hidden md:block relative top-2 text-blue-400 text-sm md:text-base"
              onClick={showCookieModal}
            >
              Cookie settings
            </button>
          </div>

          {/* Right calendar section */}

          <div className="calendar-section">
            {currentStep === "calendar" ? (
              <>
                <h2 className="pl-2 font-bold text-xl mb-5">
                  Select a Date & Time
                </h2>

                <div className="calendar-header">
                  <div className="month-navigation">
                    <Button
                      icon={<LeftOutlined />}
                      onClick={() => navigateMonth("prev")}
                      disabled={isPrevDisabled()}
                      className="nav-button"
                    />
                    <h2>
                      {currentMonth.toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {currentMonth.getFullYear()}
                    </h2>
                    <Button
                      icon={<RightOutlined />}
                      onClick={() => navigateMonth("next")}
                      disabled={isNextDisabled()}
                      className="nav-button"
                    />
                  </div>
                </div>

                <div className="days-header">
                  {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                    (day) => (
                      <div key={day} className="day-header text-xs ">
                        {day}
                      </div>
                    )
                  )}
                </div>

                <div className="days-grid">{renderCalendarDays()}</div>

                {/* Selected date display */}
                {/* {selectedDate && (
              <div className="selected-date-display">
                {formatSelectedDate()}
              </div>
            )} */}

                {/* Timezone selector */}
                <div className="timezone-selector mt-8">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Time zone
                  </label>
                  <Select
                    value={timeZone}
                    onChange={setTimeZone}
                    className="timezone-dropdown w-full"
                    size="small"
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-white border-2 border-blue-500"
                    />
                    {timeZones.map((tz) => (
                      <Option key={tz.value} value={tz.value}>
                        {tz.label} ({tz.currentTime})
                      </Option>
                    ))}
                  </Select>
                </div>
              </>
            ) : (
              renderForm()
            )}
          </div>
          {/* Time selection (positioned to the right) */}
          {selectedDate && (
            <motion.div
              className="time-selection-sidebar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Selected date display */}
              {selectedDate && (
                <div className="selected-date-display">
                  {formatSelectedDate()}
                </div>
              )}
              <h3 className="text-lg font-semibold mb-4">Available Times</h3>
              <div className="time-slots">
                {/* {availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    type={selectedTime === time ? "primary" : "default"}
                    className={`time-slot font-bold ${
                      selectedTime === time ? "selected" : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
               
                    {selectedTime === time && (
                      <>
                        
                        <button className="bg-blue-500">Next</button>
                      </>
                    )}
                  </Button>
                ))} */}
                {availableTimeSlots.map((time) => (
                  <div key={time} className="time-slot-container">
                    <Button
                      type={selectedTime === time ? "primary" : "default"}
                      className={`time-slot font-bold ${
                        selectedTime === time ? "selected" : ""
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                    {selectedTime === time && (
                      <Button
                        type="primary"
                        className="next-button"
                        onClick={() => setCurrentStep("form")}
                      >
                        Next
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <button
            className=" block md:hidden relative top-2 text-blue-400 text-sm md:text-base"
            onClick={showCookieModal}
          >
            Cookie settings
          </button>
        </motion.div>
        {/* Cookie Settings Modal */}
        <Modal
          open={isCookieModalVisible}
          footer={null}
          onOk={handleCookieOk}
          closable={false}
          centered
          width={600}
          className="custom-modal"
        >
          <div className="relative">
            <span className="flex justify-between">
              <img src={logo1} className="w-[94px]" alt="calendrly icon" />
              <button
                className="absolute right-3 text-gray-500 hover:text-gray-800"
                onClick={() => setIsCookieModalVisible(false)}
              >
                <CloseOutlined />
              </button>
            </span>
            <h2 className="text-xl leading-1 font-bold text-[#476788]">
              Privacy Preference Center
            </h2>
            <p className="text-[#476788] text-xs mt-2">
              When you visit any website, it may store or retrieve information
              on your browser, mostly in the form of cookies. This information
              might be about you, your preferences or your device and is mostly
              used to make the site work as you expect it to. The information
              does not usually directly identify you, but it can give you a more
              personalized web experience. Because we respect your right to
              privacy, you can choose not to allow some types of cookies. Click
              on the different category headings to find out more and change our
              default settings. However, blocking some types of cookies may
              impact your experience of the site and the services we are able to
              offer.
            </p>
            <button className="mt-4 w-[20%] bg-blue-600 text-white py-2 rounded-sm  hover:bg-blue-700">
              Allow All
            </button>

            <div className="mt-6">
              <h3 className="text-lg font-medium">
                Manage Consent Preferences
              </h3>
              <div className="mt-2 space-y-3">
                {faqData.map((item, index) => (
                  <div
                    className={`items-center border-b pb-2 ${
                      activeIndex === index ? "border border-gray-600" : " "
                    } `}
                  >
                    <button className="flex flex-row justify-between w-full">
                      <span onClick={() => toggleAccordion(index)}>
                        {activeIndex === index ? "-" : "+"} {item.question}
                      </span>
                      <span
                        className="text-blue-500 text-sm"
                        onClick={() => toggleAccordion(index)}
                      >
                        {`${item.Id === 1 ? "Always Active" : ""}`}
                      </span>
                      <span>
                        {" "}
                        {item.Id === 1 ? (
                          ""
                        ) : (
                          <Switch
                            className="my-switch"
                            // checked={cookies.functional}
                            // onChange={() => handleToggle('functional')}
                            // style={{ backgroundColor: "green" }}
                          />
                        )}
                      </span>
                    </button>
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden z-20"
                        >
                          <div className="p-2 mt-1 bg-gray-200">
                            <p className="text-gray-600 text-xs">
                              {item.answer}
                            </p>
                            <a
                              href="./cookies"
                              className="text-xs text-blue-500"
                            >
                              Cookie Details
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                {/* <div className="flex justify-between items-center">
                  <span>+ Functional Cookies</span>
                  <Switch
                    checked={cookies.functional}
                    onChange={() => handleToggle("functional")}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>+ Performance Cookies</span>
                  <Switch
                    checked={cookies.performance}
                    onChange={() => handleToggle("performance")}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>+ Targeting Cookies</span>
                  <Switch
                    checked={cookies.targeting}
                    onChange={() => handleToggle("targeting")}
                  />
                </div> */}
              </div>
            </div>

            <div className="m-4 flex gap-3">
              <button className="w-1/2 bg-blue-600 py-2 text-white hover:bg-blue-700">
                Reject All
              </button>
              <button className="w-1/2 bg-blue-600 text-white py-2 hover:bg-blue-700">
                Confirm My Choices
              </button>
            </div>
          </div>
          <img
            className="absolute right-6 "
            src="https://cdn.cookielaw.org/logos/static/powered_by_logo.svg"
            alt="powered by"
          />
        </Modal>
      </motion.div>
    </div>
  );
};

export default BookingCalendar;

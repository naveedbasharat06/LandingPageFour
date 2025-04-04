import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Select, Button, Modal, Switch } from "antd";

import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";
import "./BookingCalender.css";

const { Option } = Select;

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
  // const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookies] = useState({
    functional: false,
    performance: false,
    targeting: false,
  });

  const handleToggle = (type: keyof typeof cookies) => {
    setCookies((prev) => ({ ...prev, [type]: !prev[type] }));
  };

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
      if (day >= 1 && day <= 5) {
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
          } ${isWeekend ? "weekend" : ""}`}
          onClick={() => isSelectable && !isPast && handleDateClick(date)}
          disabled={!isSelectable || isPast}
        >
          {day}
        </button>
      );
    }

    return days;
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
          className="absolute top-0 w-full"
        />

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
                Welcome to Elixir Automation's booking page! Schedule a
                discovery call with us to explore how our API automation
                solutions can transform your business operations. Whether you're
                looking to enhance efficiency, reduce errors, or streamline
                processes, we're here to tailor our expertise to your unique
                business needs. Book a slot today and take the first step
                towards super-powering your business!
              </p>
            </div>
            <button
              className="relative top-2 text-blue-400 text-sm md:text-base"
              onClick={showCookieModal}
            >
              Cookie settings
            </button>
          </div>

          {/* Right calendar section */}
          <div className="calendar-section">
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
                  {currentMonth.toLocaleString("default", { month: "long" })}{" "}
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
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <div key={day} className="day-header text-xs text-center">
                  {day}
                </div>
              ))}
            </div>

            <div className="days-grid">{renderCalendarDays()}</div>

            {/* Selected date display */}
            {selectedDate && (
              <div className="selected-date-display">
                {formatSelectedDate()}
              </div>
            )}

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
                {timeZones.map((tz) => (
                  <Option key={tz.value} value={tz.value}>
                    {tz.label} ({tz.currentTime})
                  </Option>
                ))}
              </Select>
            </div>
          </div>

          {/* Time selection (positioned to the right) */}
          {selectedDate && (
            <motion.div
              className="time-selection-sidebar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4">Available Times</h3>
              <div className="time-slots">
                {availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    type={selectedTime === time ? "primary" : "default"}
                    className={`time-slot font-bold ${
                      selectedTime === time ? "selected" : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
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
          <div className="relative p-6">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsCookieModalVisible(false)}
            >
              <CloseOutlined />
            </button>
            <h2 className="text-lg font-semibold">Privacy Preference Center</h2>
            <p className="text-gray-600 text-sm mt-2">
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
            <button className="mt-4 w-[20%] bg-blue-600 text-white py-2  hover:bg-blue-700">
              Allow All
            </button>

            <div className="mt-6">
              <h3 className="text-lg font-medium">
                Manage Consent Preferences
              </h3>
              <div className="mt-2 space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>+ Strictly Necessary Cookies</span>
                  <span className="text-blue-500 text-sm">Always Active</span>
                </div>
                <div className="flex justify-between items-center">
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
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="w-1/2 bg-gray-200 py-2 rounded-md hover:bg-gray-300">
                Reject All
              </button>
              <button className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Confirm My Choices
              </button>
            </div>
          </div>
        </Modal>
      </motion.div>
    </div>
  );
};

export default BookingCalendar;

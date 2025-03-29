import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Select, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./BookingCalender.css";

const { Option } = Select;

const BookingCalendar: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeZone, setTimeZone] = useState("China, Singapore, Perth (UTC+8)");
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [availableMonths, setAvailableMonths] = useState<Date[]>([]);

  // Initialize available months (current and next month)
  useEffect(() => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    setAvailableMonths([now, nextMonth]);
    setCurrentMonth(now);
  }, []);

  // Sample available times
  const availableTimes = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ];

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

    // Check if the new month is within available months
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

      days.push(
        <button
          key={`day-${day}`}
          className={`font-bold day-cell ${isPast ? "disabled" : ""} ${
            isSelected ? "selected" : ""
          }`}
          onClick={() => !isPast && setSelectedDate(date)}
          disabled={isPast}
        >
          {day}
        </button>
      );
    }

    return days;
  };
  // console.log("selected Date", selectedDate);
  return (
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
        className="absolute top-0"
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
          className="block lg:hidden mx-auto"
        />
        <motion.h1
          className="text-3xl md:text-[45px] font-bold text-[#272364] leading-[54px]"
          variants={itemVariants}
        >
          Schedule A free AI Audit
        </motion.h1>
      </motion.div>

      <motion.div
        className="calendar-wrapper"
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* <span className="card_sticker">
          <p className="text-[8px] uppercase">powered by</p>
          <p className="text-[10px]">Calendry</p>
        </span> */}
        {/* Left scrollable section */}
        <div className="info-section">
          <div className="border-b-2 mb-5 text-center mx-auto">
            <img
              src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/ee19a8a4-5a3d-4bc2-a1d5-ccafa4afc1dd/e2b4dd84.png"
              alt="calender bg"
              className="flex justify-center mx-auto pb-2 items-center min-h-[120px] max-w-[120px]"
            />
          </div>
          <div className="info-content">
            <h3 className="text-base text-black opacity-35 leading-[24px] font-bold">
              Julian Stancioff
            </h3>
            <h4 className="text-[28px] font-bold text-black">Business Audit</h4>
            <p className="duration">🕒 20 min</p>
            <p className="conference-details">
              🎞️ Web conferencing details provided upon confirmation.
            </p>
            <p className="welcome-message">
              Welcome to Elixir Automation's booking page! <br />
              <br /> Schedule a discovery call with us to explore how our API
              automation solutions can transform your business operations.
              Whether you're looking to enhance efficiency, reduce errors, or
              streamline processes, we're here to tailor our expertise to your
              unique business needs. Book a slot today and take the first step
              towards super-powering your business!
            </p>
          </div>
          <button className="relative top-2 text-blue-400 text-lg md:text-2xl">
            Cookie settings
          </button>
        </div>

        {/* Right calendar section */}
        <div className="calendar-section">
          <h2 className="pl-2 font-bold text-xl mb-5">Select a Date & Time</h2>
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
              <div key={day} className="day-header text-xs text-left">
                {day}
              </div>
            ))}
          </div>

          <div className="days-grid">{renderCalendarDays()}</div>

          {/* Time selection */}
          {selectedDate && (
            <motion.div
              className="time-selection"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <h3>Available Times</h3>
              <div className="time-slots">
                {availableTimes.map((time) => (
                  <Button
                    key={time}
                    type={selectedTime === time ? "primary" : "default"}
                    className={`time-slot ${
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

          {/* Timezone selector */}
          <div className="timezone-selector">
            <label>Time zone</label>
            <Select
              value={timeZone}
              onChange={setTimeZone}
              className="timezone-dropdown"
            >
              <Option value="China, Singapore, Perth (UTC+8)">
                China, Singapore, Perth{" "}
                {`(${new Date().getHours()}:${new Date().getMinutes()}${
                  new Date().getHours() >= 12 ? "pm" : "am"
                })`}
              </Option>
              <Option value="London (UTC+0)">London (UTC+0)</Option>
              <Option value="New York (UTC-5)">New York (UTC-5)</Option>
              <Option value="Tokyo (UTC+9)">Tokyo (UTC+9)</Option>
            </Select>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookingCalendar;

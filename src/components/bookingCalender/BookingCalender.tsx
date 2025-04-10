import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Select, Button, Modal, Switch } from "antd";

import logo1 from "../../images/logo (1).png";

import {
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  VideoCameraOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
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
const date = `☯︎ Pakistan, Maldives Time (${
  new Date().getHours() > 12
    ? new Date().getHours() - 12
    : new Date().getHours()
}:${new Date().getMinutes()}${new Date().getHours() >= 12 ? "pm" : "am"}) `;
const BookingCalendar: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeZone, setTimeZone] = useState(date);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [availableMonths, setAvailableMonths] = useState<Date[]>([]);
  const [isCookieModalVisible, setIsCookieModalVisible] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpenGuest, setIsOpenGuest] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpeningInvitation, setIsOpeningInvitation] = useState(false);
  const [currentStep, setCurrentStep] = useState<
    "calendar" | "form" | "confirmation"
  >("calendar");
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
  // open quest field
  const isOpenGuestField = () => {
    setIsOpenGuest(true);
  };

  // Timezone data with current times
  // const timeZones = [
  //   {
  //     value: "Asia/Singapore",
  //     label: "Singapore (SGT)",
  //     currentTime: new Date().toLocaleTimeString("en-US", {
  //       timeZone: "Asia/Singapore",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //   },
  //   {
  //     value: "America/New_York",
  //     label: "New York (EST)",
  //     currentTime: new Date().toLocaleTimeString("en-US", {
  //       timeZone: "America/New_York",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //   },
  //   {
  //     value: "Europe/London",
  //     label: "London (GMT)",
  //     currentTime: new Date().toLocaleTimeString("en-US", {
  //       timeZone: "Europe/London",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //   },
  //   {
  //     value: "Asia/Tokyo",
  //     label: "Tokyo (JST)",
  //     currentTime: new Date().toLocaleTimeString("en-US", {
  //       timeZone: "Asia/Tokyo",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //   },
  //   {
  //     value: "Australia/Sydney",
  //     label: "Sydney (AEST)",
  //     currentTime: new Date().toLocaleTimeString("en-US", {
  //       timeZone: "Australia/Sydney",
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //   },
  // ];
  interface TimeZoneOption {
    value: string;
    label: string;
    currentTime: string;
  }
  const timeZones: TimeZoneOption[] = [
    { value: "Pacific/Niue", label: "Niue (NUT)", currentTime: "2:14am" },
    {
      value: "Pacific/Pago_Pago",
      label: "Pago Pago (SST)",
      currentTime: "3:14am",
    },
    {
      value: "Pacific/Honolulu",
      label: "Honolulu (HST)",
      currentTime: "3:14am",
    },
    {
      value: "America/Anchorage",
      label: "Anchorage (AKST)",
      currentTime: "5:14am",
    },
    {
      value: "America/Los_Angeles",
      label: "Los Angeles (PST)",
      currentTime: "6:14am",
    },
    { value: "America/Denver", label: "Denver (MST)", currentTime: "7:14am" },
    { value: "America/Chicago", label: "Chicago (CST)", currentTime: "8:14am" },
    {
      value: "America/New_York",
      label: "New York (EST)",
      currentTime: "9:14am",
    },
    {
      value: "America/Halifax",
      label: "Halifax (AST)",
      currentTime: "10:14am",
    },
    {
      value: "America/St_Johns",
      label: "St. Johns (NST)",
      currentTime: "10:44am",
    },
    {
      value: "America/Sao_Paulo",
      label: "Sao Paulo (BRT)",
      currentTime: "11:14am",
    },
    {
      value: "Atlantic/Cape_Verde",
      label: "Cape Verde (CVT)",
      currentTime: "12:14pm",
    },
    { value: "Europe/London", label: "London (GMT)", currentTime: "1:14pm" },
    { value: "Europe/Paris", label: "Paris (CET)", currentTime: "2:14pm" },
    { value: "Europe/Athens", label: "Athens (EET)", currentTime: "3:14pm" },
    { value: "Europe/Moscow", label: "Moscow (MSK)", currentTime: "4:14pm" },
    { value: "Asia/Dubai", label: "Dubai (GST)", currentTime: "5:14pm" },
    { value: "Asia/Karachi", label: "Karachi (PKT)", currentTime: "6:14pm" },
    { value: "Asia/Kolkata", label: "Kolkata (IST)", currentTime: "6:44pm" },
    { value: "Asia/Dhaka", label: "Dhaka (BST)", currentTime: "7:14pm" },
    { value: "Asia/Bangkok", label: "Bangkok (ICT)", currentTime: "8:14pm" },
    { value: "Asia/Shanghai", label: "Shanghai (CST)", currentTime: "9:14pm" },
    { value: "Asia/Tokyo", label: "Tokyo (JST)", currentTime: "10:14pm" },
    {
      value: "Australia/Sydney",
      label: "Sydney (AEDT)",
      currentTime: "11:14pm",
    },
    {
      value: "Pacific/Norfolk",
      label: "Norfolk Island (NFT)",
      currentTime: "12:14am",
    },
    {
      value: "Pacific/Auckland",
      label: "Auckland (NZDT)",
      currentTime: "1:14am",
    },
    {
      value: "Pacific/Chatham",
      label: "Chatham (CHADT)",
      currentTime: "1:59am",
    },
    {
      value: "Pacific/Tongatapu",
      label: "Tongatapu (TOT)",
      currentTime: "2:14am",
    },
    {
      value: "Pacific/Kiritimati",
      label: "Kiritimati (LINT)",
      currentTime: "3:14am",
    },
    { value: "America/Adak", label: "Adak (HADT)", currentTime: "4:14am" },
    { value: "America/Phoenix", label: "Phoenix (MST)", currentTime: "7:14am" },
    { value: "America/Toronto", label: "Toronto (EST)", currentTime: "9:14am" },
    {
      value: "America/Vancouver",
      label: "Vancouver (PST)",
      currentTime: "6:14am",
    },
    { value: "America/Bogota", label: "Bogota (COT)", currentTime: "9:14am" },
    { value: "America/Caracas", label: "Caracas (VET)", currentTime: "9:44am" },
    {
      value: "America/Santiago",
      label: "Santiago (CLST)",
      currentTime: "11:14am",
    },
    {
      value: "America/Argentina/Buenos_Aires",
      label: "Buenos Aires (ART)",
      currentTime: "11:14am",
    },
    { value: "America/Godthab", label: "Nuuk (WGT)", currentTime: "12:14pm" },
    {
      value: "Atlantic/Azores",
      label: "Azores (AZOT)",
      currentTime: "12:14pm",
    },
    {
      value: "Africa/Casablanca",
      label: "Casablanca (WET)",
      currentTime: "1:14pm",
    },
    { value: "Africa/Lagos", label: "Lagos (WAT)", currentTime: "2:14pm" },
    {
      value: "Africa/Johannesburg",
      label: "Johannesburg (SAST)",
      currentTime: "3:14pm",
    },
    { value: "Asia/Beirut", label: "Beirut (EET)", currentTime: "3:14pm" },
    {
      value: "Asia/Jerusalem",
      label: "Jerusalem (IST)",
      currentTime: "3:14pm",
    },
    { value: "Asia/Baghdad", label: "Baghdad (AST)", currentTime: "4:14pm" },
    { value: "Asia/Tehran", label: "Tehran (IRST)", currentTime: "4:44pm" },
    {
      value: "Asia/Yekaterinburg",
      label: "Yekaterinburg (YEKT)",
      currentTime: "6:14pm",
    },
    { value: "Asia/Almaty", label: "Almaty (ALMT)", currentTime: "7:14pm" },
    {
      value: "Asia/Novosibirsk",
      label: "Novosibirsk (NOVT)",
      currentTime: "8:14pm",
    },
    {
      value: "Asia/Krasnoyarsk",
      label: "Krasnoyarsk (KRAT)",
      currentTime: "9:14pm",
    },
    { value: "Asia/Irkutsk", label: "Irkutsk (IRKT)", currentTime: "10:14pm" },
    { value: "Asia/Yakutsk", label: "Yakutsk (YAKT)", currentTime: "11:14pm" },
    {
      value: "Asia/Vladivostok",
      label: "Vladivostok (VLAT)",
      currentTime: "12:14am",
    },
    { value: "Asia/Magadan", label: "Magadan (MAGT)", currentTime: "1:14am" },
    {
      value: "Asia/Kamchatka",
      label: "Kamchatka (PETT)",
      currentTime: "2:14am",
    },
    { value: "Pacific/Fiji", label: "Fiji (FJT)", currentTime: "1:14am" },
    { value: "Pacific/Guam", label: "Guam (ChST)", currentTime: "11:14pm" },
    { value: "Pacific/Majuro", label: "Majuro (MHT)", currentTime: "1:14am" },
    { value: "Pacific/Tahiti", label: "Tahiti (TAHT)", currentTime: "3:14am" },
  ].map((tz) => ({
    ...tz,
    currentTime: new Date().toLocaleTimeString("en-US", {
      timeZone: tz.value,
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));
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
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="booking-form"
    >
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
        <Button
          // color="default"
          className={`border border-blue-400 text-blue-400`}
          variant="outlined"
          shape="round"
          onClick={isOpenGuestField}
        >{`${isOpenGuest ? "Guest Email(s)" : "Add Guests"}`}</Button>
        {isOpenGuest && (
          <>
            <textarea
              // type="text"
              value={formData.guests.join(", ")}
              onChange={(e) =>
                setFormData({ ...formData, guests: e.target.value.split(", ") })
              }
            />
            <p className="text-[11px]">
              Notify up to 10 additional guests of the scheduled event.
            </p>
          </>
        )}
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
        <p className="text-xs">
          By proceeding, you confirm that you have read and agree to{" "}
          <a href="./calendry" className="text-blue-500">
            {" "}
            Calendly's Terms of Use
          </a>{" "}
          and{" "}
          <a href="./privacy" className="text-blue-500">
            {" "}
            Privacy Notice.
          </a>
        </p>
      </div>

      <div className="form-actions">
        <Button
          className="p-4"
          shape="round"
          onClick={() => setCurrentStep("calendar")}
        >
          Back
        </Button>
        <Button
          className="p-4 font-semibold"
          type="primary"
          shape="round"
          onClick={handleSubmit}
          loading={isSubmitting}
        >
          {isSubmitting ? "Scheduling..." : "Schedule Event"}
        </Button>
      </div>
    </motion.div>
  );
  // hanle confirmation message
  const renderConfirmation = () => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="confirmation-screen"
    >
      {/* <p className="absolute top-2 left-0">
        <ArrowLeftOutlined />
      </p> */}
      <h2 className="text-2xl font-bold pb-1">
        {" "}
        <CheckCircleOutlined style={{ color: "#00a854" }} /> You are scheduled
      </h2>
      <p className="confirmation-message">
        A calendar invitation has been sent to your email address.
        {/* {formData.email} */}
      </p>
      <Button
        type="default"
        variant="outlined"
        shape="round"
        className="open-invitation-btn"
        loading={isOpeningInvitation}
        onClick={() => {
          setIsOpeningInvitation(true);
          // Simulate opening invitation
          setTimeout(() => {
            alert(`Invitation sent to ${formData.email}`);
            window.open(
              `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240410T090000Z/20240410T093000Z&text=Business+Audit&details=Meeting+with+${encodeURIComponent(
                formData.name
              )}&location=Video+Call`,
              "_blank"
            );
            setIsOpeningInvitation(false);
          }, 800);
        }}
      >
        {isOpeningInvitation ? "Opening..." : "Open Invitation 💬"}
      </Button>
      <div className="booking-summary">
        <h3 className="text-lg font-semibold">Business Audit</h3>
        <p>
          {" "}
          <UserOutlined /> Julian Stancioff
        </p>
        <p>
          <CalendarOutlined /> {selectedTime} -{" "}
          {new Date(+20 * 60000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          ,{formatSelectedDate()}, {new Date().getFullYear()}
        </p>
        <p>
          <GlobalOutlined /> {timeZone}
        </p>
        <p>
          {" "}
          <VideoCameraOutlined /> Web conferencing details to follow.
        </p>
      </div>
      <Button
        className="p-1"
        shape="round"
        onClick={() => setCurrentStep("form")}
      >
        Back
      </Button>{" "}
      <Button className="cookie-settings-btn" onClick={showCookieModal}>
        Cookie settings
      </Button>
    </motion.div>
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
    // Set loading state
    setIsSubmitting(true);
    // Submit the form data along with the selected date/time
    const bookingData = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      timeZone,
    };

    console.log("Submitting booking:", bookingData);
    // Here you would typically make an API call to submit the booking
    // Simulate email sending
    setTimeout(() => {
      setIsSubmitting(false); // Turn off loading when done
      setCurrentStep("confirmation");
    }, 2000);
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
            className="text-3xl md:text-[45px] font-bold text-[#272364] leading-[54px]"
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
          <a
            href="https://calendly.com/landing/booking-badge?utm_campaign=sign_up&utm_medium=badge&utm_source=invitee"
            target="_blan"
            className="powered-by"
          >
            <span>POWERED BY</span>
            <strong>Calendry</strong>
          </a>

          {/* Left scrollable section */}
          {/* {
            currentStep === "confirmation" &&()
          } */}
          <div
            className={`info-section ${
              currentStep === "confirmation" ? "hidden" : "block"
            }`}
          >
            <div className="border-b-2 mb-5 text-center mx-auto">
              <img
                src="https://d3v0px0pttie1i.cloudfront.net/uploads/branding/logo/ee19a8a4-5a3d-4bc2-a1d5-ccafa4afc1dd/e2b4dd84.png"
                alt="calendar bg"
                className="flex justify-center mx-auto pb-3 items-center min-h-[120px] max-w-[120px]"
              />
            </div>
            <div className="info-content">
              <h3 className="text-base text-black opacity-60 leading-[24px] font-semibold">
                Julian Stancioff
              </h3>
              <h4 className="text-[28px] font-bold text-[#0a2540]">
                Business Audit
              </h4>
              <p className="duration">🕒 20 min</p>
              <p className="conference-details">
                <VideoCameraOutlined /> Web conferencing details provided upon
                confirmation.
              </p>
              {
                // show calendar and time zone based date & time selection
              }
              {currentStep === "form" && (
                <p className="selected-time">
                  <CalendarOutlined /> {selectedTime} -{" "}
                  {new Date(20 * 60000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  ,{formatSelectedDate()}, {new Date().getFullYear()}
                </p>
              )}
              {currentStep === "form" && (
                <p>
                  <GlobalOutlined /> {timeZone} Time
                </p>
              )}
              <p className="welcome-message">
                Welcome to Elixir Automation's booking page!
                <br />
                <br />
                {expanded ? fullText : shortText}
              </p>
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-1 text-gray-600 font-semibold hover:underline text-sm "
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            </div>
            <button
              className="hidden md:block relative top-2 text-blue-500 text-xs md:text-sm hover:underline"
              onClick={showCookieModal}
            >
              Cookie settings
            </button>
          </div>

          {/* Right calendar section */}

          {currentStep === "calendar" && (
            <>
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

                <div className="timezone-selector mt-8">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Time zone
                  </label>
                  <Select
                    showSearch
                    value={timeZone}
                    variant="filled"
                    onChange={setTimeZone}
                    className="timezone-dropdown w-full"
                    size="small"
                    optionFilterProp="children"
                    filterOption={(
                      input: string,
                      option?: { children?: string }
                    ) => {
                      if (!option?.children) return false;
                      return option?.children
                        .toLowerCase()
                        .includes(input.toLowerCase());
                    }}
                    placeholder="Search..."
                  >
                    {timeZones.map((tz) => (
                      <Option key={tz.value} value={tz.value}>
                        ☯︎ {tz.label} ({tz.currentTime})
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              {selectedDate && (
                <motion.div
                  className="time-selection-sidebar"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Selected date display */}
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="selected-date-display"
                    >
                      {formatSelectedDate()}
                    </motion.div>
                  )}
                  <h3 className="text-lg font-semibold mb-4">
                    Available Times
                  </h3>
                  <div className="time-slots">
                    {availableTimeSlots.map((time) => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        key={time}
                        className="time-slot-container"
                      >
                        <AnimatePresence>
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
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                              <Button
                                type="primary"
                                className="next-button"
                                onClick={() => setCurrentStep("form")}
                              >
                                Next
                              </Button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          )}
          {currentStep === "form" && renderForm()}
          {currentStep === "confirmation" && renderConfirmation()}
          {/* Time selection (positioned to the right) */}

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
            <hr className="mt-2 mb-2" />
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

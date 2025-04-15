import React, { useEffect } from "react";
import "./serviceHeroSection.css";
import { Divider, Button, Card } from "antd";
import { ShoppingCartOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
interface Benefit {
  Id: number;
  title: string;
  description: string;
}
interface PurchasePlan {
  id: number;
  cardImg: string;
  title: string;
  startAmount: string;
  price: number;
  description: string;
  viewMore: string;
  OrderNow: string;
  // order nowdata data
  herosectionImg: string;
  benefits: Benefit[]; // Properly typed array of benefits
}
const PurchasePlanData: PurchasePlan[] = [
  {
    id: 1,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/wmremove-transformed-r3dlaflyyyeguv85tvjegjtccrhd5rp8voab9cwb3s.jpeg",

    title: "RAG AI Agent Chatbot (Retrieval-Augmented Generation)",
    startAmount: "Starting From",
    price: 450,
    description:
      "A next-level AI chatbot that taps into your existing knowledge base (like Google Drive, Notion, or any data source) to provide accurate, context-specific responses in real time. It can be deployed across channels—Telegram, WhatsApp, SMS, or your website—ensuring your users get the right info exactly when they need it",
    viewMore: "View More",
    OrderNow: "Order Now",
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/robot-chat-1.png",
    // order now data
    // herosectionImg : ''
    benefits: [
      {
        Id: 1,
        title: "Contextual Accuracy",
        description: "Retrieves relevant data from your knowledge base",
      },
      {
        Id: 2,
        title: "Real-Time Updates",
        description: "Always references the most current info",
      },
      {
        Id: 3,
        title: "Multi-Channel Support",
        description: "Works across Telegram, WhatsApp, SMS and more",
      },
      {
        Id: 4,
        title: "Scalable Support:",
        description:
          "Handles massive volumes of queries without sacrificing quality.",
      },
    ],
  },
  {
    id: 2,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/66928-1-r0qmh1swniqq3rzrazzw8p6hgs8mzv0pz6ogyoyla0.jpg",

    title: "Phantom Workflows – LinkedIn Lead Generation",
    startAmount: "Starting From",
    price: 650,
    description:
      "Automates the entire LinkedIn prospecting cycle—from scanning profiles and sending connection requests to messaging leads. Designed to find your ideal prospects faster and kickstart meaningful conversations without the manual grind.",
    viewMore: "View More",
    OrderNow: "Order Now",
    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/linkedin.png",
    benefits: [
      {
        Id: 1,
        title: "Time Saver",
        description: "Frees your team from repetitive LinkedIn tasks.",
      },
      {
        Id: 2,
        title: "Better Targeting",
        description: "Zero in on your ideal customer profile.",
      },
      {
        Id: 3,
        title: "Scalability",
        description: "Ramp up or scale down based on campaign goals.",
      },
    ],
  },
  {
    id: 3,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/71140-1-r0qx423fg91uvpnht228qjr3dyfwfwjaawe1qn2jw8.jpg",

    title: "LinkedIn Outreach: Connect & Follow-Up",
    startAmount: "Starting From",
    price: 750,
    description:
      "An automated outreach solution that handles connection requests, follow-up messages, and scheduling—your behind-the-scenes sales rep working 24/7 on LinkedIn.",
    viewMore: "View More",
    OrderNow: "Order Now",
    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/linkedin.png",
    benefits: [
      {
        Id: 1,
        title: "Consistent Pipeline",
        description: "Ensures constant engagement with new leads",
      },
      {
        Id: 2,
        title: "Personal Touch",
        description: "Customizable messaging avoids spammy vibes.",
      },
      {
        Id: 3,
        title: "Increased Conversions",
        description: "Timely follow-ups drive higher response rates.",
      },
    ],
  },
  {
    id: 4,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/122994-1-r0qxbmomi7f0emnjlbw1tmyrnp4cg4lg0dkuwvudrs.jpg",

    title: "Automated Digital Invoice",
    startAmount: "Starting From",
    price: 800,
    description:
      "A streamlined invoice generation and distribution system that captures data, creates professional invoices, and notifies clients automatically.",
    viewMore: "View More",
    OrderNow: "Order Now",
    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/invoice.png",
    benefits: [
      {
        Id: 1,
        title: "Error Reduction",
        description: "Eliminate manual invoice mistakes.",
      },
      {
        Id: 2,
        title: "Faster Payments",
        description: "Automated reminders speed up cash flow.",
      },
      {
        Id: 3,
        title: "Scalability",
        description:
          "Perfect for startups or large enterprises with global invoicing.",
      },
    ],
  },
  {
    id: 5,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/307-1-r0qxex4afbx51hvidr31jt2ui8wldznmgns1dqyrzs.jpg",

    title: "Credit Lead Generation Systems",
    startAmount: "Starting From",
    price: 825,
    description:
      "Captures credit-seeking leads, runs basic qualification, and routes them into a sales pipeline for easy follow-up.",
    viewMore: "View More",
    OrderNow: "Order Now",
    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/attraction-icon.png",
    benefits: [
      {
        Id: 1,
        title: "Targeted Leads",
        description: "Focus on prospects who actually need credit products.",
      },
      {
        Id: 2,
        title: "Automatic Qualification",
        description: "Pre-checks creditworthiness to save time.",
      },
      {
        Id: 3,
        title: "Better Conversion",
        description: "Sends hot leads directly to your sales team.",
      },
    ],
  },
  {
    id: 6,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/26312-1-r0qxhtgdhxvyu7nygi6mqkr0g0mc4e5tv06xngo2t4.jpg",

    title: "AI Voice Agent",
    startAmount: "Starting From",
    price: 1500,
    description:
      "An intelligent voice-based system that handles inbound calls, answers FAQs, and routes calls to the right department if needed.",
    viewMore: "View More",
    OrderNow: "Order Now",
    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/ai-assistant.png",
    benefits: [
      {
        Id: 1,
        title: "Round-the-Clock Support",
        description: "Customers get answers anytime.",
      },
      {
        Id: 2,
        title: "Reduced Workload",
        description: "Frees up human agents for complex tasks.",
      },
      {
        Id: 3,
        title: "Multilingual Options:",
        description: "Expand globally without language barriers.",
      },
    ],
  },
  {
    id: 7,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/73636-1-r0qxlg3xvwuto0e69knrv5s30kqcubkioyvfcxacs8.jpg",

    title: "Airtable Inventory Management Base with AI Insights",
    startAmount: "Starting From",
    price: 1250,
    description:
      "A fully automated inventory tracking system built on Airtable, complete with triggers for restock alerts and real-time reporting.",
    viewMore: "View More",
    OrderNow: "Order Now",
    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/inventory-management-1.png",
    benefits: [
      {
        Id: 1,
        title: "User-Friendly",
        description: "Airtable’s intuitive interface makes it a breeze.",
      },
      {
        Id: 2,
        title: "Accurate Stock Counts",
        description: "Avoid overselling or stockouts.",
      },
      {
        Id: 3,
        title: "Cross-Platform",
        description: "Sync with e-commerce sites or POS systems seamlessly.",
      },
    ],
  },
  {
    id: 8,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/2149060259-1-r0qxrdhazaywvhs8nmw335xpv1iodm3l6aynaqhzjs.jpg",

    title: "External Communication Chatbots & Autoresponses",
    startAmount: "Starting From",
    price: 1250,
    description:
      "A chatbot/autoresponder system for external channels like your website, email, or social platforms. It handles FAQs, routes questions, and follows up automatically.",
    viewMore: "View More",
    OrderNow: "Order Now",

    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/chatbot-speech-bubble.png",
    benefits: [
      {
        Id: 1,
        title: "Always-On Support",
        description: "Instant responses, day or night.",
      },
      {
        Id: 2,
        title: "Consistent Branding:",
        description: "Centralized messaging ensures an on-brand experience.",
      },
      {
        Id: 3,
        title: "Cost-Effective",
        description: "Reduce the need for large support teams.",
      },
    ],
  },
  {
    id: 9,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/121040-1-r0qxumz4plfr6r1kljog8uac47fk3s21agicabnry0.jpg",

    title: "Automated Onboarding Workflow",
    startAmount: "Starting From",
    price: 800,
    description:
      "An end-to-end onboarding journey for new clients or employees, covering email sequences, data collection, and progress tracking.",
    viewMore: "View More",
    OrderNow: "Order Now",
    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/process.png",
    benefits: [
      {
        Id: 1,
        title: "Faster Adoption",
        description: "Get new users up to speed quickly",
      },
      {
        Id: 2,
        title: "Personalized Experience",
        description: "Tailor flows based on user role or preferences.",
      },
      {
        Id: 3,
        title: "Visibility",
        description: "Real-time analytics on user progress.",
      },
    ],
  },
  {
    id: 10,
    cardImg:
      "https://elixirautomation.com/wp-content/uploads/elementor/thumbs/66928-1-r0qmh1swniqq3rzrazzw8p6hgs8mzv0pz6ogyoyla0.jpg",

    title: "Automated Content Generator for Social Media",
    startAmount: "Starting From",
    price: 1250,
    description:
      "Our top-selling service automates content creation for any type of social media channel, newsletters, articles, blogs, or short-form video captions. Reduce the manual effort of brainstorming topics and scheduling content.",
    viewMore: "View More",
    OrderNow: "Order Now",
    // order now data
    herosectionImg:
      "https://elixirautomation.com/wp-content/uploads/2025/03/content-management_3222472.png",
    benefits: [
      {
        Id: 1,
        title: "Creative Consistency",
        description: "Never run out of content ideas.",
      },
      {
        Id: 2,
        title: "Time Efficiency",
        description: "Automates posting so you can focus on strategy.",
      },
      {
        Id: 3,
        title: "Data-Driven Insights:",
        description: "Track engagement and optimize future content.",
      },
    ],
  },
];

const ServiceHeroSection = () => {
  useEffect(() => {
    document.title = "Services - Elixir Automation .";
  }, []);
  const navigate = useNavigate();

  const goToOrderNow = (plan: PurchasePlan) => {
    // Convert title to URL-friendly format
    const urlFriendlyTitle = plan.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except dashes
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-"); // Remove consecutive dashes

    navigate(`/orderNow/${urlFriendlyTitle}`, {
      state: {
        plan: plan,
      },
      replace: false, // Ensure this is false to allow navigation
    });
  };

  // const userInfo = (name:any) => {
  //   navigate(`/userinfo/${name}`);
  // };
  return (
    <div className="service_heroSection_main">
      <section className="service_Section">
        {/* Background Video Container */}
        <div className="background_video_container">
          <video
            className="elementor-background-video-hosted"
            autoPlay
            muted
            playsInline
            loop
            src="https://elixirautomation.com/wp-content/uploads/2025/01/services-video-bg-2.m4v"
          ></video>
          <div className="serviceHero-background-overlay"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="hero_content_container"
        >
          <div className="widget-container lg:hidden block">
            <img
              decoding="async"
              width="10000"
              height="7000"
              src="https://elixirautomation.com/wp-content/uploads/2025/03/bussinesman_activity_one_line_4-Converted-01.png"
              className="attachment-full size-full wp-image-2006 w-[100%]"
              alt="hero avatar"
            />{" "}
          </div>
          <div className="hero_text_content">
            <h2 className="hero_subtitle">Automation Service Offerings</h2>
            <h1 className="service_hero_title">
              TAKE YOUR <br /> BUSINESS <br /> TO NEXT LEVEL
            </h1>
            <div className="divider">
              <Divider
                // variant="dashed"
                style={{ borderColor: "#ffffff", borderWidth: "1px" }}
              />
            </div>
            <p className="hero_description">
              Our network is built on a foundation of skilled professionals who
              specialize in AI, automation, and creating custom solutions.
              Together, we bring innovative ideas to life, helping businesses
              streamline operations and save time.
            </p>
            <button className="hero_cta_button">
              Hire Our Team{" "}
              <span>
                <ShoppingCartOutlined />
              </span>
            </button>
          </div>
          <div className="widget-container hidden lg:block">
            <img
              decoding="async"
              width="10000"
              height="7000"
              src="https://elixirautomation.com/wp-content/uploads/2025/03/bussinesman_activity_one_line_4-Converted-01.png"
              className="attachment-full size-full wp-image-2006 w-[100%]"
              alt="hero avatar"
            />{" "}
          </div>
        </motion.div>
      </section>
      {/* Overlay Cards (positioned 15% over the video) */}
      <div className="max-w-[1350px] mx-auto px-4 py-10 transform md:translate-y-[-3%] lg:translate-y-[-6%] ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 relative"
        >
          {PurchasePlanData.map((plan) => (
            <>
              <Card
                key={plan.id}
                hoverable
                className="purchase-plan-card flex flex-col h-full"
                cover={
                  <img
                    alt={plan.title}
                    src={plan.cardImg}
                    className="w-48  object-cover"
                  />
                }
              >
                <div className="purchase_card_overlay"></div>
                <div className="">
                  <span
                    className="flex mb-2 mt-3 items-center gap-1
                  "
                  >
                    <span className="cardSr_No">
                      <h1 className="font-extrabold w-[50px] h-[50px] inline-block">
                        {plan.id}
                      </h1>
                    </span>
                    <h2 className="font-[Figtree] font-extrabold text-[#272364] text-lg leading-[1.2em]">
                      {plan.title}
                    </h2>
                  </span>
                  <span className="price_plan">
                    <h4>{plan.startAmount}</h4> <h1>${plan.price}</h1>
                  </span>
                  <p className="purchase_card_description">
                    {plan.description}
                  </p>

                  <div className="button-pair-container flex justify-between items-center pt-4 mt-auto">
                    <Button
                      type="link"
                      className="view-more-button"
                      onClick={() => goToOrderNow(plan)}
                    >
                      {plan.viewMore}{" "}
                      <ArrowRightOutlined className="button-icon" />
                    </Button>
                    <Button
                      type="primary"
                      className="order-now-button"
                      onClick={() => goToOrderNow(plan)} // Pass the current plan
                    >
                      {plan.OrderNow}{" "}
                      <ShoppingCartOutlined className="button-icon" />
                    </Button>
                  </div>
                </div>
              </Card>
            </>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;

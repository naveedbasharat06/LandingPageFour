import React from "react";
import "./serviceHeroSection.css";
import { Divider, Button, Card } from "antd";
import { ShoppingCartOutlined, ArrowRightOutlined } from "@ant-design/icons";
interface PurchasePlan {
  id: number;
  cardImg: string;
  title: string;
  startAmount: string;
  price: number;
  description: string;
  viewMore: string;
  OrderNow: string;
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
  },
];

const ServiceHeroSection = () => {
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
        <div className="hero_content_container">
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
            <h1 className="hero_title">
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
        </div>
      </section>
      {/* Overlay Cards (positioned 15% over the video) */}
      <div className="max-w-[1350px] mx-auto px-4 py-10 transform md:translate-y-[-3%] lg:translate-y-[-6%] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {PurchasePlanData.map((plan) => (
            <>
              <Card
                key={plan.id}
                hoverable
                className="purchase-plan-card"
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
                    <Button type="link" className="view-more-button">
                      {plan.viewMore}{" "}
                      <ArrowRightOutlined className="button-icon" />
                    </Button>
                    <Button type="primary" className="order-now-button">
                      {plan.OrderNow}{" "}
                      <ShoppingCartOutlined className="button-icon" />
                    </Button>
                  </div>
                </div>
              </Card>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;

import React, { useEffect } from "react";
import { Divider, Button, Card } from "antd";
import { ShoppingCartOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
// import { useParams } from "react-router-dom";
// Add these imports at the top
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderNowHeroSection.css";
const tiers = [
  {
    id: 1,
    title: "Tier 1",
    packageName: "JSON Blueprint",
    price: "$750",
    buttonText: "Order Now ",
    features: [
      "Content selection logic, scheduling structure, and post templates.",
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Tier 2",
    packageName: "JSON Blueprint + Basic Implementation (API Integration)",
    price: "$2750",
    buttonText: "Order Now",
    features: [
      "Tier 1 + social platform integrations (Facebook, Instagram, LinkedIn).",
    ],
  },
  {
    id: 3,
    title: "Tier 3",
    packageName:
      "JSON Blueprint + Basic Implementation + Advanced Implementation",
    price: "$5250",
    buttonText: "Order Now",
    features: [
      "Tier 2 + AI-powered topic analysis, multi-platform optimization, and real-time engagement tracking.",
    ],
  },
];

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
const OrderNowHeroSection = () => {
  // const { title } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan as PurchasePlan;
  useEffect(() => {
    document.title = `${plan.title} - Elixir Automation`;
  }, [plan.title]);
  if (!plan) {
    return (
      <div className="p-8 text-center">
        <h2>No service selected</h2>
        <Button onClick={() => navigate("/services")}>Back to Services</Button>
      </div>
    );
  }
  const goToAddToCard = (plan: PurchasePlan) => {
    // Convert title to URL-friendly format
    const urlFriendlyTitle = plan.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except dashes
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/-+/g, "-"); // Remove consecutive dashes

    navigate(`/addToCard/${urlFriendlyTitle}`, {
      state: {
        plan: plan,
      },
      replace: false, // Ensure this is false to allow navigation
    });
  };
  return (
    <div>
      <Navbar />
      <section className="OrderNow_Section">
        <div className="OrderNow_background_video_container">
          <video
            className="OrderNow-background-video-hosted"
            autoPlay
            muted
            playsInline
            loop
            src="https://elixirautomation.com/wp-content/uploads/2025/01/services-video-bg-2.m4v"
          ></video>
          <div className="serviceHero-background-overlay"></div>
        </div>
        {/* Background Video Container */}
        {/* <h1 className="bg-blue-400 p-3 rounded-3xl">Ordering: {decodedName}</h1> */}
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="hero_content_container gap-3"
        >
          <div className="widget-container lg:hidden block">
            <img
              decoding="async"
              width="10000"
              height="7000"
              src={plan.herosectionImg}
              className="attachment-full  wp-image-2006 w-[90%]"
              alt="hero avatar"
            />{" "}
          </div>
          <div className="hero_text_content">
            <h1 className="hero_title">{plan.title}</h1>
            {/* <h2 className="hero_subtitle">{`(Retrieval-Augmented Generation)`}</h2> */}
            <div className="divider">
              <Divider
                // variant="dashed"
                style={{ borderColor: "#ffffff", borderWidth: "1px" }}
              />
            </div>
            <p className="hero_description">{plan.description}</p>
            <div className="flex-col md:flex-row gap-3">
              <button className="hero_cta_button">
                Hire Our Team{" "}
                <span>
                  <ShoppingCartOutlined />
                </span>
              </button>
              <button className="hero_cta_button_Hide_team">
                Hide Our Team{" "}
                <span>
                  <ArrowRightOutlined />
                </span>
              </button>
            </div>
          </div>
          <div className="widget-container hidden lg:block">
            <img
              decoding="async"
              width="10000"
              height="7000"
              src={plan.herosectionImg}
              className="attachment-full size-full wp-image-2006 w-[80%]"
              alt={`hero avatar :${plan.id} `}
            />{" "}
          </div>
        </motion.div>
      </section>

      {/* benifits cards  */}
      <div className="our_benifits transform lg:translate-y-[-30%]">
        <div className="benefit_background_overlay"></div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="pt-3"
        >
          <h2 className="benefits_title">Key Benefits</h2>
          <div className="max-w-[1350px] mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
              {plan.benefits.map((item, index) => (
                <Card key={item.Id} hoverable className="benefits-card">
                  <span className="px-4 py-2 bg-[#B34B98]  text-white text-[25px] rounded-full">
                    ✓
                  </span>
                  <h2 className="benefits_card_title">{item.title}:</h2>
                  <h2 className="benefits_card_description">
                    {item.description}
                  </h2>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {/* Pricing Package page  */}
      <section className="pricing-package-container">
        <div className="pricing-header">
          <h1>Elixir Automation</h1>
          <h2>Pricing Package</h2>
        </div>
        <div className="pricing_popular_text">
          {" "}
          <h2>POPULAR</h2>{" "}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="pricing-tiers mx-auto max-w-[1350px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-3"
        >
          {tiers.map((tier) => (
            <Card key={tier.id} className={`pricing-tier-card`}>
              <div className="pricing_package_bg_overlay"></div>

              <div className="tier-header">
                <h3>{tier.title}</h3>
                <h4>{tier.packageName}</h4>
                <Divider className="tier-divider" />
              </div>

              <ul className="tier-features">
                {tier.features.map((feature, index) => (
                  <div className="flex gap-1 items-start">
                    <span className="feature-check">✓</span>
                    <li key={index}>{feature}</li>
                  </div>
                ))}
              </ul>

              <div className="tier-price z-20">
                <h2>{tier.price}</h2>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  className="order-button"
                  onClick={() => goToAddToCard(plan)} // Pass the current plan
                >
                  {tier.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default OrderNowHeroSection;

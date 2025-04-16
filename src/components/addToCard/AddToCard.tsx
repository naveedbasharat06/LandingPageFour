import { useEffect, useState } from "react";
import "./AddTCard.css";
import { Button, Alert } from "antd";
import googlepaylogo from "../../images/google-pay.png";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
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
const AddToCard = () => {
  // const { title } = useParams();
  const [showAlert, setShowAlert] = useState(false);
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

  const handleAddtoCard = () => {
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  return (
    <div className="addToCart_main">
      <Navbar />
      <img
        className="top-0"
        src="https://elixirautomation.com/wp-content/uploads/2025/01/border-new-01-1.svg"
        alt=""
      />
      {/* Alert Notification */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed top-20 right-4 z-50"
        >
          <Alert
            message="Item Added to Cart"
            description={`${plan.title} has been added to your shopping cart.`}
            type="success"
            showIcon
            closable
            onClose={() => setShowAlert(false)}
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className=""
      >
        <div className="addToCart_background_overlay"></div>
        <div className="addToCart_content">
          <div className="addTocart_image">
            <img
              id="addtocardImg"
              //   width={500}
              alt="product pics"
              src={plan.cardImg}
            />
          </div>
          <div className="addToCart_payment">
            <h1>{plan.title}</h1>
            <h2>${plan.price.toLocaleString()}</h2>
            <h4>JSON Blueprint + Basic Implementation {`(API Integration)`}</h4>
            <p>
              Includes Tier 1 + minimal hassle setup with LinkedIn and CRM
              integrations.
            </p>
            <div className="flex flex-col gap-0.5">
              <Button id="addtocart_btn" onClick={handleAddtoCard}>
                Add To Cart
              </Button>

              <span id="google_pay">
                <img
                  src={googlepaylogo}
                  className="w-[60px] items-center mx-auto text-white z-20"
                  alt="google pay"
                />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AddToCard;

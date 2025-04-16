// Alternative NotFound.tsx
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./hooks.css";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="not-found-container"
    >
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(-1)}
            className="bg-[#B34B98]"
          >
            Go Back
          </Button>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </Space>
      </div>
    </motion.div>
  );
};
export default NotFound;

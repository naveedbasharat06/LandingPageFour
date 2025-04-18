// components/AuthLayout.tsx
import React from "react";
import "./style.css";
import Navbar from "../navbar/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkPath: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  title,
  children,
  footerText,
  footerLinkText,
  footerLinkPath,
}) => {
  return (
    <>
      <Navbar />
      <div className="loginSinUp_main">
        <img
          className="absolute top-0"
          src="https://elixirautomation.com/wp-content/uploads/2025/01/border-new-01-1.svg"
          alt=""
        />
        <div className="login_background_overlay"></div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="auth-card"
        >
          <div className="auth-header">
            <h1 className="auth-title">{title}</h1>
            <div className="auth-divider"></div>
          </div>
          {children}
          <div className="auth-footer">
            {/* {footerText} */}
            <Link to={footerLinkPath}>{footerLinkText}</Link>
          </div>
        </motion.div>
        {/* <img
        className="absolute bottom-0 left-0 max-w-[530px] hidden sm:block"
        src="https://elixirautomation.com/wp-content/uploads/2025/01/Vector-Smart-Object.png"
        alt="background"
      /> */}
      </div>
    </>
  );
};

export default AuthLayout;

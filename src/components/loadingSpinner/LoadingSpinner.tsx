// components/LoadingSpinner.tsx
import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="youtube-like-loading">
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
        <div className="loading-content">
          <div className="loading-thumbnail"></div>
          <div className="loading-details">
            <div className="loading-line" style={{ width: "80%" }}></div>
            <div className="loading-line" style={{ width: "60%" }}></div>
            <div className="loading-line" style={{ width: "40%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

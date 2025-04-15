import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const getTitleByPath = () => {
      switch (location.pathname) {
        case "/":
          return "Home - Elixir Automation";
        case "/services":
          return "Services - Elixir Automation";
        case "/testimonials":
          return "Testimonials - Elixir Automation";
        case "/order-now":
          return "Order Now - Elixir Automation";
        // Add more paths as needed
        default:
          return "Elixir Automation";
      }
    };

    document.title = getTitleByPath();
  }, [location.pathname]);
};

export default usePageTitle;

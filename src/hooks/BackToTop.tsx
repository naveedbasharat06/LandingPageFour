// If you prefer Tailwind styling
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-[#B34B98] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
        visible
          ? "opacity-80 hover:opacity-100 hover:scale-105"
          : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <VerticalAlignTopOutlined className="text-lg" />
    </button>
  );
};
export default BackToTop;

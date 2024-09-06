import { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div
        className="fixed bottom-5 right-5 bg-white text-black p-3 rounded-extraLarge border border-double cursor-pointer z-50
        transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-110 hover:rotate-12 hover:shadow-2xl
        "
        onClick={goToBtn}
      >
        <MdKeyboardDoubleArrowUp className="text-2xl font-bold" />
      </div>
    )
  );
};

export default GoToTop;

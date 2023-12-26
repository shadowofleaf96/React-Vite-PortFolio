import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const ScrollUpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setVisible(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-28 right-10 transition-all ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={handleClick}
        className="bg-second text-white p-2 rounded-full focus:outline-none hover:bg-[#d8]"
      >
        <Icon icon="mdi:arrow-up" height={24} width={24} />
      </button>
    </div>
  );
};

export default ScrollUpButton;

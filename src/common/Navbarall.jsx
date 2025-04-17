import React, { useState, useEffect } from "react";
import TopBar from "./Topbar";
import Navbar from "./Navbar";

const Navbarall = () => {
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setTopBarVisible(true); 
      } else if (currentScrollY > lastScrollY) {
        setTopBarVisible(false); 
      } else {
        setTopBarVisible(false); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 w-full z-50">
   
      <div
        className={`transition-transform duration-300 ease-in-out ${
          topBarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <TopBar />
      </div>

      {/* Navbar and Navbar1 always visible */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          topBarVisible ? "mt-0" : "-mt-[50px]"
        }`}
      >
        <Navbar />
       
      </div>
    </div>
  );
};

export default Navbarall;

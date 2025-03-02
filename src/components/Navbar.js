import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
      <a href="#about">About</a>
      <a href="#certifications">Certifications</a>
      <a href="#projects">Projects</a>
    </nav>
  );
};

export default Navbar;

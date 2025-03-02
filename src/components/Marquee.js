import React from "react";

const Marquee = ({ items, reverse }) => {
  return (
    <div className="marquee-container">
      <div className={`marquee-content ${reverse ? "reverse" : ""}`}>
        {items.map((item, index) => (
          <div className="marquee-item" key={index}>
            <img src={item.image} alt={item.text} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

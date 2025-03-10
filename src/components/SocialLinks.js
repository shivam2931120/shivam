import React from "react";

const SocialLinks = () => {
  return (
    <div className="social-container">
      <div className="main-icon">
        <img src="https://img.icons8.com/?size=100&id=rJh3Z5RsEUSA&format=png&color=000000" alt="Social" />
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/shivam-28bbb92ab" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" />
        </a>
        <a href="https://github.com/shivam2931120" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="GitHub" />
        </a>
        <a href="mailto:shivam.bgp@outlook.com">
          <img src="https://img.icons8.com/?size=100&id=ut6gQeo5pNqf&format=png&color=000000" alt="Email" />
        </a>
        <a href="https://leetcode.com/u/Shivam2931120/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000" alt="LeetCode" />
        </a>
      </div>
    </div>
  );
};
export default SocialLinks;

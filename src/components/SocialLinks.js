import React from "react";

const SocialLinks = () => {
  return (
    <div className="social-container">
      <div className="main-icon">
        <img src="/social-media.png" alt="Social" />
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/shivam-28bbb92ab/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/shivam2931120" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="GitHub" />
        </a>
        <a href="mailto:shivam.bgp@outlook.com">
          <img src="/gmail.png" alt="Email" />
        </a>
        <a href="https://leetcode.com/u/Shivam2931120/" target="_blank" rel="noopener noreferrer">
          <img src="/leetcode.png" alt="LeetCode" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
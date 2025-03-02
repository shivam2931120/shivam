import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import ProgressBar from "./components/ProgressBar";
import Marquee from "./components/Marquee";
import Certifications from "./components/Certifications";
import LeetCodeProfile from "./components/LeetCodeProfile"; // ❌ Import Removed
import FunInteractive from "./components/FunInteractive"; // ✅ Import Fixed

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"; // Load saved preference
  });

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <ProgressBar />
      <Navbar />
      <div className="container">
        <FunInteractive />
        <LeetCodeProfile username="Shivam2931120" /> {/* ✅ Fixed Username */}
       

        <Marquee
          items={[
            { image: "python.png", text: "Python" },
            { image: "cpp.png", text: "C++" },
            { image: "java.png", text: "Java" },
            { image: "c.png", text: "C" },
            { image: "ruby.png", text: "Ruby" },
            { image: "mysql.png", text: "MySQL" },
            { image: "php.png", text: "PHP" },
            { image: "mongo.png", text: "MongoDB" },
            { image: "js.png", text: "JavaScript" },
            { image: "nodejs.png", text: "Node.js" },
            { image: "react.png", text: "React" },
            { image: "html.png", text: "HTML" },
            { image: "css.png", text: "CSS" },
            { image: "flask.png", text: "Flask" },
          ]}
          reverse={false}
        />
         <About />

      
<Certifications />
<Projects />

      </div>
      
      <SocialLinks />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

const ProgressBar = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${scrollTop}%` }}></div>
        </div>
    );
};

export default ProgressBar;

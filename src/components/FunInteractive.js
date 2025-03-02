import React, { useEffect, useState } from "react";

const FunInteractive = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "I am Shivam, a web developer!",
    "I am a coding enthusiast!",
    "Let's Build Something Cool!",
    "Feel free to contact me!",
  ];
  const typingSpeed = 100; // Speed of typing effect
  const deletingSpeed = 50; // Speed of deleting effect
  const pauseTime = 1000; // Pause before typing next word

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (!isDeleting && charIndex < currentWord.length) {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const typingTimer = setTimeout(handleTyping, speed);

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, charIndex, wordIndex]);

  return (
    <section id="fun-interactive" className="section">
      <p>
        <span id="typed-text">{text}</span>
      </p>
      <p>
        <img src="portfolio.png" alt="portfolio" className="img" />
      </p>
    </section>
  );
};

export default FunInteractive;

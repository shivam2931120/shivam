import React from "react";

const certifications = [
  { img: "jsc.png", alt: "JavaScript", name: "Programming with JavaScript", link: "jsc.png" },
  { img: "reactc.png", alt: "React Certification", name: "React Basics" },
  { img: "ds.png", alt: "Data Science", name: "Data Science" },
  { img: "htmlc.png", alt: "HTML", name: "HTML" },
  { img: "Python 3.jpeg", alt: "Python3", name: "Python3" },
  { img: "javac.png", alt: "Java", name: "JAVA" },
  { img: "Python Advanced.jpeg", alt: "Python Advanced", name: "Python Advanced" },
  { img: "Computer Vision.jpeg", alt: "Computer Vision", name: "Computer Vision" },
  { img: "C.jpg", alt: "C Programming", name: "C Programming" },
  { img: "Flask Using Python.jpg", alt: "Flask Using Python", name: "Flask Using Python" },
  { img: "Django.jpg", alt: "Django", name: "Django" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification">
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img src={cert.img} alt={cert.alt} />
              </a>
            ) : (
              <img src={cert.img} alt={cert.alt} />
            )}
            <span>{cert.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

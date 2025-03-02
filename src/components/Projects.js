import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "All About Arda",
      description:
        "Welcome to All About Arda, a comprehensive fan-made resource dedicated to the rich and expansive world of J.R.R. Tolkien. Dive deep into the lore of Middle-earth and beyond, exploring detailed information about characters, places, ages, rulers, and battles from Tolkien's legendary works, including The Lord of the Rings and The Hobbit.",
      link: "HOME.html",
    },
    {
      title: "Neo",
      description:
        "Welcome to Neo - Your Personal Voice Assistant, a powerful and versatile voice-controlled assistant designed to simplify your daily tasks. Neo can help you with a wide range of activities, including opening applications, searching the web, checking the weather, managing system settings, and much more. With features like screen recording, QR code generation, and real-time system monitoring, Neo is your go-to assistant for productivity and convenience. Explore the future of personal assistance with Neo!",
      link: "https://github.com/shivam2931120/Neo",
    },
    {
      title: "To-do App (Python)",
      description:
        "To-do App is a simple yet powerful task management application built using Python and Tkinter. It allows users to add, view, mark as completed, and delete tasks efficiently. The app stores tasks in an SQLite database, ensuring data persistence. With an intuitive GUI, a responsive task list, and essential task management features, this application is perfect for users looking to stay organized and productive.",
      link: "https://github.com/shivam2931120/To-do-python-",
    },
    {
      title: "To-do App (Web)",
      description:
        "To-do List Web App is a feature-rich task management application built using HTML, CSS, and JavaScript. It allows users to add tasks with due dates and priority levels, mark them as completed, edit or delete tasks, and filter/search through their list. The app highlights overdue tasks, maintains a task count, and stores data in local storage for persistence. With an intuitive user interface and essential productivity features, this to-do list helps users stay organized and efficient.",
      link: "https://shivam2931120.github.io/To-do/",
    },
    {
      title: "Student Management System(Python)",
      description:
        "Student Management System is a Python-based desktop application designed to efficiently manage student records using a 'tkinter' GUI and MongoDB as the backend database. It allows users to add, update, delete, and view student details, including fields such as student ID, name, date of birth, gender, email, phone number, address, and a profile picture, stored as binary data in the database. The application features a search function to locate students by ID, a view-all option with, and a theme toggle for light and dark modes. Designed for simplicity and functionality, it is ideal for educational institutions or organizations needing a streamlined way to handle student information.",
      link: "https://github.com/shivam2931120/student_management_system",
    },
    {
      title: "Student Management System(Web)",
      description:
        "Student Management Systemis a web-based application that allows users to add, display, and remove student records efficiently. It features a user-friendly interface where details like name, date of birth, gender, address, phone number, and profile photo can be entered and displayed dynamically. The application uses JavaScript for handling data, image uploads, and real-time updates. Each student entry includes a removal option, making it easy to manage records. Ideal for schools or training centers, this lightweight system simplifies student data management.",
      link: "https://shivam2931120.github.io/student_management_system-web/",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>

          
        ))}
      </div>
    </section>
  );
};

export default Projects;
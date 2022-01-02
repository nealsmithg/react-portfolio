import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <a
        href="#aboutme"
        onClick={() => handlePageChange("About")}
        className={currentPage === "About" ? "nav active" : "nav"}
      >
        About Me
      </a>
      <a
        href="#work"
        onClick={() => handlePageChange("Work")}
        className={currentPage === "Work" ? "nav active" : "nav"}
      >
        Work
      </a>
      <a
        href="#contactForm"
        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav active" : "nav"}
      >
        Contact
      </a>
      <a
        href="#resume"
        onClick={() => handlePageChange("Resume")}
        className={currentPage === "Resume" ? "nav active" : "nav"}
      >
        Resume
      </a>
    </>
  );
}

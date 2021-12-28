import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <a
        href="#aboutme"
        className={currentPage === "About" ? "nav active" : "nav"}
        onClick={() => handlePageChange("About")}
      >
        About Me
      </a>
      <a
        href="#work"
        className={currentPage === "Work" ? "nav active" : "nav"}
        onClick={() => handlePageChange("Work")}
      >
        Work
      </a>
      <a
        href="#contact"
        className={currentPage === "Contact" ? "nav active" : "nav"}
        onClick={() => handlePageChange("Contact")}
      >
        Contact
      </a>
    </>
  );
}

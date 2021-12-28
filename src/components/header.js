import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <header>
        <div>Cornelius Smith</div>
        <Navigation
          currentPage={currentPage}
          hadlePageChange={handlePageChange}
        />
      </header>
      <div class="banner">
        <img
          src={require("./images/background.jpg")}
          alt="tech background"
          className="tech-pic"
        />
        <img
          src={require("./images/profilepic.jpg")}
          alt="Me"
          className="profile-pic"
        />
      </div>
    </>
  );
}

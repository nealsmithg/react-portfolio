import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div>Cornelius Smith</div>
      <Navigation
        currentPage={currentPage}
        hadlePageChange={handlePageChange}
      />
    </header>
  );
}

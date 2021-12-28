import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
  };

  const handlePageChange = (page) => setCurentPage(page);

  return (
    <>
      <Header currentPage={currentPage} hadlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </>
  );
}

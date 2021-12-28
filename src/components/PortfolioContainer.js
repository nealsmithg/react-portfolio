import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";

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
      <main>
        {renderPage()}
        <Footer />
      </main>
    </>
  );
}

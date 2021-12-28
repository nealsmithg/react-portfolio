import React, { useState } from "react";
import Navigation from "./Navigation";

function Header() {
  const [page, setPage] = useState(["about"]);

  const handleSetPage = () => {
    setPage();
  };
  return (
    <header>
      <div>Cornelius Smith</div>
      <Navigation page={page} handleSetPage={handleSetPage} />
    </header>
  );
}

export default Header;

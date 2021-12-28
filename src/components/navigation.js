import React, { useState } from "react";

export default function Navigation({ page, handleSetPage }) {
  return (
    <>
      <a href="#aboutme" class="nav">
        About Me
      </a>
      <a href="#work" class="nav">
        Work
      </a>
      <a href="#contact" class="nav">
        Contact
      </a>
    </>
  );
}

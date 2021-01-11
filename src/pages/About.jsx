import React from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

import "../style/about.css";
function SearchPage() {
  return (
    <div className="about">
      <Navbar />
      <div className="about_section">
        <p>
          <span className="first">BizNews</span>
          <span className="others">
            {" "}
            is a business news media platform that displays news articles from
            various media outlets.
          </span>{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;

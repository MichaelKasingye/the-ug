import React from "react";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../style/developer.css";

import "../style/about.css";
function SearchPage() {
  return (
    <div className="about">
      <Navbar />
      <div className="about_section">
        <p>
          <span className="first">Michael Kasingye</span>
          <span className="others">
            {" "}
            is a software developer whom, in collaboration with teams to build
            vitual platforms.
          </span>
          <br />
          <a href="https://michaelkasingye.netlify.app/">
            https://michaelkasingye.netlify.app/
          </a>{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;

import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        <span>
          Developer |{" "}
          <a
            href="https://michaelkasingye.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Michael Kasingye
          </a>
        </span>
      </p>
    </div>
  );
}

export default Footer;

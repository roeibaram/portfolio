import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Roei Baram</p>
    </footer>
  );
}

export default Footer;

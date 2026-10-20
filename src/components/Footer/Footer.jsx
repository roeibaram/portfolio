import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Roei Baram</p>
      <a className="footer__top-link" href="#top">Back to top</a>
    </footer>
  );
}

export default Footer;

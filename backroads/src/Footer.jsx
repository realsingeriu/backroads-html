import React from "react";
import { pageLinks, socialLinks } from "./data";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} target="_blank" className="nav-icon">
                <i className={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;

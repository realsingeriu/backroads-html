import React, { useEffect, useState } from "react";
import { pageLinks, socialLinks } from "./data";

function Navbar() {
  const [showLink, setshowLink] = useState(false);
  const toggleLink = () => {
    showLink ? setshowLink(false) : setshowLink(true);
  };
  useEffect(() => {
    if (showLink) {
      setTimeout(() => {
        setshowLink(false);
      }, 5000);
    }
  });
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="/images/logo.svg" className="nav-logo" alt="backroads" />
            <button
              type="button"
              className="nav-toggle"
              id="nav-toggle"
              onClick={toggleLink}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul
            className={`${showLink ? "nav-links show-links" : "nav-links"}`}
            id="nav-links"
          >
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

          <ul className="nav-icons">
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
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

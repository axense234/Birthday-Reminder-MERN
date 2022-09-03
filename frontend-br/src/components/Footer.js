import React from "react";
import Logo from "./Others/Logo";
import footerSitemap from "../footerSitemap";
// React Icons
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-details">
        <Logo></Logo>
        <p id="footer-copyright">
          Copyright <FaRegCopyright id="copyright-icon" /> 2022,Axense's
          Birthday Reminder
        </p>
      </div>
      <div className="footer-sitemap">
        <h1 className="footer-title">Authentication</h1>
        <ul className="sitemap-links">
          {footerSitemap.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url} className="sitemap-link">
                  {link.linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-sm-icons">
        <h1 className="footer-title">Social Media</h1>
        <div className="sm-icons-container">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Link"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Link"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Youtube Link"
          >
            <FaYoutube></FaYoutube>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Github Link"
          >
            <FaGithub></FaGithub>
          </a>
        </div>
      </div>
      <div className="footer-contact-info">
        <h1 className="footer-title" style={{ marginBottom: "0.5rem" }}>
          Contact Info
        </h1>
        <div className="contact-info-container">
          <p>Phone Number: 0754098115(fake)</p>
          <p>Email Address: andreicomanescuonline@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

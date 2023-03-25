// Components
import Logo from "./Others/Logo";
// React Icons
import { FaRegCopyright } from "react-icons/fa";
// Data
import { footerSitemap, socialMediaLinks } from "../data";
// React Router
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-details'>
        <Logo />
        <p id='footer-copyright'>
          Copyright <FaRegCopyright id='copyright-icon' /> 2022,Axense's
          Birthday Reminder
        </p>
      </div>
      <div className='footer-sitemap'>
        <h1 className='footer-title'>Authentication</h1>
        <ul className='sitemap-links'>
          {footerSitemap.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url} className='sitemap-link'>
                  {link.linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='footer-sm-icons'>
        <h1 className='footer-title'>Social Media</h1>
        <div className='sm-icons-container'>
          {socialMediaLinks.map((smLink) => {
            return (
              <Link key={smLink.id} to={smLink.dest}>
                {smLink.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className='footer-contact-info'>
        <h1 className='footer-title' style={{ marginBottom: "0.5rem" }}>
          Contact Info
        </h1>
        <div className='contact-info-container'>
          <p>Phone Number: 0754098115(fake)</p>
          <p>Email Address: andreicomanescuonline@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

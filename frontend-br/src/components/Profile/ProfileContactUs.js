import React from "react";
// React Icons
import { FaFacebook, FaYoutube, FaGithub, FaInstagram } from "react-icons/fa";
const ProfileContactUs = () => {
  return (
    <section className="profile-content-contactus" id="contactus">
      <h1 className="profile-h1">5.Contact Us</h1>
      <ul className="profile-content-contactus-contacts">
        <li>Email: andreicomanescuonline@gmail.com</li>
        <li>Phone Number(fake): +20 6942069420</li>
        <li>
          Social media:
          <div className="footer-sm-icons">
            <div className="contactus-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram></FaInstagram>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube></FaYoutube>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ProfileContactUs;

// React Icons
import { Link } from "react-router-dom";
// Data
import { socialMediaLinks } from "../../data";

const ProfileContactUs = () => {
  return (
    <section className='profile-content-contactus' id='contactus'>
      <h1 className='profile-h1'>5.Contact Us</h1>
      <ul className='profile-content-contactus-contacts'>
        <li>Email: andreicomanescuonline@gmail.com</li>
        <li>Phone Number(fake): +20 6942069420</li>
        <li>
          Social media:
          <div className='footer-sm-icons'>
            <div className='contactus-icons'>
              {socialMediaLinks.map((smLink) => {
                return (
                  <Link key={smLink.id} to={smLink.dest}>
                    {smLink.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ProfileContactUs;

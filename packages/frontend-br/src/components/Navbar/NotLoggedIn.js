// React Router
import { Link } from "react-router-dom";
// Data
import { navbarPageLinks } from "../../data";

const NotLoggedIn = () => {
  return (
    <>
      {navbarPageLinks.map((pageLink) => {
        return (
          <Link key={pageLink.id} to={pageLink.dest} title={pageLink.label}>
            {pageLink.label}
          </Link>
        );
      })}
    </>
  );
};

export default NotLoggedIn;

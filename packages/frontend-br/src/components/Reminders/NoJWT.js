// Components
import Navbar from "../Navbar";
import Footer from "../Footer";
// React Router
import { Link } from "react-router-dom";

const NoJWT = () => {
  return (
    <>
      <Navbar />
      <div className='no-jwttoken-reminders'>
        <Link to='/signup'>Sign Up</Link>
        or
        <Link to='/login'>Login</Link>
        to have access to Reminders!
      </div>
      <Footer />
    </>
  );
};

export default NoJWT;

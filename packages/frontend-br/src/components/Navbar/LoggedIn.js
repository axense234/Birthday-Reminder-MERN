// React Router
import { Link } from "react-router-dom";
// Global Context
import { useGlobalContext } from "../../context";
// React Icons
import { CgProfile } from "react-icons/cg";

const LoggedIn = () => {
  const { profile, handleLogout, handleGetProfile } = useGlobalContext();

  return (
    <>
      <Link to='/reminders'>Reminders</Link>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/' id='logout-btn' onClick={() => handleLogout()}>
        Logout
      </Link>
      <Link
        className='profile-container'
        to='/profile'
        onClick={() => handleGetProfile()}
      >
        {profile.imageSecureUrl ? (
          <img
            src={profile.imageSecureUrl}
            alt='gay'
            className='profile-image-nav'
          />
        ) : (
          <CgProfile id='profile-img-def' />
        )}
        <h1 to='/profile'>{profile.username}</h1>
      </Link>
    </>
  );
};

export default LoggedIn;

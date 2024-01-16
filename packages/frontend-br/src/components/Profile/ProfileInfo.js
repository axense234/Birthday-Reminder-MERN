// React Icons
import { CgProfile } from "react-icons/cg";

const ProfileInfo = ({
  username,
  email,
  createdAt,
  reminderCount,
  imageSecureUrl,
}) => {
  return (
    <div className="profile-content-info" id="info">
      <h1 className="profile-h1">1.Info</h1>
      <ul className="profile-content-info-details">
        <li>
          <p>Username:</p>
          <span>{username}</span>
        </li>
        <li>
          <p>Email</p>
          <span>{email}</span>
        </li>
        <li>
          <p>Language:</p>
          <span>{navigator.language.split("-")[1]}</span>
        </li>
        <li>
          <p>Created At:</p>
          <span>{new Date(createdAt).toUTCString()}</span>
        </li>
        <li>
          <p>Reminder Count:</p>
          <span>{reminderCount || "0"}</span>
        </li>
        <li>
          <p>Profile Image:</p>
          {imageSecureUrl ? (
            <a href={imageSecureUrl} target="_blank" rel="noreferrer">
              <img
                src={imageSecureUrl}
                alt="gay"
                className="profile-image-info"
              />
            </a>
          ) : (
            <CgProfile id="profile-img-def" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfo;

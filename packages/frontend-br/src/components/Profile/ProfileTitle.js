// Data
import { profileMap } from "../../data";

const ProfileTitle = () => {
  return (
    <div className='profile-content-title'>
      <h1>Profile</h1>
      <hr />
      <div className='profile-content-map'>
        {profileMap.map((category) => {
          return (
            <a href={category.link} key={category.id}>
              {category.profileName}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTitle;

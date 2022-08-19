import React from "react";
import Modal from "../Modals/Modal";

const ProfileSettings = ({
  settings,
  handleSettingsSubmitFunc,
  setSettingsFunc,
  showModalProp,
}) => {
  return (
    <>
      <div className="profile-content-settings" id="settings">
        {showModalProp.active && <Modal {...showModalProp} />}
        <h1 className="profile-h1">2.Settings</h1>
        <form action="#" className="profile-content-settings-form">
          <div className="profile-content-setting">
            <label htmlFor="username">Change Username</label>
            <input
              type="text"
              id="username"
              value={settings.username}
              onChange={(e) =>
                setSettingsFunc({
                  ...settings,
                  username: e.target.value.trim(),
                })
              }
            />
          </div>
          <div className="profile-content-setting">
            <label htmlFor="email">Change Email</label>
            <input
              type="email"
              id="email"
              value={settings.email}
              onChange={(e) =>
                setSettingsFunc({ ...settings, email: e.target.value })
              }
            />
          </div>
          <div className="profile-content-setting">
            <label htmlFor="password">Change Password</label>
            <input
              type="password"
              id="password"
              value={settings.password}
              onChange={(e) =>
                setSettingsFunc({ ...settings, password: e.target.value })
              }
            />
          </div>
          <div className="profile-content-setting">
            <label htmlFor="image">Change Image</label>
            <input
              type="file"
              id="image"
              onChange={(e) => {
                setSettingsFunc({ ...settings, imageId: e.target.files[0] });
              }}
              placeholder=""
            />
          </div>
        </form>
        <button type="submit" onClick={(e) => handleSettingsSubmitFunc(e)}>
          Save Changes
        </button>
      </div>
    </>
  );
};

export default ProfileSettings;

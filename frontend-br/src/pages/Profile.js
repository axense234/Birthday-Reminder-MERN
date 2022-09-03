import React from "react";
// Global Context
import { useGlobalContext } from "../context";
import Loading from "../components/Others/Loading";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileSettings from "../components/Profile/ProfileSettings";
import ProfileReminders from "../components/Profile/ProfileReminders";
import ProfileContactUs from "../components/Profile/ProfileContactUs";
import ProfileAboutUs from "../components/Profile/ProfileAboutUs";
import ProfileTitle from "../components/Profile/ProfileTitle";

const Profile = () => {
  const {
    settings,
    profile,
    loading,
    handleSettingsSubmit,
    handleImageUploading,
    setSettings,
    showModal,
    showReminders,
    setShowReminders,
    reminders,
    deleteReminder,
    getReminder,
  } = useGlobalContext();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Navbar></Navbar>
      <main className="profile-content-container">
        {/* Profile Title */}
        <ProfileTitle></ProfileTitle>
        <div className="profile-part1">
          {/* 1.Profile Info */}
          <ProfileInfo {...profile}></ProfileInfo>
          {/* 2.Profile Settings */}
          <ProfileSettings
            settings={settings}
            handleSettingsSubmitFunc={handleSettingsSubmit}
            setSettingsFunc={setSettings}
            showModalProp={showModal}
            handleImageUploading={handleImageUploading}
          ></ProfileSettings>
        </div>
        <div className="profile-part2">
          {/* 3.Profile Reminders */}
          <ProfileReminders
            showReminders={showReminders}
            setShowReminders={setShowReminders}
            reminders={reminders}
            deleteReminder={deleteReminder}
            getReminder={getReminder}
          ></ProfileReminders>
        </div>
        <div className="profile-part3">
          {/* 4.Profile About Us */}
          <ProfileAboutUs></ProfileAboutUs>
          {/* 5.Profile Contact Us */}
          <ProfileContactUs></ProfileContactUs>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Profile;

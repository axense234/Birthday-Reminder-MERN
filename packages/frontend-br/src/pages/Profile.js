// Global Context
import { useGlobalContext } from "../context";
// Components
import Loading from "../components/Others/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileSettings from "../components/Profile/ProfileSettings";
import ProfileReminders from "../components/Profile/ProfileReminders";
import ProfileContactUs from "../components/Profile/ProfileContactUs";
import ProfileAboutUs from "../components/Profile/ProfileAboutUs";
import ProfileTitle from "../components/Profile/ProfileTitle";
import DeleteRemindersModal from "../components/Modals/DeleteRemindersModal";

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
    overlay,
  } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {overlay && <DeleteRemindersModal />}
      <Navbar />
      <main className='profile-content-container'>
        <ProfileTitle />
        <div className='profile-part1'>
          <ProfileInfo {...profile} />
          <ProfileSettings
            settings={settings}
            handleSettingsSubmitFunc={handleSettingsSubmit}
            setSettingsFunc={setSettings}
            showModalProp={showModal}
            handleImageUploading={handleImageUploading}
          />
        </div>
        <div className='profile-part2'>
          <ProfileReminders
            showReminders={showReminders}
            setShowReminders={setShowReminders}
            reminders={reminders}
            deleteReminder={deleteReminder}
            getReminder={getReminder}
          />
        </div>
        <div className='profile-part3'>
          <ProfileAboutUs />
          <ProfileContactUs />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;

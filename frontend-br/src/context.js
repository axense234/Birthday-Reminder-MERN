import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";

// URL IN USE:
const URL_IN_USE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://birthdayreminder-server-ca.onrender.com";

// CONTEXT
const AppContext = createContext();

// CONSTANT VARIABLES
const SIGNUP_URL = `${URL_IN_USE}/signup`;
const LOGIN_URL = `${URL_IN_USE}/login`;
const PROFILE_URL = `${URL_IN_USE}/profile`;
const REMINDERS_URL = `${URL_IN_USE}/user/reminders`;
const ADD_REMINDER_URL = `${URL_IN_USE}/create-reminder`;
const EDIT_REMINDER_URL = `${URL_IN_USE}/edit-reminder/`;
const SUBSCRIBE_URL = `${URL_IN_USE}/subscribe`;
const SEND_NOTIFICATIONS_URL = `${URL_IN_USE}/notify/`;

const PUBLIC_VAPID_KEY =
  "BFUVmfbmd-_84Iy2O2UaVCMmpR0428jGs0UozH5jrhV9Pq_mQ14TVa4qxBMDAqPK5R443YUu6OhhjWDr6Sk8BGQ";

const AppProvider = ({ children }) => {
  // State Variables
  const [jwtToken, setJwtToken] = useState("");
  const [mode, setMode] = useState("");
  const [sortInput, setSortInput] = useState("");
  const [sortType, setSortType] = useState("name");
  // State Variables - Loading
  const [loading, setLoading] = useState(true);
  const [loadingCard, setLoadingCard] = useState(true);
  const [loadingReminders, setLoadingReminders] = useState(true);
  // State Variables - Profile and Settings
  const [profile, setProfile] = useState({});
  const [settings, setSettings] = useState({});
  const defaultAccountDetails = {
    username: "",
    email: "",
    password: "",
    password_v: "",
  };
  const [accountDetails, setAccountDetails] = useState(defaultAccountDetails);
  // State Variables - Modals
  const [showModal, setShowModal] = useState({
    active: false,
    msg: "Default Message",
  });
  const [showSortingModal, setShowSortingModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(true);
  const [overlay, setOverlay] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  // State Variables - Reminders
  const [showReminders, setShowReminders] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [reminder, setReminder] = useState({
    reminderImageFile: "",
    reminderImageUrl: "",
    reminderName: "Default Name",
    reminderBirthday: "",
  });

  const [isMutedGlobal, setIsMutedGlobal] = useState("false");

  // useRef
  const sortingModal = useRef(null);
  const deleteRemindersModalRef = useRef(null);
  const NavbarSliderRef = useRef(null);

  // HANDLE IMAGE POSTING
  const handleImagePosting = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "birthday-reminder");

    const postRes = await axios.post(
      "https://api.cloudinary.com/v1_1/birthdayreminder/image/upload",
      formData
    );
    return postRes;
  };

  // HANDLE LOGGING OUT
  const handleLogout = async () => {
    localStorage.clear();
    setJwtToken("");
    window.location.href = "/";
  };

  // HANDLE ACTIVATING MODAL
  const activateModal = (msg) => {
    setShowModal({ active: true, msg });
  };

  // HANDLE GETTING THE PROFILE FROM BACKEND
  const handleGetProfile = React.useCallback(
    async (token, type, sortInput = "") => {
      const { data } = await axios.get(PROFILE_URL, {
        headers: { Authorization: `Bearer ${jwtToken || token}` },
      });
      setProfile(await data);
      setSettings({
        ...(await data),
        password: "",
        imageId: "",
      });
      const { data: reminders } = await axios.get(
        `${REMINDERS_URL}/${await data.id}?sortType=${type}&&inputValue=${sortInput}`,
        { headers: { Authorization: `Bearer ${jwtToken || token}` } }
      );
      setReminders(await reminders.reminders);
    },
    [jwtToken]
  );

  // HANDLE SETTINGS SUBMIT
  const handleSettingsSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (settings.imageId) {
        // Constructing the object so Cloudinary will accept it
        const postRes = await handleImagePosting(settings.imageId);
        // Patch with imageSecureUrl(did this so i wouldnt have to update setSettings)
        await axios.patch(
          PROFILE_URL,
          { ...settings, imageSecureUrl: postRes.data.secure_url },
          {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }
        );
        window.location.href = "/";
      } else {
        // Normal Patch(without imageSecureUrl)
        await axios.patch(
          PROFILE_URL,
          { ...settings },
          {
            headers: { Authorization: `Bearer ${jwtToken}` },
          }
        );
      }
      window.location.href = "/";
    } catch (error) {
      const errorMessage = error.response.data;
      activateModal(errorMessage);
      setLoading(false);
    }
  };

  // DELETE REMINDERS
  const deleteReminder = async (userId, remId, dest) => {
    try {
      setLoading(true);
      // FRONTEND LOGIC
      const newReminders = reminders.filter((reminder) => {
        return reminder.id !== remId;
      });
      setReminders(newReminders);
      // BACKEND LOGIC
      await axios.delete(`${REMINDERS_URL}/${userId}/${remId}`, {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });
      window.location.href = `/${dest}`;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // DELETE ALL REMINDERS
  const handleDeleteAllReminders = async () => {
    try {
      await axios
        .delete(`${REMINDERS_URL}/${profile.id}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then(setReminders([]))
        .then(setOverlay(false));
    } catch (error) {
      console.log(error);
    }
  };

  // HANDLE THE CLOSING OF THE DELETE REMINDERS OVERLAY
  const handleDeleteAllRemindersModalClosing = () => {
    const modal = deleteRemindersModalRef.current;
    modal.style.transform = "scale(0)";
    setTimeout(() => {
      setOverlay(false);
    }, 300);
  };

  // ADD REMINDERS
  const addReminder = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await axios.post(
        ADD_REMINDER_URL,
        { reminder, profile },
        {
          headers: { Authorization: `Bearer ${jwtToken}` },
        }
      );
      window.location.href = "/reminders";
    } catch (error) {
      const errorMessage = error.response.data;
      activateModal(errorMessage);
      setLoading(false);
    }
  };

  // HANDLE GETTING A REMINDER
  const getReminder = async (remId) => {
    localStorage.setItem("Reminder Mode", "edit");
    try {
      const { data } = await axios.get(`${EDIT_REMINDER_URL}${remId}`, {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });
      setReminder({
        ...reminder,
        reminderImageUrl: data.reminder.imageSecureUrl,
        reminderName: data.reminder.name,
        reminderBirthday: data.reminder.birthday,
        id: data.reminder._id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("Reminder Mode") === "edit" &&
      !(reminder.reminderName === "Default Name")
    ) {
      localStorage.setItem("Edited Reminder", JSON.stringify(reminder));
    }
  }, [reminder]);

  // HANDLE EDITTING REMINDER
  const editReminder = async (e, remId) => {
    try {
      e.preventDefault();
      setLoading(true);
      await axios.patch(
        `${EDIT_REMINDER_URL}${remId}`,
        { reminder },
        { headers: { Authorization: `Bearer ${jwtToken}` } }
      );
      window.location.href = "/reminders";
    } catch (error) {
      const errorMessage = error.response.data;
      activateModal(errorMessage);
      setLoading(false);
    }
  };

  // FILTER REMINDERS
  const filterReminders = async (type, inputValue = "") => {
    setLoadingReminders(true);
    try {
      localStorage.setItem("Sort Type", type);

      const { data: reminders } = await axios.get(
        `${REMINDERS_URL}/${await profile.id}?sortType=${type}&&inputValue=${inputValue}`,
        {
          headers: { Authorization: `Bearer ${jwtToken}` },
        }
      );
      setMode("sorting");
      localStorage.setItem("Reminder Mode", "sorting");
      setReminders(await reminders.reminders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingReminders(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [sortInput]);

  // LOGIN/SIGN UP HANDLE SUBMIT
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    // Frontend Verify Password
    if (
      accountDetails.password !== accountDetails.password_v &&
      type !== "login"
    ) {
      activateModal("Passwords do no match.");
    }
    // Frontend Error Auth
    else if (type === "signup") {
      console.log("signup");
      // SIGNING UP

      try {
        setLoading(true);
        const {
          data: { token },
        } = await axios.post(SIGNUP_URL, {
          accountDetails,
        });
        // LOGGING THE USER IN
        setJwtToken(await token);
        localStorage.setItem("Token", token);
        localStorage.setItem("Sort Type", "name");
        localStorage.setItem("Reminder Mode", "");
        window.location.href = "/";
      } catch (error) {
        const errorMessage = error.response.data;
        activateModal(errorMessage);
        setLoading(false);
      }
    } else if (type === "login") {
      console.log("login");
      try {
        setLoading(true);
        // GETTING THE TOKEN FROM BACKEND
        const {
          data: { token },
        } = await axios.post(LOGIN_URL, { ...accountDetails });
        localStorage.setItem("Token", await token);
        localStorage.setItem("Sort Type", "name");
        localStorage.setItem("Reminder Mode", "");
        window.location.href = "/";
      } catch (error) {
        const errorMessage = error.response.data;
        activateModal(errorMessage);
        setLoading(false);
      }
    }
  };

  // Handling notifications subscription
  const handleNotificationsSubscription = React.useCallback(async () => {
    try {
      // Getting the registered service worker
      const sw = await navigator.serviceWorker.ready;
      // Subscribing
      const subscription = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY,
      });

      await axios.post(`${SUBSCRIBE_URL}/${profile.id}`, subscription, {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });
    } catch (error) {
      console.log(error);
    }
  }, [profile.id, jwtToken]);

  // Handling sending notifications
  const handleNotificationsSending = React.useCallback(
    async (remId) => {
      try {
        await axios.get(`${SEND_NOTIFICATIONS_URL}${profile.id}/${remId}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        });
      } catch (error) {
        setShowNotificationsModal(true);
      }
    },
    [profile.id, jwtToken]
  );

  // Handling JWT Token,Sort Type from Local Storage
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("Token");
        const type = localStorage.getItem("Sort Type");
        const reminderMode = localStorage.getItem("Reminder Mode");
        const sortInputStorage = localStorage.getItem("sortInput");
        const editedReminder = JSON.parse(
          localStorage.getItem("Edited Reminder")
        );
        const IgnoreNotificationsPop = localStorage.getItem(
          "Ignore Notifications Popup"
        );
        const isMutedGlobalStorage = localStorage.getItem("isMuted Global");
        if (token) {
          setJwtToken(token);
          if (type && sortInputStorage) {
            setSortType(type);
            setSortInput(sortInputStorage);
            await handleGetProfile(token, type, sortInputStorage).then(() =>
              setLoading(false)
            );
          } else if (type) {
            setSortType(type);
            await handleGetProfile(token, type).then(() => setLoading(false));
          }
          if (reminderMode) {
            setMode(reminderMode);
          }
          if (editedReminder && !(reminderMode === "create")) {
            setReminder(editedReminder);
          }
          if (IgnoreNotificationsPop === "true") {
            setShowNotificationsModal(false);
          }
          if (isMutedGlobalStorage) {
            setIsMutedGlobal(isMutedGlobalStorage);
          }
        }
        const timeout = setTimeout(() => setLoadingReminders(false), 1000);
        setLoading(false);
        return () => {
          clearTimeout(timeout);
        };
      } catch (error) {
        console.log(error);
      }
    })();
  }, [handleGetProfile]);

  // Handling the modal closing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal({ active: false, msg: "Default Message" });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showModal]);

  // Handling the image posting in reminder settings
  useEffect(() => {
    setLoadingCard(true);
    const timeout = setTimeout(() => setLoadingCard(false), 1000);
    (async () => {
      // Handling for Editing
      if (reminder.reminderImageFile) {
        const postRes = await handleImagePosting(reminder.reminderImageFile);
        setReminder((r) => {
          return { ...r, reminderImageUrl: postRes.data.secure_url };
        });
      }
    })();
    return () => {
      clearTimeout(timeout);
    };
  }, [reminder.reminderImageFile]);

  // Handling the loading card
  useEffect(() => {
    setLoadingCard(true);
    const timeout = setTimeout(() => setLoadingCard(false), 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [reminder.reminderBirthday, reminder.reminderName]);

  return (
    <AppContext.Provider
      value={{
        showModal,
        accountDetails,
        setAccountDetails,
        handleSubmit,
        profile,
        setProfile,
        loading,
        setLoading,
        loadingCard,
        setLoadingCard,
        jwtToken,
        handleLogout,
        handleGetProfile,
        handleSettingsSubmit,
        settings,
        setSettings,
        showReminders,
        setShowReminders,
        reminders,
        setReminders,
        deleteReminder,
        addReminder,
        reminder,
        setReminder,
        showSortingModal,
        setShowSortingModal,
        filterReminders,
        loadingReminders,
        setLoadingReminders,
        sortingModal,
        getReminder,
        mode,
        setMode,
        editReminder,
        sortInput,
        setSortInput,
        sortType,
        handleNotificationsSubscription,
        handleNotificationsSending,
        showNotificationsModal,
        setShowNotificationsModal,
        isMutedGlobal,
        setIsMutedGlobal,
        handleDeleteAllReminders,
        overlay,
        setOverlay,
        deleteRemindersModalRef,
        handleDeleteAllRemindersModalClosing,
        NavbarSliderRef,
        showSlider,
        setShowSlider,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };

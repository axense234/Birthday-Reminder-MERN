// React Icons
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

export const sortingOptions = [
  {
    id: 1,
    optionName: "Name",
    filter: "name",
  },
  {
    id: 2,
    optionName: "Birthday Date",
    filter: "birthdayDate",
  },
  {
    id: 3,
    optionName: "Time Remaining",
    filter: "timeRemaining",
  },
  {
    id: 4,
    optionName: "Newest",
    filter: "newest",
  },
];

export const navbarSliderPageLinks = [
  { id: 1, dest: "/", label: "Home Page" },
  { id: 2, dest: "/reminders", label: "Reminders" },
  { id: 3, dest: "/profile", label: "Profile" },
  { id: 4, dest: "/signup", label: "Signup" },
  { id: 5, dest: "/login", label: "Login" },
];

export const navbarPageLinks = [
  { id: 1, dest: "/reminders", label: "Reminders" },
  { id: 2, dest: "/signup", label: "Sign Up" },
  { id: 3, dest: "/login", label: "Login" },
];

export const socialMediaLinks = [
  { id: 1, dest: "https://facebook.com", icon: FaFacebook({}) },
  { id: 2, dest: "https://instagram.com", icon: FaInstagram({}) },
  { id: 3, dest: "https://youtube.com", icon: FaYoutube({}) },
  { id: 4, dest: "https://github.com", icon: FaGithub({}) },
];

export const footerSitemap = [
  {
    id: 1,
    linkName: "Sign Up",
    url: "/signup",
  },
  {
    id: 2,
    linkName: "Login",
    url: "/login",
  },
  {
    id: 3,
    linkName: "Profile",
    url: "/profile",
  },
];

export const profileMap = [
  { id: 1, profileName: "Info", link: "#info" },
  { id: 2, profileName: "Settings", link: "#settings" },
  { id: 3, profileName: "Reminders", link: "#reminders" },
  { id: 4, profileName: "Contact Us", link: "#contactus" },
  { id: 5, profileName: "About Us", link: "#aboutus" },
];

export const reminderExamples = [
  {
    id: 1,
    reminder: {
      name: "Example 1",
      birthday: new Date().getTime(),
      imageSecureUrl: "https://randomuser.me/api/portraits/men/53.jpg",
    },
  },
  {
    id: 2,
    reminder: {
      name: "Example 2",
      birthday: new Date().getTime(),
      imageSecureUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  },
  {
    id: 3,
    reminder: {
      name: "Example 3",
      birthday: new Date().getTime(),
      imageSecureUrl: "https://randomuser.me/api/portraits/men/30.jpg",
    },
  },
];

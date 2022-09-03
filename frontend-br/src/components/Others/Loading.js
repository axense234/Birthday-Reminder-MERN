import React from "react";
import MoonLander from "react-spinners/MoonLoader";

const Loading = ({ type = "normal" }) => {
  if (type === "normal") {
    return (
      <div className="loading-container">
        <h1>Loading,please wait...</h1>
        <MoonLander size="100px" color="#A64AC9"></MoonLander>
      </div>
    );
  } else if (type === "reminder-card") {
    return (
      <div className="loading-container loading-card">
        <h1 id="loading-card-h1">Loading,please wait...</h1>
        <MoonLander size="60px" color="#A64AC9"></MoonLander>
      </div>
    );
  } else if (type === "reminders") {
    return (
      <div className="loading-container loading-reminders">
        <h1 id="loading-reminders-h1">Loading,please wait...</h1>
        <MoonLander size="120px" color="#A64AC9"></MoonLander>
      </div>
    );
  } else if (type === "single-reminder") {
    return (
      <div className="loading-container loading-single-card">
        <h1 id="loading-reminders-h1">Loading,please wait...</h1>
        <MoonLander size="120px" color="#A64AC9"></MoonLander>
      </div>
    );
  }
  return "no-types";
};

export default Loading;

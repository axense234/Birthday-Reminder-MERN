// React
import React from "react";
// Root
import { createRoot } from "react-dom/client";
// Pages
import Home from "./pages/Home";
import RegisterForm from "./pages/Register";
import LoginForm from "./pages/Login";
import Profile from "./pages/Profile";
import Reminders from "./pages/Reminders";
import CreateReminder from "./pages/CreateReminder";
import EditReminder from "./pages/EditReminder";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// App Context
import { AppProvider } from "./context";
// CSS
import "./styles.css";
// SW
import registerSW from "./swDev";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/reminders' element={<Reminders />} />
          <Route path='/create-reminder' element={<CreateReminder />} />
          <Route path='/edit-reminder' element={<EditReminder />} />
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  registerSW();
}

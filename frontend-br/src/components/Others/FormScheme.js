import React from "react";
import Modal from "../Modals/Modal";
// Global Context
import { useGlobalContext } from "../../context";
// Loading Component
import Loading from "../Others/Loading";

const FormScheme = ({ type }) => {
  const {
    accountDetails,
    setAccountDetails,
    handleSubmit,
    showModal,
    loading,
  } = useGlobalContext();

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <main className="form-container">
        {showModal.active && <Modal {...showModal} />}
        <h1 id="form-title">
          {type === "signup" ? "Create your account." : "Login"}
        </h1>
        <hr id="form-hr" />
        <form className="form" onSubmit={(e) => handleSubmit(e, type)}>
          <div className="form-info">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              value={accountDetails.username}
              onChange={(e) =>
                setAccountDetails({
                  ...accountDetails,
                  username: e.target.value.trim(),
                })
              }
              autoComplete={"off"}
            />
          </div>
          <div className="form-info">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={accountDetails.email}
              onChange={(e) =>
                setAccountDetails({
                  ...accountDetails,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="form-info">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={accountDetails.password}
              onChange={(e) =>
                setAccountDetails({
                  ...accountDetails,
                  password: e.target.value,
                })
              }
            />
          </div>
          {type === "signup" ? (
            <div className="form-info">
              <label htmlFor="password-v">Verify Password: </label>
              <input
                type="password"
                name="password-v"
                id="password-v"
                value={accountDetails.password_v}
                onChange={(e) =>
                  setAccountDetails({
                    ...accountDetails,
                    password_v: e.target.value,
                  })
                }
              />
            </div>
          ) : null}
          <button id="page-btn" type="submit">
            {type === "signup" ? "Create account" : "Login"}
          </button>
        </form>
      </main>
    </>
  );
};

export default FormScheme;

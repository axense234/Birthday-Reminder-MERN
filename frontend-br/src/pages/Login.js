import React from "react";
import Footer from "../components/Footer";
import FormScheme from "../components/Others/FormScheme";
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../context";

const LoginForm = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <FormScheme type="login"></FormScheme>
      </>
    );
  }
  return (
    <>
      <Navbar></Navbar>
      <FormScheme type="login"></FormScheme>
      <Footer></Footer>
    </>
  );
};

export default LoginForm;

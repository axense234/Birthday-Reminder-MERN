import React from "react";
import Footer from "../components/Footer";
import FormScheme from "../components/Others/FormScheme";
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../context";

const RegisterForm = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <>
        <FormScheme type="signup"></FormScheme>
      </>
    );
  }
  return (
    <>
      <Navbar></Navbar>
      <FormScheme type="signup"></FormScheme>
      <Footer></Footer>
    </>
  );
};

export default RegisterForm;

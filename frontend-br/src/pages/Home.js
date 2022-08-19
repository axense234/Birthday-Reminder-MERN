import React from "react";
import Content from "../components/Home/Content";
import Loading from "../components/Others/Loading";
// Global Context
import { useGlobalContext } from "../context";
// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Navbar></Navbar>
      <Content />
      <Footer></Footer>
    </>
  );
};

export default Home;

import React from "react";
// Global Context
import { useGlobalContext } from "../context";
// Components
import Navbar from "../components/Navbar";
import Content from "../components/Home/Content";
import Loading from "../components/Others/Loading";
import Footer from "../components/Footer";
import RemindersExample from "../components/Home/RemindersExample";

const Home = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="home-content-container">
        <Content />
        <RemindersExample></RemindersExample>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Announcements from "../Components/Announcements";
import Top from "../Components/Top";
import Login from "../Components/Login";
import Loginmain from "../Components/Loginmain";

const Home = () => {
  return (
    <div>
      <Top/>
      <Login/>
      <Loginmain/>
      <Footer />
    </div>
  );
};

export default Home;

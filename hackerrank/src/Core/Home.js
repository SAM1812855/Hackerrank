import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Announcements from "../Components/Announcements";
import Top from "../Components/Top";
import Login from "../Components/Login";

const Home = () => {
  return (
    <div>
      <Top/>
      <Login/>
      <Footer />
    </div>
  );
};

export default Home;

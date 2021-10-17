import React from "react";
import Header from "../Core/Header";
import Announcements from "./Announcements";
import "./Top.css";

const Top = () => {
  return (
    <div className="top-main">
      <Announcements />
      <Header />
    </div>
  );
};

export default Top;

import React from "react";
import "./Loginmain.css";
import logo from "../Assets/logo.png";

const Loginmain = () => {
  return (
    <div className="Loginmain-main">
      <div className="Loginmain-wrapper">
        <div className="Loginmain-logo">
          <img src={logo} alt="" />
        </div>
        <div className="Loginmain-title">For Developers</div>
        <div className="Loginmain-text">
          Practice coding, prepare for interviews, and get hired.
        </div>
        <div className="Loginmain-box">
          <div className="loginbox">
            <div className="loginbox-title">LOGIN </div>
            <input className="loginbox-input"></input>
            <input className="loginbox-input"></input>
            <div className="loginbox-fp">Forgot your password?</div>
            <div className="loginbox-button">Login</div>
          </div>
        </div>
        <div className="Loginmain-privacy">By signing up you agree to our Terms of Service and Privacy Policy</div>
      </div>
    </div>
  );
};

export default Loginmain;

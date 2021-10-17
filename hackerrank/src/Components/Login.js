import React from "react";
import "./Login.css";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login-main">
      <div className="login-wrapper">
        <Container className="login-container">
          <h1 className="login-heading">Login</h1>
          <Row className="login-row">
            <Col xl={6} lg={6}>
              <div className="login-col-wrapper">
                <div className="login-col-alert">BUSINESS</div>
                <div className="login-heading2">For Companies</div>
                <div className="login-desc">
                  We are the market–leading technical interview platform to
                  identify and hire developers with the right skills.
                </div>
                <div className="login-button">Login</div>
                <div className="login-last">
                  Don't have an account?
                  <span className="green"> Contact sales</span> or
                  <span className="green"> Get free trial.</span>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <div className="login-col-wrapper">
                <div className="login-col-alert">STUDENTS</div>
                <div className="login-heading2">For Developers</div>
                <div className="login-desc">
                  Join over 15 million developers, practice coding skills,
                  prepare for interviews, and get hired.
                </div>
                <div className="login-button">Login</div>
                <div className="login-last">
                  Don't have an account?
                  <span className="green"> Sign up</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;

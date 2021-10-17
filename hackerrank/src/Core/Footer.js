import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-wrapper">
          <Row className="footer-row-main">
            <Col xl={2}>
              <div className="footer-col-wrapper">
                <div className="footer-col-heading">PRODUCTS</div>
                <div className="footer-col-elements">
                  <ul>
                    <li>Remote First Hiring</li>
                    <li>Remote First Planning</li>
                    <li>Remote First Sourcing</li>
                    <li>Remote First Screening</li>
                    <li>Remote First Interviewing</li>
                    <li>Remote First Ranking</li>
                    <li>Insights</li>
                    <li>HackerRank for Developers</li>
                    <li>Partners</li>
                    <li>Pricing</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={2}>
              <div className="footer-col-wrapper">
                <div className="footer-col-heading">SOLUTIONS</div>
                <div className="footer-col-elements">
                  <ul>
                    <li>Remote Hiring</li>
                    <li>University Recruiting</li>
                    <li>Diversity & Inclusion</li>
                    <li>Professional Hiring</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={2}>
              <div className="footer-col-wrapper">
                <div className="footer-col-heading">CUSTOMERS</div>
                <div className="footer-col-elements">
                  <ul>
                    <li>All Industries</li>
                    <li>Financial Services</li>
                    <li>Technology</li>
                    <li>More</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={2}>
              <div className="footer-col-wrapper">
                <div className="footer-col-heading">RESOURCES</div>
                <div className="footer-col-elements">
                  <ul>
                    <li>Events</li>
                    <li>Datasheets</li>
                    <li>Guides</li>
                    <li>Webinars</li>
                    <li>Research</li>
                    <li>Trust</li>
                    <li>Security</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={4}>
              <div className="footer-lastcol">
                <div className="footer-lastcol01">
                  
                    <Col>
                      <div className="footer-col-wrapper">
                        <div className="footer-col-heading">PRODUCTS</div>
                        <div className="footer-col-elements">
                          <ul>
                            <li>Attract</li>
                            <li>Assess</li>
                            <li>Hire</li>
                            <li>Stories</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="footer-col-wrapper">
                        <div className="footer-col-heading">PRODUCTS</div>
                        <div className="footer-col-elements">
                          <ul>
                            <li>Insights</li>
                            <li>HackerRank</li>
                            <li>Partners</li>
                            <li>Pricing</li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  
                </div>

                <div className="footer-lastcol02">
                <div className="footer-lastcol02-icons">
                  <img src={logo} alt="" />
                  <i class="fab fa-facebook-square"></i>
                  <i class="fab fa-instagram-square"></i>
                  <i class="fab fa-twitter-square"></i>
                  </div>
                  <div>Privacy Policy</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

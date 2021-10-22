import React from "react";
import { Global, css } from "frontity";
import Logo from "../../assets/images/curriki_new_logo 1.svg";
import FooterCss from "../Header/styles.css";
import FooterBackground from "../../assets/images/hero-section.png";
const Index = () => {
  return (
    <>
      <Global styles={css(FooterCss)} />
      <div
        className="footer-area"
        style={{
          background: "url(" + FooterBackground + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="footer-content-area">
            <img src={Logo} alt="curriki logo" />
            <div className="footer-links">
              <a href="curriki.org" target="_blank">
                About
              </a>
              <a href="curriki.org" target="_blank">
                Blog
              </a>
              <a href="curriki.org" target="_blank">
                Webinars
              </a>
            </div>
            <div className="footer-links">
              <a href="curriki.org" target="_blank">
                Press
              </a>
              <a href="curriki.org" target="_blank">
                Providers
              </a>
              <a href="curriki.org" target="_blank">
                Donate
              </a>
            </div>
            <div className="footer-links">
              <a href="curriki.org" target="_blank">
                Contact
              </a>
              <a href="curriki.org" target="_blank">
                Privacy Policy
              </a>
              <a href="curriki.org" target="_blank">
                Terms of service
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          <span>
            <a href="curriki.org" style={{ textDecoration: "none" }}>
              curriki.org
            </a>
          </span>{" "}
          2004-2021 Curriki a 501.c.3 Nonprofit
        </p>
      </div>
    </>
  );
};

export default Index;

import React from "react";
import StartedImg from "../../assets/images/Trynow1.svg";
import { Button } from "react-bootstrap";
const GetStarted = () => {
  return (
    <div style={{ background: "#084892" }} className="developer-get-started">
      <div className="container">
        <div className="get-started-content">
          <div className="get-started">
            <h3>Get started right now!</h3>
            <p>
              Create a developer account, get your credentials, and set up
              sandbox accounts for testing. We'll guide you thorugh the steps to
              become a Curriki developer.
            </p>
            <Button variatn="secondary" className="get-started-btn">
              Get Started
            </Button>
          </div>
          <img className="get-start-img" src={StartedImg} alt="starter image" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

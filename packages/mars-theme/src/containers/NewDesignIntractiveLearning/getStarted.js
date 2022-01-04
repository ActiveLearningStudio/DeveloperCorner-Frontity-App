import React from "react";
import StartedImg from "../../assets/images/Trynow1.svg";
import { Button } from "react-bootstrap";
const GetStarted = () => {
  return (
    <div className="developer-get-started">
      <div className="container">
        <div className="get-started-content">
          <div className="get-started">
            <h3>Get started right now!</h3>
            <p>
              Create a developer account, get your credentials, and set up
              sandbox accounts for testing. We'll guide you through the steps to
              become a Curriki developer.
            </p>
            <Button variatn="secondary" className="get-started-btn">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

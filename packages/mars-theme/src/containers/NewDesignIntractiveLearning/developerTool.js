import React from "react";
import toolpic from "../../assets/images/developertool.svg";
import { Button } from "react-bootstrap";

const DeveloperTool = () => {
  return (
    <div className="developer-tool-area">
      <div className="container">
        <h2>DEVELOPER TOOLS</h2>
        <p>THE BEST INTERACTIVE API SOLUTION FOR DEVELOPERS</p>
        <div className="developer-tools-content">
          <div className="developer-tools-cards">
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>GitHub Repository</h3>
              <p>
                Our public github that includes documentation for installation
                from cloud hosting providers
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div>
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Docker Repository</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sodales, quam et blandit.
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div>
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>API Documentation</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sodales, quam et blandit.
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div>
          </div>

          {/* tool content #2 */}

          <div className="developer-tools-cards">
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Reference Implementation storybook</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="www.curriki.org">Call to action text</a>
            </div>
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>CookBooks</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sodales, quam et blandit.
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div>
            <div className="developer-tool-card">
              <img src={toolpic} alt="desktop-icon" />
              <h3>Developer’s Forum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                sodales, quam et blandit.
              </p>
              <a href="www.curriki.org">Call to action text</a>
            </div>
          </div>
          <div className="developer-tools-btn">
            <Button className="register-btn">REGISTER NOW</Button>
          </div>
          {/* <button>REGISTER NOW</button> */}
        </div>
      </div>
    </div>
  );
};

export default DeveloperTool;

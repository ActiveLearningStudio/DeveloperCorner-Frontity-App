import React from "react";
import plusicon from "../../assets/images/PLUS.svg";
import resume1 from "../../assets/images/resume1.svg";
import resume2 from "../../assets/images/resume2.svg";
import resume3 from "../../assets/images/resume3.svg";
import resume4 from "../../assets/images/resume4.svg";
const Technology = () => {
  return (
    <div className="techSection">
      <div className="container">
        <div className="tech-heading">
          <h2>USE CURRIKI TECHNOLGY IN JUST STEPS</h2>
          <img src={plusicon} alt="plus sign" />
        </div>
        <div className="tech-content">
          <div className="tech-step">
            <div className="tech-step-card">
              <span>1</span>
              <div className="tech-step-card-inner">
                <h3>EXPERIENCE</h3>
                <p>
                  See Curriki products in action and learn best practices by
                  signing up for our free demo envvionment
                </p>
                <div className="tech-step-card-inner-img">
                  <img src={resume1} alt="experience-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="tech-step">
            <div className="tech-step-card">
              <span>2</span>
              <div className="tech-step-card-inner">
                <h3>CLICK</h3>
                <p>Download corressponding code and begin integrating</p>
                <div className="tech-step-card-inner-img">
                  <img src={resume2} alt="experience-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd content */}
        <div className="tech-content">
          <div className="tech-step">
            <div className="tech-step-card">
              <span>3</span>
              <div className="tech-step-card-inner">
                <h3>ENVIROMENT</h3>
                <p>Configure a hosting environment from one of our partners</p>
                <div className="tech-step-card-inner-img">
                  <img src={resume3} alt="experience-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="tech-step">
            <div className="tech-step-card">
              <span>4</span>
              <div className="tech-step-card-inner">
                <h3>LAUNCH</h3>
                <p>COngrats! Start building interactive courses today</p>

                <div className="tech-step-card-inner-img">
                  <img src={resume4} alt="experience-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;

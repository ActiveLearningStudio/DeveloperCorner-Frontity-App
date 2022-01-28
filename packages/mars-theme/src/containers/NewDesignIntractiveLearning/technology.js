import React from "react";
import { connect } from "frontity";
import plusicon from "../../assets/images/PLUS.svg";
import resume1 from "../../assets/images/resume1.svg";
import resume2 from "../../assets/images/resume2.svg";
import resume3 from "../../assets/images/resume3.svg";
import resume4 from "../../assets/images/resume4.svg";
const Technology = ({ techdata, state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  return (
    <div className="techSection">
      <div className="container">
        <div className="tech-heading">
          <h2>Use Curriki technology in just 4 steps</h2>
          {/* <img src={plusicon} alt="plus sign" /> */}
        </div>
        <div className="tech-content">
          {techdata && techdata.length > 0 ? (
            techdata?.map((postitem, key) => {
              const featuremedia =
                state.source.attachment[postitem?.featured_media];
              return (
                <div className="tech-step">
                  <div className="tech-step-card">
                    <span>{++key}</span>
                    <div className="tech-step-card-inner">
                      <div>
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: postitem.title.rendered,
                          }}
                        />
                        <Html2React html={postitem.content.rendered} />
                      </div>
                      <div className="tech-step-card-inner-img">
                        <img
                          src={featuremedia.source_url}
                          alt="experience-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <>
              <div className="tech-step">
                <div className="tech-step-card">
                  <span>1</span>
                  <div className="tech-step-card-inner">
                    <div>
                      <h3>EXPERIENCE</h3>
                      <p>
                        See Curriki products in action and learn best practices
                        by signing up for our free demo environment
                      </p>
                    </div>
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
                    <div>
                      <h3>CLICK</h3>
                      <p>Download corresponding code and begin integrating</p>
                    </div>
                    <div className="tech-step-card-inner-img">
                      <img src={resume2} alt="experience-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tech-step">
                <div className="tech-step-card">
                  <span>3</span>
                  <div className="tech-step-card-inner">
                    <div>
                      <h3>ENVIRONMENT</h3>
                      <p>
                        Configure a hosting environment from one of our partners
                      </p>
                    </div>
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
                    <div>
                      <h3>LAUNCH</h3>
                      <p>Congrats! Start building interactive courses today</p>
                    </div>
                    <div className="tech-step-card-inner-img">
                      <img src={resume4} alt="experience-icon" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(Technology);

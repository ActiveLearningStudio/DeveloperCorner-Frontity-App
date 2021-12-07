import React from "react";
import { connect } from "frontity";
function Heading({ Scrollspy, state }) {
  return (
    <>
      <div className="heading-contaner">
        <Scrollspy
          items={[
            "headings1",
            "headings2",
            "headings3",
            "headings4",
            "headings5",
            "headings6",
            "headings7",
            "headings8",
            "headings9",
            "headings10",
            "headings11",
          ]}
          style={{ padding: 0 }}
          currentClassName="is-current"
        >
          <a href="#headings1">
            <div className="heading">
              <p>1.</p>

              <p className="heading-text">
                How does Curriki’s technology work?
              </p>
            </div>
          </a>
          <a href="#headings2">
            <div className="heading">
              <p>2. </p>

              <p className="heading-text">API </p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              <p>3.</p>

              <p  className="heading-text">Reference Implementation/User Interface </p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              <p>4.</p>

              <p className="heading-text">
                {" "}
                Search Infrastructure (Elastic Stack)
              </p>
            </div>
          </a>
          <a href="#headings5">
            <div className="heading">
              <p>5.</p>

              <p className="heading-text"> Identity Framework</p>
            </div>
          </a>
          <a href="#headings6">
            <div className="heading">
              <p>6.</p>

              <p className="heading-text"> Active Learning Framework (H5P)</p>
            </div>
          </a>
          <a href="#headings7">
            <div className="heading">
              <p>7.</p>

              <p className="heading-text">
                {" "}
                Learning Tools Integration (LTI/Tsugi)
              </p>
            </div>
          </a>
          <a href="#headings8">
            <div className="heading">
              <p>8.</p>

              <p className="heading-text">Learning Record Store (xAPI/Trax)</p>
            </div>
          </a>
          <a href="#headings9">
            <div className="heading">
              <p>9.</p>

              <p className="heading-text">Multi tenancy</p>
            </div>
          </a>
          <a href="#headings10">
            <div className="heading">
              <p>10.</p>

              <p className="heading-text" style={{margin:'0px 0px 0px 16px'}}>Security Framework</p>
            </div>
          </a>
          <a href="#headings11">
            <div className="heading">
              <p>11.</p>

              <p className="heading-text" style={{margin:'0px 0px 0px 16px'}}>Business Intelligence/Data Mining</p>
            </div>
          </a>
        </Scrollspy>
      </div>
    </>
  );
}

export default connect(Heading);

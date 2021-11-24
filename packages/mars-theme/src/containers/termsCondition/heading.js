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
            "headings12",
          ]}
          style={{ padding: 0 }}
          currentClassName="is-current"
        >
          <a href="#headings1">
            <div className="heading">
              <p>1.</p>

              <p>Eligibility</p>
            </div>
          </a>
          <a href="#headings2">
            <div className="heading">
              <p>2. </p>

              <p>Privacy Policy</p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              <p>3.</p>

              <p>Individual Features and Services</p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              <p>4.</p>

              <p>Modification of these Terms</p>
            </div>
          </a>
          <a href="#headings5">
            <div className="heading">
              <p>5.</p>

              <p>Software and Content Downloads</p>
            </div>
          </a>
          <a href="#headings6">
            <div className="heading">
              <p>6.</p>

              <p>Contributions License Grant; Representations and Warranties</p>
            </div>
          </a>
          <a href="#headings7">
            <div className="heading">
              <p>7.</p>

              <p>Feedback</p>
            </div>
          </a>
          <a href="#headings8">
            <div className="heading">
              <p>8.</p>

              <p>Digital Millennium Copyright Act</p>
            </div>
          </a>
          <a href="#headings9">
            <div className="heading">
              <p>9.</p>

              <p>Prohibited Conduct</p>
            </div>
          </a>
          <a href="#headings10">
            <div className="heading">
              <p>10.</p>

              <p> Account; Membership Fees; Donations</p>
            </div>
          </a>
          <a href="#headings11">
            <div className="heading">
              <p>11.</p>

              <p> Third-Party Sites, Products and Services; Links</p>
            </div>
          </a>
          <a href="#headings12">
            <div className="heading">
              <p>12.</p>

              <p>Termination; Terms of Service Violations</p>
            </div>
          </a>
          <a href="#headings13">
            <div className="heading">
              <p>13.</p>

              <p> Ownership</p>
            </div>
          </a>
        </Scrollspy>
      </div>
    </>
  );
}

export default connect(Heading);

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
            "headings13",
            "headings14",
            "headings15",
            "headings16",
            "headings17",
            "headings18",
          ]}
          style={{ padding: 0 }}
          currentClassName="is-current"
        >
          <a href="#headings1">
            <div className="heading">
              <p>1.</p>

              <p class="heading-text">Eligibility</p>
            </div>
          </a>
          <a href="#headings2">
            <div className="heading">
              <p>2. </p>

              <p class="heading-text">Privacy Policy</p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              <p>3.</p>

              <p class="heading-text">Individual features and services</p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              <p>4.</p>

              <p class="heading-text">Modification of these terms</p>
            </div>
          </a>
          <a href="#headings5">
            <div className="heading">
              <p>5.</p>

              <p class="heading-text">Software and Content downloads</p>
            </div>
          </a>
          <a href="#headings6">
            <div className="heading">
              <p>6.</p>

              <p class="heading-text">Contributions license Grant</p>
            </div>
          </a>
          <a href="#headings7">
            <div className="heading">
              <p>7.</p>

              <p class="heading-text">Feedback</p>
            </div>
          </a>
          <a href="#headings8">
            <div className="heading">
              <p>8.</p>

              <p class="heading-text">Digital Millennium Copyright act</p>
            </div>
          </a>
          <a href="#headings9">
            <div className="heading">
              <p>9.</p>

              <p class="heading-text">Prohibited Conduct</p>
            </div>
          </a>
          <a href="#headings10">
            <div className="heading">
              <p>10.</p>

              <p class="heading-text"> Account; membership fees; donations</p>
            </div>
          </a>
          <a href="#headings11">
            <div className="heading">
              <p>11.</p>

              <p class="heading-text">
                {" "}
                Third-party sites, products and services; links
              </p>
            </div>
          </a>
          <a href="#headings12">
            <div className="heading">
              <p>12.</p>

              <p class="heading-text">
                Termination; terms of service violations
              </p>
            </div>
          </a>
          <a href="#headings13">
            <div className="heading">
              <p>13.</p>

              <p class="heading-text">
                {" "}
                Ownership; proprietary rights; deep linking & framing
              </p>
            </div>
          </a>
          <a href="#headings14">
            <div className="heading">
              <p>14.</p>

              <p class="heading-text"> Indemnification</p>
            </div>
          </a>
          <a href="#headings15">
            <div className="heading">
              <p>15.</p>

              <p class="heading-text"> Limitation of liability and damages</p>
            </div>
          </a>
          <a href="#headings16">
            <div className="heading">
              <p>16.</p>

              <p class="heading-text"> Limitation of liability and damages</p>
            </div>
          </a>
          <a href="#headings17">
            <div className="heading">
              <p>17.</p>

              <p class="heading-text"> Dispute resolution and arbitration</p>
            </div>
          </a>
          <a href="#headings18">
            <div className="heading">
              <p>18.</p>

              <p class="heading-text"> Miscellaneous</p>
            </div>
          </a>
        </Scrollspy>
      </div>
    </>
  );
}

export default connect(Heading);

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

              <p className="heading-text">Scope of this privacy policy</p>
            </div>
          </a>
          <a href="#headings2">
            <div className="heading">
              <p>2. </p>

              <p className="heading-text">Information we collect</p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              <p>3.</p>

              <p className="heading-text">How we use the information we collect</p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              <p>4.</p>

              <p className="heading-text">How we share the information we collect</p>
            </div>
          </a>
          <a href="#headings5">
            <div className="heading">
              <p>5.</p>

              <p className="heading-text">Your Choices</p>
            </div>
          </a>
          <a href="#headings6">
            <div className="heading">
              <p>6.</p>

              <p className="heading-text">Other</p>
            </div>
          </a>
        </Scrollspy>
      </div>
    </>
  );
}

export default connect(Heading);

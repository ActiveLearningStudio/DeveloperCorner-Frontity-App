import React from "react";
const Heading = ({ Scrollspy }) => {
  return (
    <>
      <div className="heading-contaner">
        <Scrollspy
          items={["headings1", "headings2", "headings3", "headings4"]}
          style={{ padding: 0 }}
          currentClassName="is-current"
        >
          <a href="#headings1">
            <div className="heading">
              <p>1.</p>
              <p className="heading-text"> Core platform</p>
            </div>
          </a>
          <a href="#headings2">
            <div className="heading">
              <p>2.</p>
              <p className="heading-text">LTI Integration</p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              <p>3.</p>
              <p className="heading-text"> Learning Record Store</p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              <p>4.</p>
              <p className="heading-text"> Core B.I. ETLs</p>
            </div>
          </a>
        </Scrollspy>
      </div>
    </>
  );
};

export default Heading;

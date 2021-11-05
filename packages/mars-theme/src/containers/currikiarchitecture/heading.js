import React from "react";
function Heading({ Scrollspy }) {
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

              <p>Documentation Home</p>
            </div>
          </a>
          <a href="#headings2">
            <div className="heading">
              <p>2. </p>

              <p> Curriki Developers </p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              <p>3.Curriki Users</p>

              <p> </p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              <p>4.</p>

              <p> Curriki Parteners</p>
            </div>
          </a>
          <a href="#headings5">
            <div className="heading">
              <p>5.</p>

              <p> Curriki Support</p>
            </div>
          </a>
        </Scrollspy>
      </div>
    </>
  );
}

export default Heading;

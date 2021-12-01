import React from "react";

const Heading = ({ Scrollspy }) => {
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
          ]}
          style={{ padding: 0 }}
          currentClassName="is-current"
        >
          <a href="#headings1">
            <div className="heading">
              <p>1.</p>
              <p className="heading-text"> Docker/Terraform</p>
            </div>
          </a>
          <a href="#headings2">
            <div className="heading">
              <p>2.</p>
              <p className="heading-text"> AWS</p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              <p>3.</p>
              <p className="heading-text"> Oracle Cloud</p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              <p>4.</p>
              <p className="heading-text"> Azure</p>
            </div>
          </a>
          <a href="#headings5">
            <div className="heading">
              <p>5.</p>
              <p className="heading-text">Linode</p>
            </div>
          </a>
          <a href="#headings6">
            <div className="heading">
              <p>6.</p>
              <p className="heading-text">Red Hat OpenShift</p>
            </div>
          </a>
          <a href="#headings7">
            <div className="heading">
              <p>7.</p>
              <p className="heading-text">Other cloud environments</p>
            </div>
          </a>
          <a href="#headings8">
            <div className="heading">
              <p>8.</p>
              <p className="heading-text">On premise deployments</p>
            </div>
          </a>
          <a href="#headings9">
            <div className="heading">
              <p>9.</p>
              <p className="heading-text">Noovo MAP (Satellite distribution)</p>
            </div>
          </a>
        </Scrollspy>
      </div>
    </>
  );
};

export default Heading;

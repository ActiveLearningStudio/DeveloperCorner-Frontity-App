import React from "react";
// import Headings from 'curriki-design-system/dist/utils/Headings/headings';

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
              {/* <Headings className="text" headingType="body2" color="#767676" text="1." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Docker/Terraform" /> */}
              <p>1.</p>
              <p> Docker/Terraform</p>
            </div>
          </a>
          <a href="#headings2">
            <div className="heading">
              {/* <Headings className="text" headingType="body2" color="#767676" text="2." />
       <Headings className="h-text" headingType="body2" color="#767676" text="AWS" /> */}
              <p>2.</p>
              <p> AWS</p>
            </div>
          </a>
          <a href="#headings3">
            <div className="heading">
              {/* <Headings className="text" headingType="body2" color="#767676" text="3." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Oracle Cloud" /> */}
              <p>3.</p>
              <p> Oracle Cloud</p>
            </div>
          </a>
          <a href="#headings4">
            <div className="heading">
              {/* <Headings className="text" headingType="body2" color="#767676" text="4." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Azure" /> */}
              <p>4.</p>
              <p> Azure</p>
            </div>
          </a>
          <a href="#headings5">
            <div className="heading">
              {/* <Headings className="text" headingType="body2" color="#767676" text="5." />
       <Headings className="h-text" headingType="body2" color="#767676" text=" Linode" /> */}
              <p>5.</p>
              <p>Linode</p>
            </div>
          </a>
          <a href="#headings6">
            <div className="heading">
              {/* <Headings className="text" headingType="body2" color="#767676" text="6." />
       <Headings className="h-text" headingType="body2" color="#767676" text="Red Hat OpenShift" /> */}
              <p>6.</p>
              <p>Red Hat OpenShift</p>
            </div>
          </a>
          <a href="#headings7">
            <div className="heading">
              {/* <Headings className="text" headingType="body2" color="#767676" text="7." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text="Other cloud environments"
       /> */}
              <p>7.</p>
              <p>Other cloud environments</p>
            </div>
          </a>
          <a href="#headings8">
            <div className="heading">
              {/* <Headings className="text" headingType="body2" color="#767676" text="8." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text="On premise deployments"
       /> */}
              <p>8.</p>
              <p>On premise deployments</p>
            </div>
          </a>
          <a href="#headings9">
            <div className="heading">
              {/* <Headings className="text" headingType="body2" color="#767676" text="9." />
       <Headings
        className="h-text"
        headingType="body2"
        color="#767676"
        text="Noovo MAP (Satellite distribution)"
       /> */}
              <p>9.</p>
              <p>Noovo MAP (Satellite distribution)</p>
            </div>
          </a>
        </Scrollspy>
      </div>
    </>
  );
};

export default Heading;

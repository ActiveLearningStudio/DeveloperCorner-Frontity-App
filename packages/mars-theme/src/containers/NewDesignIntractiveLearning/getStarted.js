import React from "react";
import { connect } from "frontity";
import StartedImg from "../../assets/images/Trynow1.svg";
import { Button } from "react-bootstrap";
const GetStarted = ({ getStartedpost, state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  const posttitle = getStartedpost[0]?.title;
  const postdesc = getStartedpost[0]?.content;
  const media = state?.source?.attachment[getStartedpost[0]?.featured_media];
  return (
    <div className="developer-get-started">
      <div className="container">
        <div className="get-started-content">
          <div className="get-started">
            <h3
              dangerouslySetInnerHTML={{
                __html: posttitle.rendered,
              }}
            />
            {/* <h3>Get started right now!</h3> */}
            <Html2React html={postdesc.rendered} />
            {/* <p>
              Create a developer account, get your credentials, and set up
              sandbox accounts for testing. We'll guide you through the steps to
              become a Curriki developer.
            </p> */}
            <Button variatn="secondary" className="get-started-btn">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(GetStarted);

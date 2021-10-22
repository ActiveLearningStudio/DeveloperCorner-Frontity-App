import React from "react";
import { Global, css } from "frontity";
// import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Banner from "../../components/banner";
import General from "./general";
import Archives from "./archives";
import externalCss from "./styles.css";

const Index = () => {
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner className="hero-section">
        <div className="hero-text">
          {/* <Headings headingType="h1" color="#FFB124" text="General Discussion" /> */}
          <h1>General Discussion</h1>
        </div>
      </Banner>
      <div className="General-Discussion-container">
        <General />
        <Archives />
      </div>
    </>
  );
};

export default Index;

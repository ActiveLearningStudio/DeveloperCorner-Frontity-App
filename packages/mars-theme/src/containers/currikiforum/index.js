import React from "react";
import { Global, css } from "frontity";
// import Headings from 'curriki-design-system/dist/utils/Headings/headings';
import Banner from "../../components/banner";
import Forums from "./forums";
import Login from "./login";
import externalCss from "./styles.css";

const Index = () => {
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner className="hero-section">
        <div className="hero-text">
          {/* <Headings headingType="h1" color="#FFB124" text="Curriki forum" /> */}
          <h1>CUrriki forum</h1>
        </div>
      </Banner>
      <div className="main-container">
        <Forums />
        <Login />
      </div>
    </>
  );
};

export default Index;

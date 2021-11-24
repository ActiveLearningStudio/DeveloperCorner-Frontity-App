import React from "react";
import { Global, css } from "frontity";
// import Headings from "curriki-design-system/dist/utils/Headings/headings";
import Banner from "../../components/banner";
import HeadingPage from "./heading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import externalCss from "../databaseschemas/style.css";

const Index = () => {
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner className="hero-section">
        <div className="hero-text">
          <h1>Deploying the Curriki Platform</h1>
        </div>
      </Banner>
      <div className="text-section">
        <div className="heading-content">
        <HeadingPage Scrollspy={Scrollspy} />
        </div>
        <Description />
      </div>
    </>
  );
};

export default Index;

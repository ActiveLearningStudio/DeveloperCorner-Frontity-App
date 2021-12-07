import React from "react";
import { Global, css } from "frontity";
import Banner from "../../components/banner";
import HeadingPage from "./heading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import externalCss from "./style.css";

const Index = () => {
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner className="hero-section">
        <div className="hero-text">
          <h1>Database Schemas</h1>
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

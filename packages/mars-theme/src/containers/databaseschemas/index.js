import React from "react";
import { Global, css } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import HeadingPage from "./heading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import externalCss from "./style.css";

const Index = () => {
  return (
    <>
      <Global styles={css(externalCss)} />
          <Banner title="Database Schema"/>
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

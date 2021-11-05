import React from "react";
import { Global, css } from "frontity";
// import Headings from "curriki-design-system/dist/utils/Headings/headings";
import Heading from "./heading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import Banner from "../../components/banner";
import externalCss from "./styles.css";

function index() {
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner className="hero-section">
        <div className="hero-text">
          {/* <Headings
            headingType="h1"
            color="#FFB124"
            text="Curriki’s Architecture/Components"
          /> */}
          <h1>Curriki User Manual</h1>
        </div>
      </Banner>
      <div className="text-section">
        <Heading Scrollspy={Scrollspy} />
        <Description />
      </div>
    </>
  );
}

export default index;

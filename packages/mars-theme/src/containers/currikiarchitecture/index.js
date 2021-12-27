import React from "react";
import { Global, css, connect } from "frontity";
// import Headings from "curriki-design-system/dist/utils/Headings/headings";
import Heading from "./heading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import Banner from "../../components/banner/Styledbanner";
import externalCss from "./styles.css";

function index({ state }) {
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner title="Curriki’s Architecture/Components"/>
      <div className="text-section">
        <div className="heading-content">
          <Heading Scrollspy={Scrollspy} />
        </div>

        <Description />
      </div>
    </>
  );
}

export default connect(index);

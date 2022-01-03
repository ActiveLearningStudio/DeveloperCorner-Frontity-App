import React from "react";
import ApiSection from "./apiContent";
import BusinessProduct from "./businessProduct";
import Technology from "./technology";
import { Global, css, connect } from "frontity";
import DeveloperTool from "./developerTool";
import HelpArea from "./helpSection";
import GetStarted from "./getStarted";
import ExternalCss from "./styles.css";
import heroSectionimg from "../../assets/images/hero-section.png";
// import Footer from "../../components/footer/index";

const Index = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const result = state.source[data.type][data.id];
  console.log("data", result);
  const Html2React = libraries.html2react.Component;
  return (
    <>
      <Global styles={css(ExternalCss)} />
      <div className="main-area">
        <div
          style={{ backgroundImage: "url(" + heroSectionimg + ")" }}
          className="heroSection"
        >
          <div className="container">
            <h2>
              Build Interactive Learning Apps with Currik's API and Developer
              Tools
            </h2>
            <p>
              Developer tools and resources to integrate our authoring tool into
              your existing learning technology stack.
            </p>
          </div>
        </div>
        <div className="container">
          <Html2React html={result.content.rendered} />
        </div>

        {/* <ApiSection />
        <BusinessProduct />
        <Technology />
        <GetStarted />
        <DeveloperTool />
        <HelpArea /> */}
      </div>
    </>
  );
};

export default connect(Index);

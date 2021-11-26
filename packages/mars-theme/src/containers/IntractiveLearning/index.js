import React from "react";
import ApiSection from "./apiContent";
import BusinessProduct from "./businessProduct";
import Technology from "./technology";
import { Global, css } from "frontity";
import DeveloperTool from "./developerTool";
import HelpArea from "./helpSection";
import GetStarted from "./getStarted";
import ExternalCss from "./styles.css";
import heroSectionimg from "../../assets/images/hero-section.png";
// import Footer from "../../components/footer/index";

const Index = () => {
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

        {/* api content */}

        <ApiSection />
        {/* bussines product */}
        <BusinessProduct />
        {/* technolgy section */}

        <Technology />
        {/* get started */}
        <GetStarted />
        {/* developer tool */}

        <DeveloperTool />
        {/* help area */}
        <HelpArea />
        {/* footer area */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Index;

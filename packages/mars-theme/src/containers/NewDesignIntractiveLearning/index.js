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

const Index = ({ interactiveCategory }) => {
  let { apidata, techdata, getStartedpost } = [];
  interactiveCategory.map(({ category, posts }) => {
    if (category) {
      if (category.id === 66) {
        return (apidata = posts);
      }
      if (category.id === 67) {
        return (techdata = posts);
      }
      if (category.id === 68) {
        return (getStartedpost = posts);
      }
    }
  });
  return (
    <>
      <Global styles={css(ExternalCss)} />
      <div className="main-area">
        {/* <div
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
        </div> */}

        {/* api content */}

        <ApiSection apidata={apidata} />
        {/* bussines product */}

        <Technology />
        {/* get started */}
        <GetStarted />
      </div>
    </>
  );
};

export default connect(Index);

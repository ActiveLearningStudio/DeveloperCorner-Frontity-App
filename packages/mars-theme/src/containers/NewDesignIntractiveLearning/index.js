import React from "react";
import { Global, css, connect } from "frontity";
import ApiSection from "./apiContent";
import BusinessProduct from "./businessProduct";
import Technology from "./technology";
import Loading from "../../components/loading/loading";
import DeveloperTool from "./developerTool";
import HelpArea from "./helpSection";
import GetStarted from "./getStarted";
import ExternalCss from "./styles.css";
import heroSectionimg from "../../assets/images/hero-section.png";

const Index = ({ interactiveCategory, data }) => {
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
      <div className="container">{data && data.isFetching && <Loading />}</div>
      {data.isReady && (
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

          <Technology techdata={techdata} />
          {/* get started */}
          <GetStarted getStartedpost={getStartedpost} />
        </div>
      )}
    </>
  );
};

export default connect(Index);

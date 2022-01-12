import React from "react";
import { Global, css, connect } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import Loading from "../../components/loading/loading";
import HeadingPage from "./heading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import externalCss from "../databaseschemas/style.css";
const Index = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner title="Deploying the Curriki Platform" />
      {data.isFetching && <Loading />}
      {data.isReady && (
        <div className="text-section">
          <div className="heading-content">
            <HeadingPage Scrollspy={Scrollspy} data={data} />
          </div>
          <Description data={data} />
        </div>
      )}
    </>
  );
};

export default connect(Index);

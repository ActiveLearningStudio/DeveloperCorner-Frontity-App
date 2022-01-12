import React from "react";
import { Global, css, connect } from "frontity";
import Heading from "./heading";
import Loading from "../../components/loading/loading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import Banner from "../../components/banner/Styledbanner";
import externalCss from "./styles.css";
function index({ state }) {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner title="Curriki’s Architecture/Components" />
      {data.isFetching && <Loading />}
      {data.isReady && (
        <div className="text-section">
          <div className="heading-content">
            <Heading Scrollspy={Scrollspy} data={data} />
          </div>

          <Description data={data} />
        </div>
      )}
    </>
  );
}

export default connect(index);

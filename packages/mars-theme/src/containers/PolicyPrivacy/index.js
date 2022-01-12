import React from "react";
import { Global, css, connect } from "frontity";
// import Headings from "curriki-design-system/dist/utils/Headings/headings";
import Heading from "./heading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import Banner from "../../components/banner/Styledbanner";
import externalCss from "./styles.css";

function Index({ state }) {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner title="Privacy policy" />
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

export default connect(Index);

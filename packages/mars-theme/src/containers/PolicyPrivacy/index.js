import React from "react";
import { Global, css, connect, decode } from "frontity";
// import Headings from "curriki-design-system/dist/utils/Headings/headings";
import Heading from "./heading";
import Loading from "../../components/loading/loading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import Banner from "../../components/banner/Styledbanner";
import externalCss from "./styles.css";
import FetchError from "../../components/error/fetchError";
import ServerError from "../../components/error/server";

function Index({ state }) {
  const data = state.source.get(state.router.link);
  const categoryName =
    data.isTaxonomy && decode(state.source[data.taxonomy][data.id].name);
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner title={data.isTaxonomy ? categoryName : "Privacy policy"} />
      {data.isFetching && <Loading />}
      {!data.isFetching && (
        <div className="text-section">
          {!data.isError ? (
            data.isReady && data.items.length ? (
              <>
                <div className="heading-content">
                  <Heading Scrollspy={Scrollspy} data={data} />
                </div>

                <Description data={data} />
              </>
            ) : (
              <FetchError categoryName="Privacy policy" />
            )
          ) : (
            <ServerError />
          )}
        </div>
      )}
    </>
  );
}

export default connect(Index);

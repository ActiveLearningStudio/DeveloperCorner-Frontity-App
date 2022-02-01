import React from "react";
import { Global, css, connect, decode } from "frontity";
import Alert from "react-bootstrap/Alert";
import Banner from "../../components/banner/Styledbanner";
import Loading from "../../components/loading/loading";
import ServerError from "../../components/error/server";
import FetchError from "../../components/error/fetchError";
import HeadingPage from "./heading";
import Description from "./description";
import Scrollspy from "react-scrollspy";
import externalCss from "./style.css";
const Index = ({ state }) => {
  const data = state.source.get(state.router.link);
  const categoryName =
    data.isTaxonomy && decode(state.source[data.taxonomy][data.id].name);
  return (
    <>
      <Global styles={css(externalCss)} />
      <Banner title={data.isTaxonomy ? categoryName : "Database Schema"} />
      {data.isFetching && <Loading />}
      {!data.isFetching && (
        <div className="text-section">
          {!data.isError ? (
            data.isReady && data.items.length ? (
              <>
                {" "}
                <div className="heading-content">
                  <HeadingPage Scrollspy={Scrollspy} data={data} />
                </div>
                <Description data={data} />
              </>
            ) : (
              <FetchError categoryName="database Schema" />
            )
          ) : (
            <ServerError />
          )}
        </div>
      )}
    </>
  );
};

export default connect(Index);

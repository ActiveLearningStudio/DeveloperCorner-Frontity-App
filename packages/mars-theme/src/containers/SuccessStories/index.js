import React from "react";
import { connect, decode } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import SuccessStories from "./successStories";
const Index = ({ state }) => {
  const data = state.source.get(state.router.link);
  const categoryName =
    data.isTaxonomy && decode(state.source[data.taxonomy][data.id].name);
  return (
    <div>
      <Banner title={data.isTaxonomy ? categoryName : "Success Stories"} />
      <SuccessStories data={data} />
    </div>
  );
};

export default connect(Index);

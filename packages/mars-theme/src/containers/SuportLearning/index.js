import React from "react";
import { connect } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import Loading from "../../components/loading/loading";
import GetInvolved from "./GetInvolved";
import LearnImpact from "./LearnImpact";
import Roadmap from "./Roadmap";
const Index = (props) => {
  const { learningCategory, data } = props;
  let {
    gettingInvlovedpostdata,
    learningBannerposts,
    roadMapposts,
    learnposts,
  } = [];
  learningCategory.map(({ category, posts }) => {
    if (category) {
      if (category.id === 61) {
        return (gettingInvlovedpostdata = posts);
      }
      if (category.id === 62) {
        return (learningBannerposts = posts);
      }
      if (category.id === 63) {
        return (roadMapposts = posts);
      }
      if (category.id === 64) {
        return (learnposts = posts);
      }
    }
  });
  return (
    <>
      <Banner
        title="Support Learning"
        subheading="IMPACTING EDUCATION THROUGH TECHNOLOGY"
        para="Curriki is dedicated to making interactive learning experiences accessible for everyone.
      by providing free and open tools to design, customize and publish content."
      />
      {data.isFetching && <Loading />}
      {data.isReady && (
        <>
          <GetInvolved gettingInvlovedpost={gettingInvlovedpostdata} />
          <Roadmap roadMapposts={roadMapposts} />
          <LearnImpact learnposts={learnposts} />
        </>
      )}
    </>
  );
};

export default connect(Index);

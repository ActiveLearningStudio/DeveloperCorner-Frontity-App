import React from "react";
import { styled } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import Sidebar from "../../components/Sidebar/index";
import InteractiveLearning from "../NewDesignIntractiveLearning/index";
import Help from "../../components/help/index";
const Index = () => {
  return (
    <div>
      <Banner
        title=" Build Interactive Learning Apps with Currik's API and Developer
              Tools"
        subheading=" Developer tools and resources to integrate our authoring tool into
              your existing learning technology stack."
      />

      <Container>
        <Sidebar />
        <div className="page-wrapper">
          <InteractiveLearning />
        </div>
        {/* <Help /> */}
      </Container>
    </div>
  );
};

export default Index;
const Container = styled.div`
  display: flex;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
  .page-wrapper {
    max-width: 970px;
    padding: 60px;
    @media screen and (max-width: 1200px) {
      max-width: 830px;
      padding: 60px 0px 30px 60px;
    }
    @media screen and (max-width: 1100px) {
      max-width: 830px;
      padding: 60px 0px 60px;
    }
     @media screen and (max-width: 500px) {
      max-width: 260px;
    }
  }
  }
  
`;

import React from "react";
import { styled } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import Sidebar from "../../components/Sidebar/index";
import InteractiveLearning from "../NewDesignIntractiveLearning/index";
import Help from "../../components/help/index";
const Index = ({ interactiveCategory, data }) => {
  return (
    <div>
      <Banner
        title=" Build Interactive Learning Apps with Curriki's API and Developer
              Tools"
        subheading=" Developer tools and resources to integrate our authoring tool into
              your existing learning technology stack."
      />

      <Container>
        <Sidebar />
        <div className="page-wrapper">
          <InteractiveLearning
            interactiveCategory={interactiveCategory}
            data={data}
          />
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
    width:100%;
    padding:0px 84px;
  }
  @media screen and (max-width: 768px) {
    width:100%;
    padding:0px 40px;
  }
  .page-wrapper {
    max-width: 970px;
    padding: 60px;
    @media screen and (max-width: 1200px) {
      max-width: 830px;
      padding: 60px 0px 30px 60px;
    }
    @media screen and (max-width: 1100px) {
      padding: 60px 0px 60px;
    }
      @media screen and (max-width: 992px) {
      padding: 60px 0px;
      width:100%;
    }
     @media screen and (max-width: 500px) {
     width:100%;
    }
  }
  }
  
`;

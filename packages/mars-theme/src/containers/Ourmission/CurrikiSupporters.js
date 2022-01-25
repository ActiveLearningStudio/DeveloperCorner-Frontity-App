import React from "react";
import { styled, connect } from "frontity";
import Oracle from "../../assets/images/ourMission/oracle.svg";
import SusanImg from "../../assets/images/ourMission/susandel.svg";
import Charles from "../../assets/images/ourMission/charles.svg";
import Foundation from "../../assets/images/ourMission/foundation.svg";
import ATT from "../../assets/images/ourMission/AT.svg";
import AWS from "../../assets/images/ourMission/aws.svg";
import amgenpic from "../../assets/images/amgenpic.png";
import Attpic from "../../assets/images/Attpic.png";
import Birdies from "../../assets/images/Birdies.png";
const CurrikiSupporters = ({ supporterPosts, state }) => {
  return (
    <Section>
      <Container>
        <Content>
          <HeadingContent>
            <Heading>
              <span>Curriki suporters</span> are some of the world's leading
            </Heading>
            <Heading> technology companies and foundations.</Heading>
          </HeadingContent>
          <Foundations>
            {supporterPosts &&
              supporterPosts?.map((postitem, key) => {
                const featuremedia =
                  state.source.attachment[postitem?.featured_media];
                return (
                  <Div>
                    <img src={featuremedia.source_url} alt="" />
                  </Div>
                );
              })}
            {/* <Div>
              <img src={Attpic} alt="" />
            </Div>
            <Div>
              <img src={Foundation} alt="" />
            </Div>
            <Div>
              <img src={Birdies} alt="" width="208px" />
            </Div>
            <Div>
              <img src={Charles} alt="" />
            </Div>
            <Div>
              <img src={amgenpic} alt="" />
            </Div>
            <Div>
              <img src={Oracle} alt="" />
            </Div>
            <Div>
              <img src={AWS} alt="" />
            </Div> */}
          </Foundations>
        </Content>
      </Container>
    </Section>
  );
};

export default connect(CurrikiSupporters);
const Section = styled.div``;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeadingContent = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;
const Heading = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  color: #084892;
  span {
    color: #f8af2c;
  }
`;
const Foundations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Div = styled.div`
  margin-right: 30px;
  margin-bottom: 70px;
  max-width: 208px;
  img {
    width: 100%;
    @media screen and (max-width: 500px) {
      width: 150px;
    }
  }
`;

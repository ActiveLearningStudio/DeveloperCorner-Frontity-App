import React from "react";
import { css, styled } from "frontity";
import featurePic from "../../assets/images/Group153.png";
import MoneyPic from "../../assets/images/Group29.png";
import tabletpic from "../../assets/images/tabletpic.svg";
import searchpic from "../../assets/images/searchpic.svg";
const Features = () => {
  return (
    <FeatureSection>
      <StyleDiv>
        <Container>
          <StyleFeature>
            <OuterDiv>
              <img src={MoneyPic} alt="" />
              <div>
                <h2>Save money and time</h2>
                <p>
                  With free technology solutions Curriki brings simplicity to
                  authoring and publishing, opening up a new world of
                  possiblility for student engagement, empowering educators to
                  create interactive expereinces for learners at all levels.
                </p>
              </div>
            </OuterDiv>
            <OuterDiv>
              <img src={tabletpic} alt="" />
              <div>
                <h2>Help employees achieve better results</h2>
                <p>
                  Transform lectures, case studies, and assessments into
                  interactive course activities. Add multiple interactions into
                  your slide presentations and videos, create visual study
                  tools, and create opportunities for deeper conceptual
                  understanding. It takes just a few minutes to go from a
                  one-to-many class to a distance learning experience that
                  engages.
                </p>
              </div>
            </OuterDiv>
            <OuterDiv>
              <img src={searchpic} alt="" />
              <div>
                <h2>Increase productivity and profitability</h2>
                <p>
                  Transform lectures, case studies, and assessments into
                  interactive course activities. Add multiple interactions into
                  your slide presentations and videos, create visual study
                  tools, and create opportunities for deeper conceptual
                  understanding. It takes just a few minutes to go from a
                  one-to-many class to a distance learning experience that
                  engages.
                </p>
              </div>
            </OuterDiv>
          </StyleFeature>
        </Container>
      </StyleDiv>
    </FeatureSection>
  );
};

export default Features;
const FeatureSection = styled.div`
  position: relative;
  height: 730px;
  @media screen and (max-width: 768px) {
    height: 1150px;
  }
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
`;

const StyleDiv = styled.div`
  background-image: url(${featurePic});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -190px;
  width: 100%;
  z-index: -1;
`;
const StyleFeature = styled.div`
  margin-top: 230px;
  padding: 40px;
  @media screen and (max-width: 992px) {
    margin-top: 140px;
  }
`;
const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  justify-content: between;

  div {
    margin-left: 7rem;
    flex-direction: column;
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #084892;
    }
    p {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #515151;
    }
  }
@media screen and (max-width: 768px) {
  flex-direction:column;
  img {
    margin-bottom:30px;
  }
`;

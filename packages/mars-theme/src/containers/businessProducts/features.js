import React from "react";
import { css, styled } from "frontity";
import { Container } from "react-bootstrap";
import featurePic from "../../assets/images/Group153.png";
import MoneyPic from "../../assets/images/Group29.png";
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
                  WIth free technology solution curriki brings simplicity to
                  authoring and publishing, opening up a new world of
                  possiblility for student engangment, empowering educaators to
                  create interactive expereincs for learners at all levels.
                </p>
              </div>
            </OuterDiv>
            <OuterDiv>
              <img src={MoneyPic} alt="" />
              <div>
                <h2>Save money and time</h2>
                <p>
                  WIth free technology solution curriki brings simplicity to
                  authoring and publishing, opening up a new world of
                  possiblility for student engangment, empowering educaators to
                  create interactive expereincs for learners at all levels.
                </p>
              </div>
            </OuterDiv>
            <OuterDiv>
              <img src={MoneyPic} alt="" />
              <div>
                <h2>Save money and time</h2>
                <p>
                  WIth free technology solution curriki brings simplicity to
                  authoring and publishing, opening up a new world of
                  possiblility for student engangment, empowering educaators to
                  create interactive expereincs for learners at all levels.
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
  height:1150px;
}
`;

const StyleDiv = styled.div`
  background-image: url(${featurePic});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -135px;
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
      font-weight: 500;
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

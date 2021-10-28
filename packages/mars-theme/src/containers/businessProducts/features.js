import React from "react";
import { css, styled } from "frontity";
import featurePic from "../../assets/images/Group153.png";
import MoneyPic from "../../assets/images/Group29.png";
const Features = () => {
  return (
    <div
      css={css`
        position: relative;
        height: 730px;
      `}
    >
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
    </div>
  );
};

export default Features;
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
      color: #084892;
    }
    p {
      color: #515151;
    }
  }
`;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0px 110px;
`;

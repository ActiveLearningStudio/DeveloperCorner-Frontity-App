import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import backgroundPic from "../../assets/images/Group153.png";
import plusicon from "../../assets/images/PLUS.svg";
import HandImg from "../../assets/images/Group330.png";
const AboutProgram = () => {
  return (
    <Section>
      <Background>
        <Container>
          <Heading>
            <h2>ABOUT THE PROGRAM</h2>
            <img src={plusicon} alt="" />
          </Heading>
          <Content>
            <InnerDIv>
              <LeftCol>
                <img src={HandImg} alt="" />
              </LeftCol>
              <RightCol>
                <h3>Why become a provider</h3>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Expanded your existing offerings</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Unlock new revenue stream(s)</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Lead generation f rom curriki</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>CO-marketing/promotion</span>
                </p>
              </RightCol>
            </InnerDIv>
            <InnerDIv>
              <LeftCol>
                <img src={HandImg} alt="" />
              </LeftCol>
              <RightCol>
                <h3>Bennefits of being provider</h3>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Expanded your existing offerings</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Unlock new revenue stream(s)</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Lead generation f rom curriki</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>CO-marketing/promotion</span>
                </p>
              </RightCol>
            </InnerDIv>
          </Content>
        </Container>
      </Background>
    </Section>
  );
};

export default AboutProgram;

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
`;

const Background = styled.div`
  background: url("${backgroundPic}");
  position: absolute;
  top: -212px;
  width: 100%;
  z-index: -1;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-top: 250px;
  h2 {
    margin-right: 10px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: #084892;
  }
`;
const Content = styled.div``;
const InnerDIv = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
const LeftCol = styled.div``;
const RightCol = styled.div`
  margin-left: 8rem;
  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    color: #084892;
  }
  p {
    img {
      width: 12px;
      hight: 12px;
    }
    span {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 25px;
      color: #515151;
      margin-left: 10px;
    }
  }
`;

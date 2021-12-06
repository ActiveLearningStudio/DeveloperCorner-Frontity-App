import React from "react";
import { styled } from "frontity";
import backgroundPic from "../../assets/images/Group153.png";
import plusicon from "../../assets/images/PLUS.svg";
import HandImg from "../../assets/images/Group330.png";
import handiconPic from "../../assets/images/handiconPic.png";
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
                  <span>Expanded your existing offerings.</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Unlock new revenue stream(s).</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Lead generation from Curriki.</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Co-marketing/promotion.</span>
                </p>
              </RightCol>
            </InnerDIv>
            <InnerDIv>
              <LeftCol>
                <img src={handiconPic} alt="" />
              </LeftCol>
              <RightCol>
                <h3>Benefits of being a provider</h3>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Dedicated point of contact.</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Priority support & ticketing.</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Invited to present to partners/prospects.</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Training - Tech & Learning Design.</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Centralized Certified Knowledge Base.</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Badge & promotion/listing on site.</span>
                </p>
                <p>
                  <img src={plusicon} alt="" />
                  <span>Certified Partner Slack Channel.</span>
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
const Container = styled.div`
max-width:1440px;
padding:0px 146px;
`;

const Background = styled.div`
  background: url("${backgroundPic}");
  position: absolute;
  background-repeat:no-repeat;
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-left: 0px;
  }
`;

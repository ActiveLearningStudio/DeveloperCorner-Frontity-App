import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import Oracle from "../../assets/images/ourMission/oracle.svg";
import SusanImg from "../../assets/images/ourMission/susandel.svg";
import Charles from "../../assets/images/ourMission/charles.svg";
import Foundation from "../../assets/images/ourMission/foundation.svg";
import ATT from "../../assets/images/ourMission/AT.svg";
import AWS from "../../assets/images/ourMission/aws.svg";
const CurrikiSupporters = () => {
  return (
    <Section>
      <Container>
        <Content>
          <HeadingContent>
            <Heading>
              <span>Curriki suporters</span> are some of the world's leading
            </Heading>
            <Heading> technology companies and foundations</Heading>
          </HeadingContent>
          <Foundations>
            <Div>
              <img src={SusanImg} alt="" />
            </Div>
            <Div>
              <img src={Foundation} alt="" />
            </Div>
            <Div>
              <img src={Charles} alt="" />
            </Div>
            <Div>
              <img src={Foundation} alt="" />
            </Div>
            <Div>
              <img src={Oracle} alt="" />
            </Div>
            <Div>
              <img src={ATT} alt="" />
            </Div>
            <Div>
              <img src={AWS} alt="" />
            </Div>
          </Foundations>
        </Content>
      </Container>
    </Section>
  );
};

export default CurrikiSupporters;
const Section = styled.div``;
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
  color: #f8af2c;
  span {
    color: #ffb124;
  }
`;
const Foundations = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 992px) {
    padding: 0px 150px;
  }
`;
const Div = styled.div`
  margin-right: 30px;
  margin-bottom: 70px;
`;

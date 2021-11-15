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
        <Heading>
          Curriki suporters are some of the world's leading technology companies
          and foundations
          <Foundations>
            <img src={SusanImg} alt="" />
            <img src={Foundation} alt="" />
            <img src={Charles} alt="" />
            <img src={Foundation} alt="" />
            <img src={Oracle} alt="" />
            <img src={ATT} alt="" />
            <img src={AWS} alt="" />
          </Foundations>
        </Heading>
      </Container>
    </Section>
  );
};

export default CurrikiSupporters;
const Section = styled.div``;

const Heading = styled.h2``;
const Foundations = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import BirdiesImg from "../../assets/images/ourMission/birdies.svg";
import HeartIcon from "../../assets/images/ourMission/heart1.svg";
const BirdiesforEducation = () => {
  return (
    <Section>
      <Container>
        <TopHeading>BIrdies for Education</TopHeading>
        <UpperRow>
          <LeftCol>
            <Paragraph>
              COntribute through Birdies for Education- Maverick McNealy's golf
              fundraise for Curriki.
            </Paragraph>
            <Button>TAKE ME TO BIRDIES</Button>
          </LeftCol>
          <RightCol>
            <img src={BirdiesImg} alt="" />
          </RightCol>
        </UpperRow>
        <BottomRow>
          <LeftCol>
            <img src={HeartIcon} alt="" />
            <h3>Donate Offline</h3>
            <Paragraph>
              Send your tax deductible contribution directly to us by maiiling
              it to: 20660 Stevens Creek BLvd/332 Cupertino , CA 95104
            </Paragraph>
          </LeftCol>
          <RightCol>
            <img src={HeartIcon} alt="" />
            <h3>Alternative ways to contribute</h3>
            <Paragraph>
              AmazonSmile is a simple and automatic way for you to supoort
              Curriki every time you shop, at no costto you.
              <Link>AmazonSmile</Link>
            </Paragraph>
          </RightCol>
        </BottomRow>
      </Container>
    </Section>
  );
};

export default BirdiesforEducation;
const Section = styled.div``;

const TopHeading = styled.h2`
  font-familt: rubic;
`;
const UpperRow = styled.div`
  display: flex;
`;
const BottomRow = styled.div`
  display: flex;
`;
const LeftCol = styled.div``;
const RightCol = styled.div``;
const Paragraph = styled.p``;
const Button = styled.button``;
const Link = styled.a`
  display: flex;
`;

import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import BirdiesImg from "../../assets/images/ourMission/birdies.svg";
import HeartIcon from "../../assets/images/ourMission/heart1.svg";
const BirdiesforEducation = () => {
  return (
    <Section>
      <Container>
        <Content>
          <UpperRow>
            <LeftCol>
              <TopHeading>Birdies for Education</TopHeading>
              <Paragraph>
                Contribute through Birdies for Education- Maverick McNealy's
                golf fundraise for Curriki.
              </Paragraph>
              <Button>TAKE ME TO BIRDIES</Button>
            </LeftCol>
            <RightCol>
              <img src={BirdiesImg} alt="" width="550px" />
            </RightCol>
          </UpperRow>
          <BottomRow>
            <LeftCol>
              <img src={HeartIcon} alt="" />
              <HeaderContent>
                <h6>Donate Offline</h6>
                <BottomLine></BottomLine>
              </HeaderContent>
              <Paragraph>
                Send your tax deductible contribution directly to us by maiiling
                it to: 20660 Stevens CreekBLvd/332 Cupertino , CA 95104
              </Paragraph>
            </LeftCol>
            <RightCol>
              <img src={HeartIcon} alt="" />
              <HeaderContent>
                <h6>Alternative ways to contribute</h6>
                <BottomLine></BottomLine>
              </HeaderContent>

              <Paragraph>
                AmazonSmile is a simple and automatic way for you to supoort
                Curriki every time you shop, at no costto you.
                <Link>AmazonSmile</Link>
              </Paragraph>
            </RightCol>
          </BottomRow>
        </Content>
      </Container>
    </Section>
  );
};

export default BirdiesforEducation;
const Section = styled.div``;
const Content = styled.div`
  padding: 80px 0px;
`;
const TopHeading = styled.h2`
  color: #084892;
  margin-bottom: 40px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  color: #084892;
`;
const UpperRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
`;
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftCol = styled.div`
  h6 {
    color: #084892;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  button {
    background: #084892;
    color: #fff;
    border-radius: 25px;
    border: none !important;
    padding: 5px 20px;
    margin-top: 10px;
  }
`;
const RightCol = styled.div`
  h6 {
    color: #084892;
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;
const HeaderContent = styled.div`
  display: flex;
  width: 230px;
  justify-content: space-between;
  align-items: center;
  h6 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #084892;
  }
`;
const BottomLine = styled.div`
  width: 100px;
  border-bottom: 2px solid #ffb124;
`;
const Paragraph = styled.p`
  color: #515151;
  font-family: Open Sans;
`;
const Button = styled.button``;
const Link = styled.a`
  display: flex;
  margin-top: 15px;
  color: #084892;
`;

import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import plusicon from "../../assets/images/PLUS.svg";
import DonorImg from "../../assets/images/ourMission/Donors3.png";

const Donation = () => {
  return (
    <Section>
      <Container>
        <Content>
          <LeftCol>
            <Heading>
              Your donation supports our non profit mission, which is to bring
              free and open technolgy tool in every school, collge and non
              profit organization
            </Heading>

            <Innerdiv>
              <img src={plusicon} alt="" />

              <Paragraph>
                if contributing by check please send your tax exept donation ot
                Curriki, 20660 Stevens Creek blvd #332, Cupertino, CA 95014
              </Paragraph>

              <p>CUrriki non profit taX ID#203478467</p>
            </Innerdiv>
            <Innerdiv>
              <img src={plusicon} alt="" />
              <Paragraph>If you would like to pay by credit card</Paragraph>
            </Innerdiv>
            <button>CLICK HERE</button>
          </LeftCol>
          <RightCol>
            <img src={DonorImg} alt="" />
          </RightCol>
        </Content>
      </Container>
    </Section>
  );
};

export default Donation;

const Section = styled.div``;

const Content = styled.div`
  display: flex;
  padding: 80px 0px;
`;
const LeftCol = styled.div`
  button {
    background: #084892;
    color: #fff;
    border-radius: 50px;
    border: none !important;
    padding: 5px 20px;
  }
`;
const Paragraph = styled.div``;
const RightCol = styled.div``;
const Innerdiv = styled.div`
  display: flex;
`;
const Heading = styled.h2``;
const Para1 = styled.div``;

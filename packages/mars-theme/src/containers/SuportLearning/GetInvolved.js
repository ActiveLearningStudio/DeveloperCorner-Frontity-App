import React from "react";
import { styled } from "frontity";
import plusicon from "../../assets/images/PLUS.svg";
const GetInvolved = () => {
  return (
    <Container>
      <Content>
        <HeadingContent>
          <Topheading>
            <Heading>Getting invloved</Heading>
            <img src={plusicon} alt="" />
          </Topheading>

          <Subheading>Fund an initative</Subheading>
        </HeadingContent>
        <InnerContent>
          <LeftCol>
            <Colheading>In-Kind Services</Colheading>
            <Paragraph>
              As a small but mighty nonprofit, we allocate most of our resources
              towards building the most high priority items that support our
              core technology. See our roadmap plans here. Our open source
              approach is so that organizations with technology talent can
              contribute to our ecosystem and advance the mission.
            </Paragraph>
            <Button>contact us</Button>
          </LeftCol>
          <RightCol>
            <Colheading>Making a donation</Colheading>
            <Paragraph>
              Do you want to support innovation in education but don’t know
              where to start? Our partners are exploding with ideas to innovate
              but we alone don’t have the resources. Supporting our roadmap
              means that you are helping learners and educators innovate and
              access interactive learning experiences like never before.
            </Paragraph>
            <Button>Donate</Button>
          </RightCol>
        </InnerContent>
      </Content>
    </Container>
  );
};

export default GetInvolved;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
const Content = styled.div`
  padding: 80px 0px 0px 0px;
`;
const HeadingContent = styled.div`
  @media screen and (max-width: 576px) {
    padding: 0px 20px;
  }
`;
const Topheading = styled.div`
  display: flex;
  align-items: center;
`;
const Heading = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  margin-right: 20px;
  text-transform: uppercase;
`;

const Subheading = styled.span`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  text-transform: uppercase;
`;
const Colheading = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: #084892;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftCol = styled.div``;
const RightCol = styled.div`
  @media screen and (max-width: 1024px) {
    margin-left: 30px;
  }
`;
const Paragraph = styled.p`
  max-width: 500px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
  margin-bottom: 40px;
  @media screen and (max-width: 1200px) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 992px) {
    margin-bottom: 40px;
  }
`;
const Button = styled.button`
  padding: 5px 40px;
  background: #084892;
  color: #fff;

  text-transform: uppercase;
  border: 1px solid #084892;
  box-shadow: 0px 10px 20px -5px rgb(8 72 146 / 35%);
  border-radius: 25px;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    margin-bottom: 30px;
  }
`;

import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import PrimaryButton from "../../StyledComponent/PrimaryButton";
import StyledPara from "../../StyledComponent/StyledPara";
import StyledHeading from "../../StyledComponent/StyledHeading";
import plusicon from "../../assets/images/PLUS.svg";
const LearnImpact = () => {
  return (
    <Container>
      <Content>
        <HeadingContent>
          <Topheading>
            <Heading>LEARN</Heading>
            <img src={plusicon} alt="" />
          </Topheading>

          <Subheading>OUR IMPACT</Subheading>
        </HeadingContent>
        <InnerContent>
          <LeftCol>
            <Colheading>Curriki suites release notes</Colheading>
            <Paragraph>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text."
            </Paragraph>
            <Button>contact us</Button>
          </LeftCol>
          <RightCol>
            <Colheading>See the impact we make</Colheading>
            <Paragraph>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text."
            </Paragraph>
            <Button>Donate</Button>
          </RightCol>
        </InnerContent>
      </Content>
    </Container>
  );
};

export default LearnImpact;
const Content = styled.div`
  padding: 50px 0px 80px 0px;
`;
const HeadingContent = styled.div``;
const Topheading = styled.div`
  display: flex;
  align-items: center;
`;
const Heading = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  margin-right: 20px;
  text-transform: uppercase;
`;

const Subheading = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
`;
const Colheading = styled.h3`
  font-family: Rubik;
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
`;
const LeftCol = styled.div``;
const RightCol = styled.div``;
const Paragraph = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
  width: 500px;
  height: 100px;
  margin-bottom: 80px;
`;
const Button = styled.button`
  width: 337px;
  height: 45px;
  background: #084892;
  box-shadow: 0px 10px 20px -5px rgb(8 72 146 / 35%);
  border-radius: 25px;
  font-weight: bold;
  color: #fff;
  border: 1px solid #084892;
  text-transform: uppercase;
`;

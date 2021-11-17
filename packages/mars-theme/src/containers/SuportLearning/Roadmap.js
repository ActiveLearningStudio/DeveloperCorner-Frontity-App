import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import StyledHeading from "../../StyledComponent/StyledHeading";
import backgroundPic from "../../assets/images/Group153.png";
import plusicon from "../../assets/images/PLUS.svg";
import CardImg from "../../assets/images/Rectangle10.png";
import vectorpc from "../../assets/images/vectorpc.png";
import pcimage from "../../assets/images/Rectangle109.png";

const Roadmap = () => {
  return (
    <Section>
      <Container>
        <HeadingContent>
          <TopHeading>
            <Heading>ROADMAP</Heading>
            <img src={plusicon} alt="" />
          </TopHeading>
          <Subheading>CONTRIBUTE TO THE FUTURE OF EDUCATION</Subheading>
        </HeadingContent>
        <CardContent>
          <Card>
            <CardHead>
              <div>
                <img src={vectorpc} alt="" />
              </div>
            </CardHead>
            <CardHeading>CONTENT CLEARING HOUSE</CardHeading>
            <Paragraph>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </Paragraph>
            <CardBottom>
              <CardHeading>Ask:</CardHeading>
              <Bottom>
                <img src={plusicon} alt="" />

                <Para>Introduction ot content publisher</Para>
              </Bottom>
              <Bottom>
                <img src={plusicon} alt="" />

                <Para>Introduction ot content publisher</Para>
              </Bottom>
            </CardBottom>
          </Card>
        </CardContent>
      </Container>
    </Section>
  );
};

export default Roadmap;
const Section = styled.div`
  background: url("${backgroundPic}");
  background-repeat: no-repeat;
  width: 100%;
  margin-top: -40px;
`;

const HeadingContent = styled.div`
  padding-top: 200px;
`;
const TopHeading = styled.div`
  display: flex;
  align-items: center;
`;
const Heading = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  margin-right: 20px;
`;

const Subheading = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 60px;
  color: #084892;
`;
const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 340px;
  height: 740px;
  border-radius: 5px;
  background: #fff;
  margin-right: 25px;
  margin-bottom: 25px;
`;

const CardHead = styled.div`
  background: url("${CardImg}");
  width: 340px;
  height: 340px;
  border-radius: 5px;
  div {
    text-align: center;
    padding-top: 120px;
  }
`;
const CardHeading = styled.h5`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #084892;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Paragraph = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
`;
const CardBottom = styled.p``;
const Bottom = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
  img {
    width: 15px;
    height: 15px;
  }
`;
const Para = styled.p`
  margin-left: 10px;
  margin-top: -4px;
`;

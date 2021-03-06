import React from "react";
import { styled } from "frontity";
import heroImg from "../../assets/images/hero-section.png";
const Banner = (props) => {
  const { title, subheading, para } = props;
  return (
    <Section>
      <Container>
        <Heading>{title}</Heading>
        <Subheading>{subheading}</Subheading>
        <ParaContent>
          <Paragraph>{para}</Paragraph>
        </ParaContent>
      </Container>
    </Section>
  );
};

export default Banner;
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
const Section = styled.div`
  background: url("${heroImg}");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0px;
`;
const Heading = styled.h2`
  max-width: 900px;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: #ffb124;
  margin-bottom: 20px;
`;

const Subheading = styled.h4`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 20px;
`;
const ParaContent = styled.div`
  width: 100%;
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 300;
  max-width: 726px;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

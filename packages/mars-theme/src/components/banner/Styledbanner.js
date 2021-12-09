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
`;
const Section = styled.div`
  background: url("${heroImg}");
  widht: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px 0px;
`;
const Heading = styled.h2`
  width:900px;
  font-weight: 500;
  font-size:49px;
  line-height:58px;
  color:#FFB124;
  font-family;rubic;
  margin-bottom:20px;
`;

const Subheading = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 20px;
`;
const ParaContent = styled.div`
  width: 60%;
`;
const Paragraph = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

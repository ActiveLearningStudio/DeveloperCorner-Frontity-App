import React from "react";
import { styled } from "frontity";
import heroImg from "../../assets/images/hero-section.png";
import { Container } from "react-bootstrap";
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
const Section = styled.div`
  background: url("${heroImg}");
  widht: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 50px;
`;
const Heading = styled.h2`
  color: rgb(255, 177, 36);
  font-weight: bold;
  font-family;rubic;
`;

const Subheading = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
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

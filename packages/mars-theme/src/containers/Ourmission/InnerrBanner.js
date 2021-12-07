import React from "react";
import { styled } from "frontity";
import heroImg from "../../assets/images/hero-section.png";
const Banner = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Heading>
            {" "}
            Be part of curriki <span> ground breaking</span> work
          </Heading>
          <Button>Donate</Button>
        </Content>
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
  padding:50px 0px;
`;
const Container = styled.div`
 max-width: 1440px;
 padding:0px 146px;
 margin:0;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Heading = styled.h2`
  cfont-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  span {
    color: rgb(255, 177, 36);
  }
`;
const Button = styled.button`
  background-color: transparent;
  width: 155px;
  height: 45px;
  color: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 25px;
`;

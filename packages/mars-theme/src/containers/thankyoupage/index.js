import React from "react";
import Banner from "../../components/banner/Styledbanner";
import { styled } from "frontity";
import thankyouimg from "../../assets/images/thankyouImg.png";
import background from "../../assets/images/background.png";
const Index = () => {
  return (
    <div>
      <Banner
        title="Thank you for your donation to Curriki!"
        para="Curriki is dedicated to making interactive
                     learning experiences accessible for everyone, by
                     providing free and open tools to design, 
                     customize and publish content."
      />
      <Section>
        <Container>
          <ThankyouDiv>
            <img src={thankyouimg} alt=" " />
            <Paragraph>
              Thanks to donations like yours, Curriki will be able to deliver on
              key technology initiatives and partnerships to ensure that
              educators and learners have access to quality and engaging
              educational materials. We are very thankful for your generous
              support and commitment to education innovation.
            </Paragraph>
            <Subheading>Abby Ross</Subheading>
            <Email>CEO Curriki, abby@curriki.org</Email>
          </ThankyouDiv>
        </Container>
      </Section>
    </div>
  );
};

export default Index;
const Section = styled.div`
  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 345px;
`;
const ThankyouDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;

  img {
    padding-bottom: 30px;
  }
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #084892;
  margin-bottom: 30px;
`;
const Subheading = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 30px;
  color: #084892;
`;
const Email = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  color: #084892;
`;

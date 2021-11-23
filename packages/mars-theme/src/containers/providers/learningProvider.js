import React from "react";
import { styled } from "frontity";
import { Container } from "react-bootstrap";
import artificial from "../../assets/images/image9.png";
import framework from "../../assets/images/image40.png";
import xconnect from "../../assets/images/image41.png";
import layer from "../../assets/images/Layer1.png";

const LearningProvider = () => {
  return (
    <Section>
      <Container>
        <Heading>
          CurrikiStudio powers the world most <br />
          innovative <span> learning providers</span>
        </Heading>
        <Card>
          <LeftCol>
            <img src={artificial} alt="" />
          </LeftCol>
          <RightCol>
            <Paragraph>
              <b>ArticialChart</b>
            </Paragraph>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              <b>Certified Services:</b>System integration, cloud hosting,Custom
              deveopment
            </p>
            <p>
              <b>Website</b> <a href="#"> www.curriki.org</a>
            </p>
          </RightCol>
        </Card>
        <Card>
          <LeftCol>
            <img src={framework} alt="" />
          </LeftCol>
          <RightCol>
            <Paragraph>
              <b>Framework</b>
            </Paragraph>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
            </p>
            <p>
              <b>Certified Services:</b>System integration, cloud hosting,Custom
              deveopment
            </p>
            <p>
              <b>Website</b> <a href="#"> www.curriki.org</a>
            </p>
          </RightCol>
        </Card>
        <Card>
          <LeftCol>
            <img src={xconnect} alt="" />
          </LeftCol>
          <RightCol>
            <Paragraph>
              <b>Connect Life solutions</b>
            </Paragraph>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              <b>Certified Services:</b>System integration, cloud hosting,Custom
              deveopment
            </p>
            <p>
              <b>Website</b> <a href="#"> www.curriki.org</a>
            </p>
          </RightCol>
        </Card>
        <Card>
          <LeftCol>
            <img src={layer} alt="" />
          </LeftCol>
          <RightCol>
            <Paragraph>
              <b>iDesign</b>
            </Paragraph>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              <b>Certified Services:</b>System integration, cloud hosting,Custom
              deveopment
            </p>
            <p>
              <b>Website</b> <a href="#"> www.curriki.org</a>
            </p>
          </RightCol>
        </Card>
      </Container>
    </Section>
  );
};

export default LearningProvider;

const Section = styled.div``;
const Heading = styled.h2`
  margin-top: 40px;
  color: #084892;
  margin-bottom: 60px;
  font-family: Rubic;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: #084892;
  span {
    color: rgb(255, 177, 36);
  }
  @media screen and (max-width: 768px) {
    margin-top: 350px;
  }
`;
const Card = styled.div`
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  padding: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftCol = styled.div``;
const Paragraph = styled.p`
  font-family: Rubic;
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  color: #515151;
  font-weight: bold;
`;
const RightCol = styled.div`
  margin-left: 20px;
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #515151;
  }
  a {
    color: #084892;
  }
`;

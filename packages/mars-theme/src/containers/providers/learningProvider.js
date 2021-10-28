import React from "react";
import { styled } from "frontity";
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
            <p>
              <b>ArticialChart</b>
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              <b>Certified Services</b>System integration, cloud hosting,Custom
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
            <p>
              <b>Framework</b>
            </p>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
            </p>
            <p>
              <b>Certified Services</b>System integration, cloud hosting,Custom
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
            <p>
              <b>Connect Life solutions</b>
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              <b>Certified Services</b>System integration, cloud hosting,Custom
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
            <p>
              <b>iDesign</b>
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              <b>Certified Services</b>System integration, cloud hosting,Custom
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
  text-align: center;
  margin-top: 40px;
  color: #084892;
  margin-bottom: 60px;
  span {
    color: rgb(255, 177, 36);
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
`;
const LeftCol = styled.div``;
const RightCol = styled.div`
  margin-left: 20px;
`;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0px 110px;
`;

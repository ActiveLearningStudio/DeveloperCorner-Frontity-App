import React from "react";
import { styled } from "frontity";
import artificial from "../../assets/images/image9.png";
import framework from "../../assets/images/image40.png";
import xconnect from "../../assets/images/image41.png";
import layer from "../../assets/images/Layer1.png";
import idesignpic from "../../assets/images/idesignpic.png";

const LearningProvider = () => {
  return (
    <Section>
      <Container>
        <Heading>
          CurrikiStudio powers the world's most <br />
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
            <p>ArticialChart</p>
            <p>
              ArticialChat is an AI Chatbot and Content Platform. We support
              Curriki's platform with management of dedicated AWS accounts for
              our clients to integrate Curriki not only into our platform, but
              deeper into the AWS ecosystem.
            </p>
            <p>
              <b>Certified Services: </b>Systems Integration, Cloud hosting, Custom
              Deveopment
            </p>
            <p>
              <b>Website:</b> <a href="#"> https://artificial.chat/</a>
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
              Framework Development Group (Framework) is an Education Cosulting
              company dedicated to providing K-12 professional services, staffing,
              workforce management, and direct hire support to the Learning services
              sector. As a Curriki Certified Partner, we help k12 organizations to
              positively impact the lives of children by empowering some of the 
              greatest influencers in their lives: their educators.
              Framework helps empower CurrikiStudio educators to continually improve
              their skills so our next generation of learners emgerges with the skills
              and confidence necessary to realize their dreams.
            </p>
            <p>
              <b>Certified Services: </b>Professional Development and Training,
              Program Learning & Design
            </p>
            <p>
              <b>Website:</b> <a href="#"> https://www.frameworkconsulting.com/</a>
            </p>
          </RightCol>
        </Card>
        <Card>
          <LeftCol>
            <img src={idesignpic} alt="" />
          </LeftCol>
          <RightCol>
            <Paragraph>
              <b>iDesign</b>
            </Paragraph>
            <p>
              iDesign helps colleges and universities harness the potential
              of emerging technologies to design courses and degrees that 
              make an impact, whether they're fully online, flipped, adaptive,
              blended or competency based.
            </p>
            <p>
              <b>Certified Services: </b>Program and Course Design, Learning Design,
              Systems Integration, Custom Development
            </p>
            <p>
              <b>Website:</b> <a href="#"> https://idesignedu.org/</a>
            </p>
          </RightCol>
        </Card>
        <Card>
          <LeftCol>
            <img src={xconnect} alt="" />
          </LeftCol>
          <RightCol>
            <Paragraph>
              <b>Connected Life Solutions</b>
            </Paragraph>
            <p>
              Connected Life Solutions offers consulting services and support
              technologies that when integrated together, enable businesses, 
              and in some cases, their end consumers, to operate or live a
              'connected life'. By working with Curriki, educational content 
              can be created and managed by local education partners, and then
              delivered to the remotest parts of the world using a satellite 
              as the main distribution median over a large geographic area.
            </p>
            <p>
              <b>Certified Services: </b>Systems Integration, Hosting, Custom
              Development
            </p>
            <p>
              <b>Website:</b> <a href="#"> https://www.connectedls.com/</a>
            </p>
          </RightCol>
        </Card>
      </Container>
    </Section>
  );
};

export default LearningProvider;

const Section = styled.div``;
const Container = styled.div`
max-width:1440px;
padding:0px 146px;
`;
const Heading = styled.h2`
  margin-top: 100px;
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
  margin-bottom: 18px !important;
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
    margin:0px;
  }
  a {
    color: #084892;
  }
`;

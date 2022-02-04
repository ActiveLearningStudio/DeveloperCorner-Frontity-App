import React from "react";
import { styled, connect } from "frontity";
import artificial from "../../assets/images/image9.png";
import framework from "../../assets/images/image40.png";
import xconnect from "../../assets/images/image41.png";
import layer from "../../assets/images/Layer1.png";
import idesignpic from "../../assets/images/idesignpic.png";

const LearningProvider = ({ learningposts, state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  return (
    <Section>
      <Container>
        <Heading>
          CurrikiStudio powers the world's most <br />
          innovative <span> learning providers</span>
        </Heading>
        {learningposts && learningposts.length > 0 ? (
          learningposts?.map((postitem) => {
            const featuremedia =
              state.source.attachment[postitem?.featured_media];
            return (
              <Card>
                <LeftCol>
                  <img src={featuremedia.source_url} alt="" />
                </LeftCol>
                <RightCol>
                  <Paragraph
                    dangerouslySetInnerHTML={{
                      __html: postitem.title.rendered,
                    }}
                    className="sub-head"
                  />
                  <Html2React html={postitem.content.rendered} />
                </RightCol>
              </Card>
            );
          })
        ) : (
          <>
            <Card>
              <LeftCol>
                <img src={artificial} alt="" />
              </LeftCol>
              <RightCol>
                <Paragraph>
                  <b className="sub-head">ArticialChart</b>
                </Paragraph>
                <p>ArticialChart</p>
                <p>
                  ArticialChat is an AI Chatbot and Content Platform. We support
                  Curriki's platform with management of dedicated AWS accounts
                  for our clients to integrate Curriki not only into our
                  platform, but deeper into the AWS ecosystem.
                </p>
                <p>
                  <b>Certified Services: </b>Systems Integration, Cloud hosting,
                  Custom Development
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
                  <b className="sub-head">Framework</b>
                </Paragraph>
                <p>
                  Framework Development Group (Framework) is an Education
                  Consulting company dedicated to providing K-12 professional
                  services, staffing, workforce management, and direct hire
                  support to the Learning services sector. As a Curriki
                  Certified Partner, we help k12 organizations to positively
                  impact the lives of children by empowering some of the
                  greatest influencers in their lives: their educators.
                  Framework helps empower CurrikiStudio educators to continually
                  improve their skills so our next generation of learners
                  emerges with the skills and confidence necessary to realize
                  their dreams.
                </p>
                <p>
                  <b>Certified Services: </b>Professional Development and
                  Training, Program Learning & Design
                </p>
                <p>
                  <b>Website:</b>{" "}
                  <a href="#"> https://www.frameworkconsulting.com/</a>
                </p>
              </RightCol>
            </Card>
            <Card>
              <LeftCol>
                <img src={idesignpic} alt="" />
              </LeftCol>
              <RightCol>
                <Paragraph className="sub-head">
                  <b className="sub-head">iDesign</b>
                </Paragraph>
                <p>
                  iDesign helps colleges and universities harness the potential
                  of emerging technologies to design courses and degrees that
                  make an impact, whether they're fully online, flipped,
                  adaptive, blended or competency based.
                </p>
                <p>
                  <b>Certified Services: </b>Program and Course Design, Learning
                  Design, Systems Integration, Custom Development
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
                <Paragraph className="sub-head">
                  <b>Connected Life Solutions</b>
                </Paragraph>
                <p>
                  Connected Life Solutions offers consulting services and
                  support technologies that when integrated together, enable
                  businesses, and in some cases, their end consumers, to operate
                  or live a 'connected life'. By working with Curriki,
                  educational content can be created and managed by local
                  education partners, and then delivered to the remotest parts
                  of the world using a satellite as the main distribution median
                  over a large geographic area.
                </p>
                <p>
                  <b>Certified Services: </b>Systems Integration, Hosting,
                  Custom Development
                </p>
                <p>
                  <b>Website:</b> <a href="#"> https://www.connectedls.com/</a>
                </p>
              </RightCol>
            </Card>
          </>
        )}
      </Container>
    </Section>
  );
};

export default connect(LearningProvider);

const Section = styled.div``;
const Container = styled.div`
  max-width: 1440px;className="sub-head"
  padding: 0px 146px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 40px;
  }
`;
const Heading = styled.h2`
  color: #084892;
  margin: 70px 0px;
  font-family: "Rubik";
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
  @media screen and (max-width: 480px) {
    margin-bottom: 0px;
    font-size: 26px;
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
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;
const LeftCol = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const Paragraph = styled.p`
  font-family: "Rubik";
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  color: #515151;
  margin-bottom: 18px !important;
  font-weight: 700;
  .sub-head {
    font-size: 18px;
  }
`;
const RightCol = styled.div`
  margin-left: 20px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: #515151;
    margin: 0px;
  }
  .sub-head {
    font-size: 16px;
    font-weight: 700;
  }
  a {
    color: #084892;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

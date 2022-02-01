import React from "react";
import { styled, css, connect } from "frontity";
import backgroundPic from "../../assets/images/Group153.png";
import plusicon from "../../assets/images/PLUS.svg";
import CardImg from "../../assets/images/Rectangle10.png";
import vector1 from "../../assets/images/vector1.png";
import vector2 from "../../assets/images/vector2.png";
import vector5 from "../../assets/images/vector5.png";
import vector6 from "../../assets/images/vector6.png";
import vector7 from "../../assets/images/vector7.png";
import vector8 from "../../assets/images/vector8.png";
import vector9 from "../../assets/images/vector9.png";
import laptopimg from "../../assets/images/laptopimg.png";
import laptopdesignimg from "../../assets/images/laptopdesignimg.png";
import copyrightimg from "../../assets/images/copyrightimg.png";
import girlmobileimg from "../../assets/images/girlmobileimg.png";
import mobileimg from "../../assets/images/mobileimg.png";
import wifivector from "../../assets/images/wifivector.png";
import pcimage from "../../assets/images/Rectangle109.png";
import AnnouncmentImg from "../../assets/images/Group563.png";
import RectImg from "../../assets/images/Rectangle110.png";
import Cardbackground from "../../assets/images/Rectangle09.png";

const Roadmap = ({ roadMapposts, state, libraries }) => {
  const Html2React = libraries.html2react.Component;
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
          {roadMapposts && roadMapposts.length > 0 ? (
            roadMapposts?.map((postitem) => {
              const featuremedia =
                state.source.attachment[postitem?.featured_media];
              return (
                <Card>
                  {featuremedia && (
                    <CardHead
                      css={css`
                        background: linear-gradient(
                            0deg,
                            rgba(40, 90, 165, 0.75),
                            rgba(40, 90, 165, 0.75)
                          ),
                          url("${featuremedia.source_url}");
                      `}
                    >
                      {/* <img src={featuremedia.source_url} alt="" /> */}
                    </CardHead>
                  )}
                  <CardHeading
                    dangerouslySetInnerHTML={{
                      __html: postitem.title.rendered,
                    }}
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: postitem.excerpt.rendered,
                    }}
                  />
                  <CardBottom>
                    <Html2React html={postitem.content.rendered} />
                  </CardBottom>
                </Card>
              );
            })
          ) : (
            <>
              <Card>
                <CardHead
                  css={css`
                    background: linear-gradient(
                        0deg,
                        rgba(40, 90, 165, 0.75),
                        rgba(40, 90, 165, 0.75)
                      ),
                      url("${RectImg}");
                  `}
                >
                  <div>
                    <img src={AnnouncmentImg} alt="" />
                  </div>
                </CardHead>
                <CardHeading>
                  INSTRUCTIONAL DESIGN SERVICES MARKETPLACE
                </CardHeading>
                <Paragraph>
                  Imagine a community of world-class educators and instructional
                  designers who are experts in creating interactive digital
                  learning experiences. Our marketplace will instantly connect
                  the “idea” people with the builders.
                </Paragraph>
                <CardBottom>
                  <AskHeading>Asks:</AskHeading>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>
                      $100,000 to jumpstart marketplace ideas to compensate
                      designers.
                    </Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>$20,000 in recruiting/incentives.</Para>
                  </Bottom>
                </CardBottom>
              </Card>
              <Card>
                <CardHead
                  css={css`
                    background: linear-gradient(
                        0deg,
                        rgba(40, 90, 165, 0.75),
                        rgba(40, 90, 165, 0.75)
                      ),
                      url("${CardImg}");
                  `}
                >
                  <div>
                    <img src={vector2} alt="" />
                  </div>
                </CardHead>
                <CardHeading>VIRTUAL REALITY/AUGMENTED REALITY</CardHeading>
                <Paragraph>
                  In our increasingly digital world, content creators crave
                  opportunities to create experiential learning opportunities
                  using today’s most innovative tech.
                </Paragraph>
                <CardBottom>
                  <AskHeading>Asks:</AskHeading>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind open source technology licensing.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind AR/VR development.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>$200,000 in development funds.</Para>
                  </Bottom>
                </CardBottom>
              </Card>
              <Card>
                <CardHead
                  css={css`
                    background: linear-gradient(
                        0deg,
                        rgba(40, 90, 165, 0.75),
                        rgba(40, 90, 165, 0.75)
                      ),
                      url("${Cardbackground}");
                  `}
                >
                  <div>
                    <img src={wifivector} alt="" />
                  </div>
                </CardHead>
                <CardHeading>offline work</CardHeading>
                <Paragraph>
                  Students all over the world deserve access to interactive
                  learning. Support the effort for accessing CurrikiStudio
                  projects offline.
                </Paragraph>
                <CardBottom>
                  <AskHeading>Asks:</AskHeading>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>
                      In-kind development efforts on OneRoster LTI Spec.
                    </Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>$50,000 in developmen</Para>
                  </Bottom>
                </CardBottom>
              </Card>
              <Card>
                <CardHead
                  css={css`
                    background: linear-gradient(
                        0deg,
                        rgba(40, 90, 165, 0.75),
                        rgba(40, 90, 165, 0.75)
                      ),
                      url("${laptopimg}");
                  `}
                >
                  <div>
                    <img src={vector5} alt="" />
                  </div>
                </CardHead>
                <CardHeading>VIDEO CONFERENCING</CardHeading>
                <Paragraph>
                  Increase student participation and learning retention with
                  virtual and hybrid classrooms with video conferencing as a
                  learning activity type in CurrikiStudio.
                </Paragraph>
                <CardBottom>
                  <AskHeading>Asks:</AskHeading>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind development efforts.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>
                      In-kind donation of video conferencing API-based software.
                    </Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>$20,000 in development funds.</Para>
                  </Bottom>
                </CardBottom>
              </Card>
              <Card>
                <CardHead
                  css={css`
                    background: linear-gradient(
                        0deg,
                        rgba(40, 90, 165, 0.75),
                        rgba(40, 90, 165, 0.75)
                      ),
                      url("${mobileimg}");
                  `}
                >
                  <div>
                    <img src={vector6} alt="" />
                  </div>
                </CardHead>
                <CardHeading>STUDENT PORTFOLIO</CardHeading>
                <Paragraph>
                  Imagine a digital showcase of all your best interactive
                  schoolwork, owned by you, the learner. This can be the future
                  of demonstrating college & career readiness.
                </Paragraph>
                <CardBottom>
                  <AskHeading>Asks:</AskHeading>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>
                      In-kind development efforts on OneRoster LTI Spec
                    </Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind UI/UX design efforts.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind data science support.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>Open source portfolio software.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>$200,000 in development funds.</Para>
                  </Bottom>
                </CardBottom>
              </Card>
              <Card>
                <CardHead
                  css={css`
                    background: linear-gradient(
                        0deg,
                        rgba(40, 90, 165, 0.75),
                        rgba(40, 90, 165, 0.75)
                      ),
                      url("${girlmobileimg}");
                  `}
                >
                  <div>
                    <img src={vector7} alt="" />
                  </div>
                </CardHead>
                <CardHeading>BADGES & LEADERBOARDS</CardHeading>
                <Paragraph>
                  Gamification can make learning more engaging. Adding this to
                  Studio means creators can empower and motivate learners for
                  digital learning.
                </Paragraph>
                <CardBottom>
                  <AskHeading>Asks:</AskHeading>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind development efforts.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>
                      In-kind UIUX design support – focus on gameification.{" "}
                    </Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind learning science research guidance.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>$100,000 in development funds. </Para>
                  </Bottom>
                </CardBottom>
              </Card>
              <Card>
                <CardHead
                  css={css`
                    background: linear-gradient(
                        0deg,
                        rgba(40, 90, 165, 0.75),
                        rgba(40, 90, 165, 0.75)
                      ),
                      url("${copyrightimg}");
                  `}
                >
                  <div>
                    <img src={vector8} alt="" />
                  </div>
                </CardHead>
                <CardHeading>LEARNING SCIENCE PROJECT TEMPLATES</CardHeading>
                <Paragraph>
                  CurrikiStudio authors are excited by tools but need help
                  getting started. With top learning scientist, we will build
                  best-in-class lesson templates.
                </Paragraph>
                <CardBottom>
                  <AskHeading>Asks:</AskHeading>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind development efforts.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind learning science research guidance.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>$50,000 in development funds.</Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>
                      $150,000 for Instructional Designer contractor funds.
                    </Para>
                  </Bottom>
                </CardBottom>
              </Card>
              <Card>
                <CardHead
                  css={css`
                    background: linear-gradient(
                        0deg,
                        rgba(40, 90, 165, 0.75),
                        rgba(40, 90, 165, 0.75)
                      ),
                      url("${laptopdesignimg}");
                  `}
                >
                  <div>
                    <img src={vector9} alt="" />
                  </div>
                </CardHead>
                <CardHeading>SCIENCE LAB SIMULATIONS</CardHeading>
                <Paragraph>
                  The tactile experience of being in a lab is critical to
                  learning in science. Flipped, interactive lab-like experiences
                  will transform 21st century science.
                </Paragraph>
                <CardBottom>
                  <AskHeading>Asks:</AskHeading>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>
                      $20,000 annual sponsorship of PHET integration.{" "}
                    </Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>
                      $50,000 sponsorship for licensing of quality science
                      content.
                    </Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>In-kind learning science research. </Para>
                  </Bottom>
                  <Bottom>
                    <img src={plusicon} alt="" />

                    <Para>$250,000 in development funds.</Para>
                  </Bottom>
                </CardBottom>
              </Card>
            </>
          )}
          {/*  */}
        </CardContent>
      </Container>
    </Section>
  );
};

export default connect(Roadmap);
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
  background-image: url("${backgroundPic}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin-top: -52px;
`;

const HeadingContent = styled.div`
  padding-top: 200px;
  @media screen and (max-width: 576px) {
    padding: 120px 20px 0 20px;
  }
`;
const TopHeading = styled.div`
  display: flex;
  align-items: center;
`;
const Heading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  margin-right: 20px;
`;

const Subheading = styled.h3`
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
  @media screen and (max-width: 768px) {
    padding: 0px !important;
  }
`;
const Card = styled.div`
  width: 340px;
  border-radius: 5px;
  background: #fff;
  margin-right: 25px;
  margin-bottom: 25px;
  p {
    font-style: normal;
    font-weight: normal;
    font-family: "Open-Sans";
    font-size: 18px;
    line-height: 25px;
    color: #515151;
  }
  @media screen and (max-width: 992px) {
    width: 278px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const CardHead = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover !important;
  img {
    width: 100%;
  }
  div {
    text-align: center;
    padding-top: 120px;
    img {
      width: 110px;
    }
  }
  @media screen and (max-width: 992px) {
    width: 278px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const CardHeading = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #084892;
  margin-top: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const AskHeading = styled.h5`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #084892;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
`;
const CardBottom = styled.div``;
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

import React from "react";
import Banner from "../../components/banner/Styledbanner";
import { styled } from "frontity";
import facebookicon from "../../assets/images/social-icons/facebook.png";
import twittericon from "../../assets/images/social-icons/twitter.png";
import linkedicon from "../../assets/images/social-icons/linked-in.png";
import moreicon from "../../assets/images/social-icons/more-icon.png";
import plusicon from "../../assets/images/PLUS.svg";
import pressBackground from "../../assets/images/pressBackground.png";
import heroImg from "../../assets/images/heroImg.png";
import arrowicon from "../../assets/images/yellow-arrow.png";
const PressDetail = () => {
  return (
    <div>
      <Banner title="Press" />
      <Container>
        <BlogContent>
          <div className="updates-content">
            <Heading>
              <h4>
                {" "}
                Curriki Launches Interactive Civics
                <span> Videos for Remote Learning</span>{" "}
              </h4>
            </Heading>
            <Paragraph>
              <span>By Caroline Benoist</span>
              <span>Feb 8, 2021</span>
              <span>News &gt; </span>
              <span>0 Comments</span>
            </Paragraph>
            <SocialLinks>
              <div>
                {" "}
                <img src={facebookicon} alt="" />
              </div>
              <div>
                {" "}
                <img src={twittericon} alt="" />
              </div>
              <div>
                {" "}
                <img src={linkedicon} alt="" />
              </div>
              <div>
                {" "}
                <img src={moreicon} alt="" />
              </div>
            </SocialLinks>
          </div>
          <div className="curriki-updates-image">
            <img src={heroImg} alt="" />
          </div>
        </BlogContent>
      </Container>
      <BlogSection>
        <Container>
          <DescriptionContent>
            <Description>
              <DescHeading>
                CurrikiStudio Platform Used to Transform Civics Videos into
                Student-Centered Online Learning Experiences
              </DescHeading>
              <DescPara>
                {" "}
                See Civicate Videos here:{" "}
                <a className="none-deco-link" href="#">
                  {" "}
                  https://www.curriki.org/showcase/
                </a>
              </DescPara>
              <DescPara>
                CUPERTINO, Calif., February 9, 2021—Curriki, the nonprofit that
                makes interactive learning experiences available to everyone,
                today announced the launch of the
                <a href="#" className="none-deco-link">
                  {" "}
                  Civicate Interactive Video Collection
                </a>
                . Civicate, an organization focused on energizing civics
                education, sought to transform its innovative middle school
                civics videos into interactive learning experiences. Curriki’s
                free online content authoring tool, CurrikiStudio, was used to
                add several different types of learning interactions to ten
                Civicate videos, with more to come.
              </DescPara>
              <DescPara>
                Civics enthusiasts and educators are encouraged to join{" "}
                <a className="none-deco-link" href="#">
                  CurrikiStudio
                </a>{" "}
                to access the Civicate Interactive Video collection and with the
                platform’s one-click publishing tool, add it to their Learning
                Management Systems, where they can assign it to their students.
                The videos are also available on{" "}
                <a className="none-deco-link" href="#">
                  Civicate
                </a>
                .
              </DescPara>
              <DescPara>
                “I designed Civicate because my work with middle school students
                highlighted the need for civic education in schools. The
                bite-sized video lessons, now with engaging interactions, will
                help students understand our government so they can better
                engage as citizens,” commented Katie Sandhu, creator of
                Civicate. “The talent and creativity of the Curriki team has
                been truly inspirational, and I look forward to continuing our
                partnership.”
              </DescPara>
              <DescPara>
                Instructional Designer, Kathleen Torgrimson, created the
                interactions with CurrikiStudio. “It is really easy for kids to
                zone out when they’re watching a learning video, even those that
                are fun and animated like the Civicate videos,” commented
                Kathleen. “Now, with interactions that check for understanding,
                students will be more engaged with the material. They can move
                along at the pace that is right for them, track their own
                progress, retry questions they’ve answered incorrectly, and
                receive immediate feedback.”
              </DescPara>
              <DescPara>
                Curriki Board Member Phil Lebherz, who introduced Civicate to
                Curriki, commented, “My wife and I discovered Civicate while
                looking for a civics class for our grandchildren and we were so
                impressed with the Civicate videos that we reached out to speak
                with someone at the company. Imagine our surprise and delight to
                discover that the creator of Civicate was a high school student
                who is so passionate about understanding how our country
                functions and the importance of teaching young Americans about
                civics.”
              </DescPara>
              <DescPara>
                “Curriki is proud to help Civicate make its civics videos highly
                interactive. Katie has built a fantastic course and with the
                addition of CurrikiStudio’s technology, I’m hopeful we can
                extend the mission of engaging more students in civics
                education,” said Abby Ross, Curriki CEO. “Never before has
                civics education come alive in this way.”
              </DescPara>

              <SubHeading>Webinar</SubHeading>
              <DescPara>
                To learn more about Civicate’s Interactive Video Collection and
                the CurrikiStudio Showcase Partner Program, please join our
                webinar on 2/17 at 4 pm ET: <br />
                <a className="none-deco-link" href="#">
                  https://www.curriki.org/currikione-events/
                </a>{" "}
              </DescPara>
              <DescHeading>CurrikiStudio Showcase Partner Program</DescHeading>
              <DescPara>
                Civicate is the first CurrikiStudio Showcase Partner. Education
                content development organizations are invited to leverage
                CurrikiStudio to scale and deliver their organization’s
                curriculum experiences. The free content authoring tool provides
                over 50 mobile-first activities including interactive
                multimedia, images, games, virtual tours, and simulations, and
                one-click publishing to Learning Management Systems. To learn
                more about becoming a CurrikiStudio Showcase Partner, please{" "}
                <a className="none-deco-link" href="#">
                  submit an inquiry
                </a>
                .
              </DescPara>
              <DescHeading>Additional Resources:</DescHeading>
              <div className="updates-list-para">
                <div className="list-item">
                  <img src={plusicon} alt="" />
                  <DescPara>
                    CurrikiStudio Product Page{" "}
                    <a className="none-deco-link" href="#">
                      https://www.curriki.org/currikistudio-overview/
                    </a>
                  </DescPara>
                </div>
                <div className="list-item">
                  <img src={plusicon} alt="" />
                  <DescPara>
                    CurrikiStudio Sign up Page:{" "}
                    <a className="none-deco-link" href="#">
                      https://www.currikistudio.org/
                    </a>
                  </DescPara>
                </div>
              </div>
              <DescHeading>About Curriki</DescHeading>
              <DescPara>
                Build what you want the future of learning to be.
              </DescPara>
              <DescPara>
                Curriki is an independent 501(c)(3) organization, provider of
                free and open tools to design, customize, and deliver
                interactive learning content all in one place. Be part of
                changing the lives of learners all over the world by enabling
                great minds to reach and teach today’s learners.{" "}
                <a className="none-deco-link" href="#">
                  https://www.curriki.org/
                </a>
              </DescPara>
            </Description>
            <RecentPost>
              <div className="recent-post-content">
                <h2>Recent Posts</h2>
                <div className="recent-post-detail">
                  <p>
                    “How to Become an Entrepreneur” is Now Available Online as
                    the First Higher Education Course Designed with
                    CurrikiStudio
                  </p>
                  <div className="article-link">
                    <a>Read article</a>
                    <img src={arrowicon} alt="" />
                  </div>
                </div>
                <div className="recent-post-detail">
                  <p>
                    Curriki Answers the Call from School Districts,
                    Universities, and Nonprofits―Launches CurrikiStudio AWS
                    CloudFormation Template
                  </p>
                  <div className="article-link">
                    <a>Read article</a>
                    <img src={arrowicon} alt="" />
                  </div>
                </div>
                <div className="recent-post-detail">
                  <p>
                    Curriki® Delivers Game-Changing Functionality and Access to
                    its Free Interactive Authoring Tool, CurrikiStudio, with
                    Support from Linode
                  </p>
                  <div className="article-link">
                    <a>Read article</a>
                    <img src={arrowicon} alt="" />
                  </div>
                </div>
                <div className="recent-post-detail">
                  <p>
                    Curriki® Unveils Multi - platform Publishing for
                    CurrikiStudio
                  </p>
                  <div className="article-link">
                    <a>Read article</a>
                    <img src={arrowicon} alt="" />
                  </div>
                </div>
                <div className="recent-post-detail">
                  <p>
                    Curriki Launches CurrikiStudio to Fast-track Digital Content
                    Authoring and Delivery for Distance Learning
                  </p>
                  <div className="article-link">
                    <a>Read article</a>
                    <img src={arrowicon} alt="" />
                  </div>
                </div>
              </div>
              <div className="archives-heading">
                <h4>archives</h4>
                <div className="inner-link-div">
                  <a href="#">April 2021</a>
                  <a href="#">February 2021</a>
                  <a href="#">December 2020</a>
                  <a href="#">November 2020</a>
                  <a href="#">September 2020</a>
                  <a href="#">August 2020</a>
                  <a href="#">July 2020</a>
                  <a href="#">June 2020</a>
                  <a href="#">March 2020</a>
                  <a href="#">November 2019</a>
                  <a href="#">September 2019</a>
                  <a href="#">April 2019</a>
                </div>
              </div>
            </RecentPost>
          </DescriptionContent>
        </Container>
      </BlogSection>
    </div>
  );
};

export default PressDetail;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
`;
const BlogSection = styled.div`
  width: 100%;
  background: url(${pressBackground});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -190px;
`;
const BlogContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 100px;
  .curriki-updates-image {
    width: 50%;
    height: 368px;
  }
`;
const Heading = styled.h4`
  h4 {
    max-width: 450px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-transform: capitalize;
    color: #084892;
    margin-bottom: 30px;
    span {
      color: #ffb124;
    }
  }
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  span {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    color: #084892;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  width: 121px;
  justify-content: space-between;
  div {
    margin-right: 8px;
  }
`;
const DescriptionContent = styled.div`
  display: flex;
  padding-top: 200px;
`;
const Description = styled.div`
  width: 787px;
  margin-bottom: 106px;
  .article-desc-image {
    margin-bottom: 20px;
  }
  .updates-list-para {
    .list-item {
      display: flex;
      align-items: baseline;
      img {
        width: 10px;
        height: 10px;
        margin-right: 8px;
      }
    }
  }
`;
const DescHeading = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #084892;
`;

const DescPara = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #515151;

  a {
    color: #2e8dff !important;
  }
  .none-deco-link {
    text-decoration: none;
  }
`;
const SubHeading = styled.h3`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #084892;
`;
const RecentPost = styled.div`
  border-left: 1px solid #084892;
  margin-left: 30px;
  .recent-post-content {
    width: 300px;
    margin-left: 30px;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      text-transform: uppercase;
      color: #084892;
    }
    .article-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .recent-post-detail {
      border-bottom: 1px solid #084892;
      padding-bottom: 20px;
      margin-top: 20px;
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: #084892;
      }
      .article-link {
        a {
          font-style: normal;
          font-weight: 500;
          font-size: 14.7987px;
          line-height: 18px;
          text-decoration-line: underline;

          color: #084892;
        }
      }
    }
  }
  .archives-heading {
    display-flex;
    flex-direction:column;
    margin:30px 0px 0px 30px;
    h4 {
      text-transform:uppercase;
      font-size:25px;
      font-weight:bold;
      color:#084892;
      margin-bottom:25px;
    }
    .inner-link-div {
      display:flex;
      flex-direction:column;
      a {
        margin-bottom:8px;
        text-decoration:none;
      }
    }
  }
  
`;

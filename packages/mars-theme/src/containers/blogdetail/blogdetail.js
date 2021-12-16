import React from "react";
import { styled } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import facebookicon from "../../assets/images/social-icons/facebook.png";
import twittericon from "../../assets/images/social-icons/twitter.png";
import linkedicon from "../../assets/images/social-icons/linked-in.png";
import moreicon from "../../assets/images/social-icons/more-icon.png";
import plusicon from "../../assets/images/PLUS.svg";
import currikiupdates from "../../assets/images/updates.png";
import arrowicon from "../../assets/images/yellow-arrow.png";
import articleimg1 from "../../assets/images/PressReleases/articleimg1.png";
import articleimg2 from "../../assets/images/PressReleases/articleimg2.png";
import articleimg3 from "../../assets/images/PressReleases/articleimg3.png";
import articleimg4 from "../../assets/images/PressReleases/articleimg4.png";
import articleimg5 from "../../assets/images/PressReleases/articleimg5.png";
import articleimg6 from "../../assets/images/PressReleases/articleimg6.png";
import articleimg7 from "../../assets/images/PressReleases/articleimg7.png";
const Blogdetail = () => {
  return (
    <>
      <Banner title="Blog" />
      <Container>
        <BlogContent>
          <div className="updates-content">
            <Heading>
              <h4>
                {" "}
                What's New with CurrikiStudio? Updates As of November 2020
              </h4>
            </Heading>
            <Paragraph>
              <span>By Lani deGuia</span>
              <span>Nov 17, 2020</span>
              <span>Blog</span>
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
            <img src={currikiupdates} alt="" />
          </div>
        </BlogContent>
        <DescriptionContent>
          <Description>
            <DescPara>
              <a>CurrikiStudio</a> is constantly innovating to make the best
              digital learning design platform for educators and learning
              content designers. Exciting things are happening here! Read on to
              get new updates to CurrikiStudio and see what’s coming!
            </DescPara>
            <DescHeading>Enhancements to CurrikiStudio</DescHeading>
            <SubHeading>Publish and Combine with Assets in Your LMS</SubHeading>
            <DescPara>
              One of our most popular requests from schools and districts is now
              a reality. You can now publish your projects and playlists to your
              LMS (Canvas LMS, Google Classroom, and Moodle) AND combine it with
              other elements of your existing curriculum within the LMS.
            </DescPara>
            <div className="article-desc-image">
              <img src={articleimg1} alt="" />
            </div>
            <SubHeading>Duplicate Projects and Playlists</SubHeading>
            <DescPara>
              In CurrikiStudio you can now create identical copies of your
              projects, playlists, and activities to customize and repurpose.
              This will save time in creating alternative versions of something
              you want to reuse again and again.
            </DescPara>
            <div className="article-desc-image">
              <img src={articleimg2} alt="" />
            </div>
            <div className="article-desc-image">
              <img src={articleimg3} alt="" />
            </div>
            <SubHeading>Sample Projects for Inspection</SubHeading>
            <DescPara>
              For inspiration, sample projects are now available! You can also
              “favorite” projects for easy access!
            </DescPara>
            <div className="article-desc-image">
              <img src={articleimg4} alt="" />
            </div>
            <DescPara>
              You can submit your projects and playlists to the Project Showcase
              for review and contribution to the CurrikiStudio Showcase.
            </DescPara>
            <div className="article-desc-image">
              <img src={articleimg5} alt="" />
            </div>
            <DescPara>
              Plus, you can easily see the status of what you have shared
              (projects/playlists/activities).
            </DescPara>
            <div className="article-desc-image">
              <img src={articleimg6} alt="" />
            </div>
            <SubHeading>Administration Portal (for institutions)</SubHeading>
            <DescPara>
              We have created a management portal for administrators of
              institutions to manage users, assets, and pull usage reports.
            </DescPara>
            <div className="article-desc-image">
              <img src={articleimg7} alt="" />
            </div>
            <SubHeading>CurrikiOne Community</SubHeading>
            <DescPara>
              We are excited that we have over 3,000 CurrikiStudio users and
              have built a page just for this community. The{" "}
              <a className="none-deco-link" href="#">
                CurrikiOne
              </a>{" "}
              portal provides key{" "}
              <a href="#" className="none-deco-link">
                Curriki
              </a>{" "}
              resources, forums, and examples of success of our growing
              community of content authors.
            </DescPara>
            <DescHeading>Managed Service Providers</DescHeading>
            <DescPara>
              We are actively working on allowing CurrikiStudio institutions to
              upgrade from demo access to full access by signing up for storage
              and bandwidth on their provider of choice. Our partnership with
              Amazon Web Services is nearly complete. Our next focus after
              completing our launch with AWS we will be ready for review with
              Linode. A partnership with Microsoft Azure is being planned in the
              future.
            </DescPara>
            <DescHeading>
              Other updates planned for the rest of 2020
            </DescHeading>
            <DescPara>
              In the coming months, watch for some really exciting additions to
              CurrikiStudio!
            </DescPara>
            <div className="updates-list-para">
              <div className="list-item">
                <img src={plusicon} alt="" />
                <DescPara>Google Classroom Grade Passback</DescPara>
              </div>
              <div className="list-item">
                <img src={plusicon} alt="" />
                <DescPara> Publishing to the CurrikiLibrary</DescPara>
              </div>
              <div className="list-item">
                <img src={plusicon} alt="" />
                <DescPara>
                  {" "}
                  Enabling self-contained libraries for institutions
                </DescPara>
              </div>
              <div className="list-item">
                <img src={plusicon} alt="" />
                <DescPara> Project Templates</DescPara>
              </div>
              <div className="list-item">
                <img src={plusicon} alt="" />
                <DescPara> Collaboration and conferencing </DescPara>
              </div>
            </div>
            <DescPara>
              Like the new updates to CurrikiStudio and interested in joining
              this next innovation in digital learning?{" "}
              <a href="#" className="none-deco-link">
                CurrikiStudio
              </a>{" "}
              is a FREE digital learning design platform! Sign up for your
              account and start building today!
            </DescPara>
            <button className="link-btn">Get CurrikiStudio for FREE</button>
          </Description>
          <RecentPost>
            <div className="recent-post-content">
              <h2>Recent Posts</h2>
              <div className="recent-post-detail">
                <p>
                  “How to Become an Entrepreneur” is Now Available Online as the
                  First Higher Education Course Designed with CurrikiStudio
                </p>
                <div className="article-link">
                  <a>Read article</a>
                  <img src={arrowicon} alt="" />
                </div>
              </div>
              <div className="recent-post-detail">
                <p>
                  Curriki Answers the Call from School Districts, Universities,
                  and Nonprofits―Launches CurrikiStudio AWS CloudFormation
                  Template
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
                  Curriki® Unveils Multi - platform Publishing for CurrikiStudio
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
    </>
  );
};

export default Blogdetail;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
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
  }
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  span {
    font-family: "Rubik";
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
  button.link-btn {
    width: 301px;
    height: 45px;
    border: none;
    font-weight: 700;
    margin-top: 35px;
    background: #084892;
    color: #ffffff;
    box-shadow: 0px 10px 20px -5px rgba(8, 72, 146, 0.35);
    border-radius: 25px;
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
        max-width: 255px;
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
          text-decoration: underline;
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

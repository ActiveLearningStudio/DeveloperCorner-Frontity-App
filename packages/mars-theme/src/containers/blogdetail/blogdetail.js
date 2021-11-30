import React from "react";
import { styled } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import facebookicon from "../../assets/images/social-icons/facebook.png";
import twittericon from "../../assets/images/social-icons/twitter.png";
import linkedicon from "../../assets/images/social-icons/linked-in.png";
import moreicon from "../../assets/images/social-icons/more-icon.png";
import currikiupdates from "../../assets/images/updates.png";
import arrowicon from "../../assets/images/yellow-arrow.png";
const Blogdetail = () => {
  return (
    <>
      <Banner title="Blog" />
      <Container>
        <BlogContent>
          <div className="updates-content">
            <Heading>
              What's New with CurrikiStudio? Updates As of November 2020
            </Heading>
            <Paragraph>
              <span>By Lani deguide</span>
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
            <SubHeading>Publish and combine with Assets in Your LMS</SubHeading>
            <DescPara>
              One of our most popular requests from schools and districts is now
              a reality. You can now publish your projects and playlists to your
              LMS (Canvas LMS, Google Classroom, and Moodle) AND combine it with
              other elements of your existing curriculum within the LMS.
            </DescPara>
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
const Heading = styled.div`
  max-width: 450px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #084892;
  margin-bottom: 30px;
`;
const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  span {
    font-family: Rubik;
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
`;
const DescHeading = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #084892;
`;

const DescPara = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #515151;
  margin-bottom: 50px;
  a {
    color: #2e8dff !important;
  }
`;
const SubHeading = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;

  color: #084892;
`;
const RecentPost = styled.div`
  border-left: 1px solid #084892;
  margin-left: 30px;
  .recent-post-content {
    width: 300px;
    margin-left: 30px;
    h2 {
      font-family: Rubik;
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
      p {
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;

        color: #084892;
      }
      .article-link {
        a {
          font-family: Rubik;
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
`;

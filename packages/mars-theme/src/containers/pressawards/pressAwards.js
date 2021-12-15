import React from "react";
import Banner from "../../components/banner/Styledbanner";
import { styled } from "frontity";
import arrow from "../../assets/images/yellow-arrow.png";
import currikiupdate from "../../assets/images/currikiupdates.png";
import pressCard1 from "../../assets/images/pressCard1.png";
import pressCard2 from "../../assets/images/pressCard2.png";
import pressCard3 from "../../assets/images/pressCard3.png";
import pressCard5 from "../../assets/images/pressCard5.png";
import pressCard6 from "../../assets/images/pressCard6.png";
import pressCard8 from "../../assets/images/pressCard8.png";
import pressCard9 from "../../assets/images/pressCard9.png";
import pressCard10 from "../../assets/images/pressCard10.png";
import Pagination from "react-bootstrap/Pagination";
const PressAwards = () => {
  return (
    <div>
      <Banner title="Press & Awards" />
      <Container>
        <Heading>Press Releases</Heading>
        <Content>
          <Article>
            <div className="blog-image">
              <img src={pressCard1} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                “How to Become an Entrepreneur” is Now Available Online as the
                First Higher Education Course Designed with CurrikiStudio
              </BlogHeading>
              <BlogAuthor> By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard2} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki Launches Interactive Civics Videos for Remote Learning
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard3} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki Answers the Call from School Districts, Universities,
                and Nonprofits―Launches CurrikiStudio AWS CloudFormation
                Template
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={currikiupdate} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki® Delivers Game-Changing Functionality and Access to its
                Free Interactive Authoring Tool, CurrikiStudio, with Support
                from Linode
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard5} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki® Unveils Multi - platform Publishing for CurrikiStudio
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard6} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki Launches CurrikiStudio to Fast-track Digital Content
                Authoring and Delivery for Distance Learning
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard1} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki Names Keith Kostrzewski as CEO, Succeeding Chairman &
                Co-Founder Kim Jones
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard8} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki Awarded Grants from Four Technology Giants in 2019
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard9} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki Wins EdTech Digest Cool Tool Award for Open Educational
                Resources
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard10} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki Offers Youth Entrepreneurs® Resources to Middle and High
                School Business Educators for Real-World Application
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard6} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Curriki Offers Two New Social Studies Collections
              </BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={pressCard2} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>Oracle Awards Curriki $20K Grant</BlogHeading>
              <BlogAuthor>By: Caroline Benoist</BlogAuthor>
              <BlogLink>
                <Link>Read article</Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
        </Content>
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </Container>
    </div>
  );
};

export default PressAwards;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  .pagination {
    justify-content: center;
    align-items: baseline;
    margin-bottom: 40px;
    li.page-item {
      a.page-link {
        border-radius: 25px;
        background: #285aa5;
        margin-left: 8px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        height: 37px;
        :focus {
          box-shadow: none;
        }
      }
    }
    span.page-link {
      border-radius: 25px;
      background: #e5e5e5;
      margin-left: 8px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #ffffff;
      width: 33px;
      height: 36px;
      :focus {
        box-shadow: none;
      }
    }
    .page-item:first-child a {
      background: none !important;
      border: none;
      color: #084892 !important;
      font-size: 30px !important;
    }
    .page-item:last-child a {
      background: none !important;
      border: none;
      color: #084892 !important;
      font-size: 30px !important;
    }
  }
`;
const Heading = styled.h2`
  width: 290px;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #084892;
  text-transform: uppercase;
  margin-top: 101px;
  margin-bottom: 50px;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -36px;
  margin-bottom: 50px;
`;
const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  background: #ffffff;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  margin-right: 36px;
  margin-bottom: 30px;
  .article-text {
    padding: 20px 20px;
  }
`;

const BlogHeading = styled.h3`
  width: 220px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  height: 147px;
  margin-bottom: 10px;
  color: #084892;
`;
const BlogAuthor = styled.p`
  width: 220px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #515151;
`;
const BlogLink = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Link = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 14.7987px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #084892;
  img {
    width: 36px;
    height: 36px;
  }
`;

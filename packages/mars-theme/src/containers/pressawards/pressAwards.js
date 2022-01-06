import { React, useState } from "react";
import { styled, connect } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import Loading from "../../components/loading/loading";
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
import pressCard13 from "../../assets/images/pressCard13.png";
import pressCard14 from "../../assets/images/pressCard14.png";
import pressCard15 from "../../assets/images/pressCard15.png";
import Pagination from "react-js-pagination";
const PressAwards = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  console.log("data is here", data);
  const Html2React = libraries.html2react.Component;
  const [activePage, setactivePage] = useState(1);
  function handlepagechange() {
    if (activePage == 1) {
      setactivePage(2);
    } else {
      setactivePage(1);
    }
  }
  return (
    <div>
      <Banner title="Press & Awards" />
      <Container>
        <Heading>Press Releases</Heading>
        {data.isFetching && <Loading />}
        {activePage == 1 ? (
          <Content>
            {data.items &&
              data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                return (
                  <Article>
                    <Html2React html={item.content.rendered} />

                    <div className="article-text">
                      <BlogAuthor> By: Caroline Benoist</BlogAuthor>
                      <BlogLink>
                        <Link>Read article</Link>
                        <img src={arrow} alt="" />
                      </BlogLink>
                    </div>
                  </Article>
                );
              })}
          </Content>
        ) : (
          // <Content>
          //   <Article>
          //     {/* <div className="blog-image">
          //       <img src={pressCard1} alt="" />
          //     </div> */}
          //     <div className="article-text">
          //       {/* <BlogHeading>
          //         “How to Become an Entrepreneur” is Now Available Online as the
          //         First Higher Education Course Designed with CurrikiStudio
          //       </BlogHeading> */}
          //       {/* <BlogAuthor> By: Caroline Benoist</BlogAuthor> */}
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard2} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki Launches Interactive Civics Videos for Remote Learning
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard3} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki Answers the Call from School Districts, Universities,
          //         and Nonprofits―Launches CurrikiStudio AWS CloudFormation
          //         Template
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={currikiupdate} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki® Delivers Game-Changing Functionality and Access to
          //         its Free Interactive Authoring Tool, CurrikiStudio, with
          //         Support from Linode
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard5} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki® Unveils Multi - platform Publishing for CurrikiStudio
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard6} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki Launches CurrikiStudio to Fast-track Digital Content
          //         Authoring and Delivery for Distance Learning
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard1} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki Names Keith Kostrzewski as CEO, Succeeding Chairman &
          //         Co-Founder Kim Jones
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard8} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki Awarded Grants from Four Technology Giants in 2019
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard9} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki Wins EdTech Digest Cool Tool Award for Open
          //         Educational Resources
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard10} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki Offers Youth Entrepreneurs® Resources to Middle and
          //         High School Business Educators for Real-World Application
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard6} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>
          //         Curriki Offers Two New Social Studies Collections
          //       </BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          //   <Article>
          //     <div className="blog-image">
          //       <img src={pressCard2} alt="" />
          //     </div>
          //     <div className="article-text">
          //       <BlogHeading>Oracle Awards Curriki $20K Grant</BlogHeading>
          //       <BlogAuthor>By: Caroline Benoist</BlogAuthor>
          //       <BlogLink>
          //         <Link>Read article</Link>
          //         <img src={arrow} alt="" />
          //       </BlogLink>
          //     </div>
          //   </Article>
          // </Content>
          <Content>
            <Article>
              <div className="blog-image">
                <img src={pressCard13} alt="" />
              </div>
              <div className="article-text">
                <BlogHeading>
                  Curriki Names Keith Kostrzewski as CEO, Succeeding Chairman &
                  Co-Founder Kim Jones
                </BlogHeading>
                <BlogAuthor>By: Curriki</BlogAuthor>
                <BlogLink>
                  <Link>Read article</Link>
                  <img src={arrow} alt="" />
                </BlogLink>
              </div>
            </Article>
            <Article>
              <div className="blog-image">
                <img src={pressCard14} alt="" />
              </div>
              <div className="article-text">
                <BlogHeading>
                  Curriki Awarded Grants from Four Technology Giants in 2019
                </BlogHeading>
                <BlogAuthor>By: Curriki</BlogAuthor>
                <BlogLink>
                  <Link>Read article</Link>
                  <img src={arrow} alt="" />
                </BlogLink>
              </div>
            </Article>
            <Article>
              <div className="blog-image">
                <img src={pressCard15} alt="" />
              </div>
              <div className="article-text">
                <BlogHeading>
                  Curriki Wins EdTech Digest Cool Tool Award for Open
                  Educational Resources
                </BlogHeading>
                <BlogAuthor>By: Curriki</BlogAuthor>
                <BlogLink>
                  <Link>Read article</Link>
                  <img src={arrow} alt="" />
                </BlogLink>
              </div>
            </Article>
          </Content>
        )}
        {data.isFetching || (
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            linkClassNext="pages-link"
            firstPageText="false"
            nextPageText=">"
            hideDisable="false"
            itemClassPrev="item-prev"
            prevPageText="<"
            itemClassNext="item-next"
            activePage={activePage}
            itemsCountPerPage={16}
            totalItemsCount={17}
            pageRangeDisplayed={2}
            onChange={handlepagechange}
          />
        )}
      </Container>
    </div>
  );
};

export default connect(PressAwards);
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  margin: auto;
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    padding: 0px 70px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 0px 40px;
  }
  .pagination {
    justify-content: center;
    align-items: baseline;
    margin-bottom: 40px;
    li.page-item {
      a.page-link {
        background: #e5e5e5;
        border-radius: 25px;
        border: none;
        margin-left: 8px;
        color: #084892;
        font-family: "Rubik";
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        width: 35px;
        :focus {
          box-shadow: none;
        }
      }
    }
    .item-prev .page-link {
      background: none !important;
      color: #084892 !important;
    }
    .item-next .page-link {
      background: none !important;
      color: #084892 !important;
    }
    .page-item.active .page-link {
      color: #fff !important;
      background-color: #285aa6 !important;
    }
    span.page-link {
      border-radius: 25px;
      background: #285aa5;
      margin-left: 8px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      :focus {
        box-shadow: none;
      }
    }
    .page-item:first-child {
      display: none;
      color: #fff !important;
    }
    .page-item:last-child {
      display: none;
    }
  }
`;
const Heading = styled.h2`
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

  p {
    width: 220px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    // height: 147px;
    margin-bottom: 10px;
    color: #084892;
    padding: 0px 20px;
    @media screen and (min-width: 320px) and (max-width: 767px) {
      width: 100%;
    }
  }
  .article-text {
    padding: 20px 20px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    .blog-image {
      img {
        width: 100%;
      }
    }
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
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
  }
`;
const BlogAuthor = styled.p`
  width: 220px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px !important;
  line-height: 14px;
  color: #515151 !important;
  padding: 0px !important;
`;
const BlogLink = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
  }
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

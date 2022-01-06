import { React, useState, useEffect } from "react";
import { styled, connect } from "frontity";
import Pagination from "react-js-pagination";
import Loading from "../../components/loading/loading";
import arrow from "../../assets/images/yellow-arrow.png";
import currikiupdate from "../../assets/images/currikiupdates.png";
import press1 from "../../assets/images/PressReleases/press1.png";
import press2 from "../../assets/images/PressReleases/press2.png";
import press3 from "../../assets/images/PressReleases/press3.png";
import press4 from "../../assets/images/PressReleases/press4.png";
import press5 from "../../assets/images/PressReleases/press5.png";
import press13 from "../../assets/images/press13.png";
import blogCard2 from "../../assets/images/blogCard2.png";
import blogCard8 from "../../assets/images/blogCard8.png";
import blogCard9 from "../../assets/images/blogCard9.png";
import blogCard10 from "../../assets/images/blogCard10.png";
import blogCard11 from "../../assets/images/blogCard11.png";
import blogCard12 from "../../assets/images/blogCard12.png";
const PressReleases = ({ state, libraries }) => {
  const [activePage, setactivePage] = useState(1);
  function handlepagechange() {
    if (activePage == 1) {
      setactivePage(2);
    } else {
      setactivePage(1);
    }
  }
  const data = state.source.get(state.router.link);
  console.log("data", data);
  const { next, previous } = state.source.get(state.router.link);
  console.log("next", next);
  console.log("prev", previous);
  const Html2React = libraries.html2react.Component;
  // useEffect(() => {
  //   if (next) actions.source.fetch(next);
  // }, []);
  return (
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
                    <BlogAuthor>
                      By: {state.source.author[item.author].name}
                    </BlogAuthor>
                    <BlogLink>
                      <Link>
                        <a href="#">Read article</a>
                      </Link>
                      <img src={arrow} alt="" />
                    </BlogLink>
                  </div>
                </Article>
              );
            })}
          {/* <Article>
            <div className="blog-image">
              <img src={blogCard2} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Shawna Young: I’m a 4th Grade Teacher in Times of COVID
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={press2} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Five Ways to Use Digital Learning in Homeschooling
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={press4} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Four Ways to Use Digital Learning in Professional Development
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={press3} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                CurrikiStudio Earns Academics’ Choice 2020 Smart Media Award for
                Mind-Building Excellence
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={press1} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Five Essentials for Designing Remote Learning in Higher
                Education
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={press5} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                E-Learning: Your Burning Questions Answered
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={blogCard8} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                This Doesn’t Have to Be the School Year of Learning Loss. Here’s
                Why.
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={blogCard9} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                Ways Instructional Specialists Can Use CurrikiStudio to Support
                Teachers This Fall
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={blogCard10} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                CurrikiOne July 30: Publishing Interactive Content With
                CurrikiGo (FREE webinar)
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={blogCard11} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>Why Now Is the Time for CurrikiStudio</BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article>
          <Article>
            <div className="blog-image">
              <img src={blogCard12} alt="" />
            </div>
            <div className="article-text">
              <BlogHeading>
                CurrikiOne: Free Webinar, Designing Immersive Learning
                Experiences for Today’s Learner
              </BlogHeading>
              <BlogAuthor>By: Lani deGuia</BlogAuthor>
              <BlogLink>
                <Link>
                  <a href="#">Read article</a>
                </Link>
                <img src={arrow} alt="" />
              </BlogLink>
            </div>
          </Article> */}
        </Content>
      ) : (
        <Article>
          <div className="blog-image">
            <img src={press13} alt="" />
          </div>
          <div className="article-text">
            <BlogHeading>
              Letter to Parents During the Pandemic: YOUR best IS the best.
            </BlogHeading>
            <BlogAuthor>By: Curriki</BlogAuthor>
            <BlogLink>
              <Link>
                <a href="#">Read article</a>
              </Link>
              <img src={arrow} alt="" />
            </BlogLink>
          </div>
        </Article>
      )}
      {!data.isFetching && (
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
  );
};

export default connect(PressReleases);
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
        color: #fff;
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
    // height: 63px;
    color: #084892;
    // margin-bottom: 22px;
    padding: 0px 20px;
    @media screen and (min-width: 320px) and (max-width: 767px) {
      width: 100%;
    }
  }
  .article-text {
    padding: 0px 20px 20px 20px;
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
  height: 63px;
  color: #084892;
  margin-bottom: 22px;
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

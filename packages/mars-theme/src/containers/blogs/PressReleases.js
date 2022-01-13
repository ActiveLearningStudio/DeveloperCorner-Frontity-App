import { React, useState, useEffect } from "react";
import { styled, connect } from "frontity";
import Pagination from "react-js-pagination";
import Paginate from "./pagination";
import PressArticle from "./article";
import Loading from "../../components/loading/loading";
// import history from "../../../src/history";
import arrow from "../../assets/images/yellow-arrow.png";
import press13 from "../../assets/images/press13.png";
import { parse } from "himalaya";
const PressReleases = ({ state, libraries }) => {
  const [activePage, setactivePage] = useState(1);
  function handlepagechange() {
    // history.push("/");
  }
  const data = state.source.get(state.router.link);
  // alert(state.router.link);
  console.log("posts", data);
  const Html2React = libraries.html2react.Component;
  // console.log("******************************************");
  // console.log("HTML content - Normal content");
  // console.log(state.source["post"][273].content.rendered);
  // console.log("******************************************");
  // console.log("JSON content");
  // console.log(parse(state.source["post"][273].content.rendered));
  // console.log("******************************************");
  return (
    <Container>
      <Heading>Press Releases</Heading>
      {data.isFetching && <Loading />}
      <Content>
        {data.items &&
          data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return <PressArticle key={item.id} item={item} />;
          })}
      </Content>
      {!data.isFetching && <Paginate />}
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
  .article-text {
    padding: 20px;
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
const BlogHeading = styled.div`
  p {
    width: 220px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    height: 90px;
    color: #084892;
    // margin-bottom: 22px;
    @media screen and (min-width: 320px) and (max-width: 767px) {
      width: 100%;
    }
  }
`;
const BlogAuthor = styled.p`
  width: 220px;
  font-style: normal;
  font-weight: 300;
  font-size: 12px !important;
  line-height: 14px;
  color: #515151 !important;
  // padding: 0px !important;
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

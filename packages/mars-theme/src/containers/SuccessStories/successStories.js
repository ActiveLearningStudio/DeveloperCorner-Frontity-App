import React from "react";
import { styled, connect } from "frontity";
import Alert from "react-bootstrap/Alert";
import Paginate from "../../components/pagination/pagination";
import Loading from "../../components/loading/loading";
import FetchError from "../../components/error/fetchError";
import StoryCard from "./storyCard";
const SuccessStories = ({ data, state, libraries }) => {
  const Html2React = libraries.html2react.Component;
  return (
    <Section>
      <Container>
        {/* <Headercontainer>
          <Header>
            <h4>Educators</h4>
            <Headerbar></Headerbar>
          </Header>
          <Header>
            <h4>Businesses</h4>
            <Headerbar></Headerbar>
          </Header>
        </Headercontainer> */}
        {data.isFetching && <Loading />}
        {!data.isFetching && (
          <Cardcontent>
            {data.items ? (
              data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                return <StoryCard key={item.id} item={item} />;
              })
            ) : (
              <FetchError categoryName="Success Stories" />
            )}
          </Cardcontent>
        )}

        {!data.isFetching && data.items && (
          <Paginate link="/category/successstories/page/" />
        )}
      </Container>
    </Section>
  );
};

export default connect(SuccessStories);
const Section = styled.div`
  margin-top: 85px;
`;
const Container = styled.div`
  max-width: 1440px;
  padding: 0px 146px;
  margin: auto;
  @media screen and (max-width: 1200px) {
    padding: 0px 100px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 70px;
  }
  @media screen and (max-width: 768px) {
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
    .page-item.active .page-link {
      color: #fff !important;
      border: none;
      background: rgba(40, 19, 166) !important;
      a {
        color: #fff;
      }
    }
    .page-item.disabled .page-link.disabled {
      background: none !important;
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
      :disabled {
        background: none;
      }
    }
    .page-item:first-child .page-link {
      background: none !important;
      border: none;
      font-size: 20px;
      a {
        color: #084892;
      }
    }
    .page-item:last-child .page-link {
      background: none !important;
      border: none;
      font-size: 20px;
    }
    a {
      color: #084892;
    }
  }
`;
const Headercontainer = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    width: 98%;
  }
`;
const Header = styled.h4`
        max-width:333px;
        display:flex;
        margin-bottom:50px;
        align-items:center;

        h4 {
            color:#084892;
            font-weight:500;
            margin-right:24px;
            font-size-32px;
        }
        `;
const Cardcontent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -50px;
  margin-bottom: 73px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 875px;
    flex-direction: row;
    justify-content: space-around;
  }
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
const Headerbar = styled.div`
  width: 100px;
  border-bottom: 3px solid #fa8f2c;
  transform: rotate(0deg);
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

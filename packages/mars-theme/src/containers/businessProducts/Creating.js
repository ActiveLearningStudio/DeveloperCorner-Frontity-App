import React from "react";
import { styled, connect } from "frontity";

import StartedImg from "../../assets/images/Trynow1.svg";
import backimage from "../../assets/images/backimage.png";
const Creating = ({ trycurrikiposts, state, libraries }) => {
  console.log("creating", trycurrikiposts);
  const posttitle = trycurrikiposts[0]?.title;
  const postdesc = trycurrikiposts[0]?.content;
  const featureimage =
    state.source.attachment[trycurrikiposts[0]?.featured_media];
  const Html2React = libraries.html2react.Component;
  return (
    <StyleDiv>
      <Container>
        <Content>
          <LeftDiv>
            {posttitle ? (
              <h2
                dangerouslySetInnerHTML={{
                  __html: posttitle.rendered,
                }}
              />
            ) : (
              <h2>Try CurrikiStudio now</h2>
            )}
            {postdesc && <Html2React html={postdesc?.rendered} />}
            <button>START CREATING</button>
          </LeftDiv>
          <RightDiv>
            <img
              src={featureimage ? featureimage.source_url : StartedImg}
              alt=""
            />
          </RightDiv>
        </Content>
      </Container>
    </StyleDiv>
  );
};

export default connect(Creating);

const StyleDiv = styled.div`
  background-image: url(${backimage});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;
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
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 70px;
`;
const LeftDiv = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 14px;
  }
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    color: #f8af2c;
    margin-bottom: 1rem;
  }
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    margin-bottom: 2rem;
  }
  button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 5px 40px;
    border-radius: 25px;
    font-weight: bold;
    @media screen and (max-width: 991px) {
      margin-bottom: 20px;
    }
  }
`;
const RightDiv = styled.div`
  margin-bottom: -12px;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

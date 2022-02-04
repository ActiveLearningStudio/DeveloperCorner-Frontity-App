import React from "react";
import { styled, css, connect } from "frontity";
import Alert from "../../components/error/fetchError";
import WebinarArticle from "./article";
import webinarhero from "../../assets/images/webinarhero.svg";
import backgroundPic from "../../assets/images/Group153.png";
import Banner from "../../components/banner/Styledbanner";
import pcimage from "../../assets/images/Rectangle109.png";
import plusicon from "../../assets/images/PLUS.svg";
import arrowIcon from "../../assets/images/yellow-arrow.png";
import playIcon from "../../assets/images/play.png";
import webinar1 from "../../assets/images/webinars/web1.png";
import webinar2 from "../../assets/images/webinars/web2.png";
import webinar3 from "../../assets/images/webinars/web3.png";
import webinar4 from "../../assets/images/webinars/web4.png";
import webinar5 from "../../assets/images/webinars/web5.png";
import webinar6 from "../../assets/images/webinars/web6.png";
import webinar7 from "../../assets/images/webinars/web7.png";
import webinar8 from "../../assets/images/webinars/web8.png";
import Loading from "../../components/loading/loading";
import FetchError from "../../components/error/fetchError";
const Index = ({ webinarsCategory, state, libraries }) => {
  let { divingPosts, webinarsPosts } = [];
  webinarsCategory.map(({ category, posts }) => {
    if (category) {
      if (category.id === 76) {
        return (divingPosts = posts);
      }
      if (category.id === 78) {
        return (webinarsPosts = posts);
      }
    }
  });
  console.log("webinars", webinarsPosts);
  const posttitle = divingPosts && divingPosts[0]?.title;
  const postdesc = divingPosts && divingPosts[0]?.content;
  const featureimage =
    divingPosts && state.source.attachment[divingPosts[0]?.featured_media];
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);
  return (
    <div>
      <Banner title="Curriki Webinars" />
      <Container>
        {data.isFetching && <Loading />}
        <Content>
          {!data.isFetching && (
            <>
              {" "}
              <LeftCol>
                {posttitle ? (
                  <Heading>{posttitle?.rendered} </Heading>
                ) : (
                  <Heading>Dive into CurrikiStudio </Heading>
                )}
                {postdesc ? (
                  <Html2React html={postdesc?.rendered} />
                ) : (
                  <p>Register for monthly webinar demo</p>
                )}

                <PrimaryButton>Register Now</PrimaryButton>
              </LeftCol>
              <RightCol>
                <img
                  src={featureimage ? featureimage.source_url : webinarhero}
                  alt=""
                />
              </RightCol>
            </>
          )}
        </Content>
      </Container>
      <PastWebinars>
        <Container>
          <WebinarHeading>
            <h2>PAST WEBINARS</h2>
            <img src={plusicon} alt="" />
          </WebinarHeading>
          {!data.isFetching && (
            <CardContent>
              {webinarsPosts && webinarsPosts.length > 0 ? (
                webinarsPosts.map((postitem, key) => {
                  return <WebinarArticle key={key} postitem={postitem} />;
                })
              ) : (
                <FetchError categoryName="webinars" />
                // <>
                //   <Card>
                //     <CardHead
                //       css={css`
                //         background: linear-gradient(
                //             0deg,
                //             rgba(40, 90, 165, 0.75),
                //             rgba(40, 90, 165, 0.75)
                //           ),
                //           url("${webinar2}");
                //       `}
                //     >
                //       <div>
                //         <img src={playIcon} alt="" />
                //       </div>
                //     </CardHead>
                //     <div className="card-inner-content">
                //       <CardHeading>
                //         {" "}
                //         Using CurrikiStudio Interactions to Inspire Curiosity and
                //         Critical Thinking
                //       </CardHeading>
                //       <CardPara>January 27, 2021</CardPara>
                //       <CardBottom>
                //         <a href="#">Watch webinar now</a>
                //         <img src={arrowIcon} alt="" />
                //       </CardBottom>
                //     </div>
                //   </Card>
                //   <Card>
                //     <CardHead
                //       css={css`
                //         background: linear-gradient(
                //             0deg,
                //             rgba(40, 90, 165, 0.75),
                //             rgba(40, 90, 165, 0.75)
                //           ),
                //           url("${webinar3}");
                //       `}
                //     >
                //       <div>
                //         <img src={playIcon} alt="" />
                //       </div>
                //     </CardHead>
                //     <div className="card-inner-content">
                //       <CardHeading> Dialogue Cards vs. Flash Cards</CardHeading>
                //       <CardPara>December 09, 2020</CardPara>
                //       <CardBottom>
                //         <a href="#">Watch webinar now</a>
                //         <img src={arrowIcon} alt="" />
                //       </CardBottom>
                //     </div>
                //   </Card>
                //   <Card>
                //     <CardHead
                //       css={css`
                //         background: linear-gradient(
                //             0deg,
                //             rgba(40, 90, 165, 0.75),
                //             rgba(40, 90, 165, 0.75)
                //           ),
                //           url("${webinar4}");
                //       `}
                //     >
                //       <div>
                //         <img src={playIcon} alt="" />
                //       </div>
                //     </CardHead>
                //     <div className="card-inner-content">
                //       <CardHeading> Hotspots are HOT!</CardHeading>
                //       <CardPara>December 02, 2020</CardPara>
                //       <CardBottom>
                //         <a href="#">Watch webinar now</a>
                //         <img src={arrowIcon} alt="" />
                //       </CardBottom>
                //     </div>
                //   </Card>
                //   <Card>
                //     <CardHead
                //       css={css`
                //         background: linear-gradient(
                //             0deg,
                //             rgba(40, 90, 165, 0.75),
                //             rgba(40, 90, 165, 0.75)
                //           ),
                //           url("${webinar5}");
                //       `}
                //     >
                //       <div>
                //         <img src={playIcon} alt="" />
                //       </div>
                //     </CardHead>
                //     <div className="card-inner-content">
                //       <CardHeading>
                //         {" "}
                //         Creating Learning Activities with Drag and Drop
                //       </CardHeading>
                //       <CardPara>November 18, 2020</CardPara>
                //       <CardBottom>
                //         <a href="#">Watch webinar now</a>
                //         <img src={arrowIcon} alt="" />
                //       </CardBottom>
                //     </div>
                //   </Card>
                //   <Card>
                //     <CardHead
                //       css={css`
                //         background: linear-gradient(
                //             0deg,
                //             rgba(40, 90, 165, 0.75),
                //             rgba(40, 90, 165, 0.75)
                //           ),
                //           url("${webinar6}");
                //       `}
                //     >
                //       <div>
                //         <img src={playIcon} alt="" />
                //       </div>
                //     </CardHead>
                //     <div className="card-inner-content">
                //       <CardHeading>
                //         {" "}
                //         Making Interactive Videos that Engage Like Never Before
                //       </CardHeading>
                //       <CardPara>November 11, 2020</CardPara>
                //       <CardBottom>
                //         <a href="#">Watch webinar now</a>
                //         <img src={arrowIcon} alt="" />
                //       </CardBottom>
                //     </div>
                //   </Card>
                //   <Card>
                //     <CardHead
                //       css={css`
                //         background: linear-gradient(
                //             0deg,
                //             rgba(40, 90, 165, 0.75),
                //             rgba(40, 90, 165, 0.75)
                //           ),
                //           url("${webinar7}");
                //       `}
                //     >
                //       <div>
                //         <img src={playIcon} alt="" />
                //       </div>
                //     </CardHead>
                //     <div className="card-inner-content">
                //       <CardHeading>
                //         {" "}
                //         How to Create Interactive Experiences to Excite, Engage,
                //         and Inspire Your Students
                //       </CardHeading>
                //       <CardPara>August 27, 2020</CardPara>
                //       <CardBottom>
                //         <a href="#">Watch webinar now</a>
                //         <img src={arrowIcon} alt="" />
                //       </CardBottom>
                //     </div>
                //   </Card>
                //   <Card>
                //     <CardHead
                //       css={css`
                //         background: linear-gradient(
                //             0deg,
                //             rgba(40, 90, 165, 0.75),
                //             rgba(40, 90, 165, 0.75)
                //           ),
                //           url("${webinar8}");
                //       `}
                //     >
                //       <div>
                //         <img src={playIcon} alt="" />
                //       </div>
                //     </CardHead>
                //     <div className="card-inner-content">
                //       <CardHeading>
                //         {" "}
                //         Publishing Interactive Content with CurrikiGo
                //       </CardHeading>
                //       <CardPara>July 30, 2020</CardPara>
                //       <CardBottom>
                //         <a href="#">Watch webinar now</a>
                //         <img src={arrowIcon} alt="" />
                //       </CardBottom>
                //     </div>
                //   </Card>
                // </>
              )}
            </CardContent>
          )}
        </Container>
      </PastWebinars>
    </div>
  );
};
export default connect(Index);
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
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
`;
const LeftCol = styled.div`
  width: 100%;
  p {
    color: #515151;
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 30px;
    color: #515151;
    margin-bottom: 40px;
  }
`;
const RightCol = styled.div`
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const Heading = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
  color: #084892;
  margin-bottom: 20px;
`;
const PrimaryButton = styled.button`
  padding: 13px 45px;
  background: #084892;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  border: none;
  color: #ffffff;
`;
const PastWebinars = styled.div`
  background: url(${backgroundPic});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -115px;
  @media screen and (max-width: 1024px) {
    background: none;
  }
`;
const WebinarHeading = styled.div`
  display: flex;
  align-items: center;
  padding-top: 200px;
  margin-bottom: 60px;
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    color: #084892;
    margin-right: 20px;
  }
`;
const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  border-radius: 5px;
  background: #fff;
  margin-right: 25px;
  margin-bottom: 25px;
  box-shadow: 0px 2px 25px 5px rgba(81, 81, 81, 0.1);
  border-radius: 5px;
  .card-inner-content {
    padding: 14px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const CardHead = styled.div`
  width: 260px;
  height: 200px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover !important;
  div {
    text-align: center;
    padding-top: 62px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const CardHeading = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #084892;
  margin-top: 20px;
  width: 220px;
  height: 84px;
  margin-bottom: 10px;
`;
const CardPara = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 30px;
  color: #515151;
`;
const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-decoration-line: underline;

    color: #084892;
    margin-right: 20px;
  }
`;

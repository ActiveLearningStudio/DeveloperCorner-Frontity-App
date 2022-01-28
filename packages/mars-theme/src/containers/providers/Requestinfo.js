import React from "react";
import { styled, connect } from "frontity";
import globeImg from "../../assets/images/providers.png";
const Requestinfo = ({ requestedinfoposts, state, libraries }) => {
  console.log("requestedinfoposts", requestedinfoposts);
  const posttitle = requestedinfoposts && requestedinfoposts[0]?.title;
  const postdesc = requestedinfoposts && requestedinfoposts[0]?.content;
  const featureimage =
    requestedinfoposts &&
    state.source.attachment[requestedinfoposts[0]?.featured_media];
  const Html2React = libraries.html2react.Component;
  return (
    <Section>
      <Container>
        <Content>
          <Leftcol>
            <h2>
              Amplifying our collective <span>impact in education</span>
            </h2>
            {posttitle ? (
              <h3
                dangerouslySetInnerHTML={{
                  __html: posttitle.rendered,
                }}
              />
            ) : (
              <h3>
                JOIN US IN BUILDING THE NEXT GENERATION OF TOOLS THAT SUPPORT
                FREE AND OPEN EDUCATION
              </h3>
            )}
            {postdesc ? (
              <Html2React html={postdesc?.rendered} />
            ) : (
              <p>
                Curriki provides organizations from around the world with the
                tools to create next-generation learning experiences. To support
                our customers, we are growing a network of professional service
                providers with strong leadership, technology expertise, and a
                commitment to scaling open, free, and quality education across
                the globe.
              </p>
            )}

            {requestedinfoposts && <button>REQUEST MORE INFORMATION</button>}
          </Leftcol>
          <Rightcol>
            <img
              src={featureimage ? featureimage.source_url : globeImg}
              alt=""
            />
          </Rightcol>
        </Content>
      </Container>
    </Section>
  );
};

export default connect(Requestinfo);
const Section = styled.div``;
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
  padding: 60px 0px;
`;

const Leftcol = styled.div`
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    color: #084892;
    margin-bottom: 2rem;
    span {
      color: rgb(255, 177, 36);
    }
  }
  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 30px;
    color: #084892;
    margin-bottom: 1rem;
  }
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #464646;
    margin-bottom: 2rem;
  }
  button {
    width: 359px;
    height: 38px;
    background: #084892;
    box-shadow: 0px 10px 20px -5px rgba(8, 72, 146, 0.35);
    border-radius: 25px;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    border: none;
    color: #fff;
    border-radius: 25px;
    @media screen and (max-width: 480px) {
      width: 270px;
    }
  }
`;

const Rightcol = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

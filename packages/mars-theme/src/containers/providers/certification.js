import React from "react";
import { styled } from "frontity";
import plusicon from "../../assets/images/PLUS.svg";
import resume1 from "../../assets/images/resume1.svg";
import resume2 from "../../assets/images/resume2.svg";
import resume3 from "../../assets/images/resume3.svg";
import resume4 from "../../assets/images/resume4.svg";

const Certification = () => {
  return (
    <Section>
      <Container>
        <Heading>
          <h2>CERTIFICATION PROCESS</h2>
          <img src={plusicon} alt="" />
        </Heading>
        <Content>
          <LeftCol>
            <Card>
              <Span>1</Span>
              <Cardbody>
                <h3>APPLICATION</h3>
                <div>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Application Submission</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Technology / Learning Portfolio Review</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Reference Check</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Performance base Project</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Partnership Agreement</span>
                  </p>
                </div>
              </Cardbody>
              <ImageDiv>
                <img src={resume1} alt="" />
              </ImageDiv>
            </Card>
            <Card>
              <Span>2</Span>
              <Cardbody>
                <h3>APPLICATION</h3>
                <div>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Application Submission</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Technology / Learning Portfolio Review</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Reference Check</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Performance base Project</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Partnership Agreement</span>
                  </p>
                </div>
              </Cardbody>
              <ImageDiv>
                <img src={resume2} alt="" />
              </ImageDiv>
            </Card>
          </LeftCol>
          <RightCol>
            <Card>
              <Span>3</Span>
              <Cardbody>
                <h3>APPLICATION</h3>
                <div>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Application Submission</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Technology / Learning Portfolio Review</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Reference Check</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Performance base Project</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Partnership Agreement</span>
                  </p>
                </div>
              </Cardbody>
              <ImageDiv>
                <img src={resume3} alt="" />
              </ImageDiv>
            </Card>
            <Card>
              <Span>4</Span>
              <Cardbody>
                <h3>APPLICATION</h3>
                <div>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Application Submission</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Technology / Learning Portfolio Review</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Reference Check</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Performance base Project</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Partnership Agreement</span>
                  </p>
                </div>
              </Cardbody>
              <ImageDiv>
                <img src={resume4} alt="" />
              </ImageDiv>
            </Card>
          </RightCol>
        </Content>
      </Container>
    </Section>
  );
};

export default Certification;

const Section = styled.div``;
const Heading = styled.div`
  display: flex;
  margin-top: 100px;
  h2 {
    margin-right: 10px;
    color: #084892;
  }
`;
const Content = styled.div`
  padding: 60px;
  margin-bottom: 40px;
`;
const Card = styled.div`
display:flex
flex-direction:column;
justify-content:space-between;

`;
const ImageDiv = styled.div`
  text-align: right;
`;
const Span = styled.span`
  color: rgb(255, 177, 36);
  font-size: 50px;
  font-weight: bold;
`;
const Cardbody = styled.div`
  h3 {
    color: #084892;
  }
  p {
    img {
      width: 12px;
      height: 12px;
    }
    span {
      margin-left: 10px;
    }
  }
`;
const LeftCol = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RightCol = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 0px 110px;
`;

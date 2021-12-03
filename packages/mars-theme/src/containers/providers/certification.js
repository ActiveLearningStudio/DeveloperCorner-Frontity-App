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
                <h3> Application</h3>
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
                    <span> Performance-Based Project Assignment</span>
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
                <h3>Certification</h3>
                <div>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Kickoff and Account Manager Introduction</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Self tour of Resources</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Course Completion</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Support Hours</span>
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
                <h3>Launch</h3>
                <div>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Co-branded Pitch</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Led Generation / Bring into deep dive/solutioning
                    calls
                    </span>
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
                <h3>Success</h3>
                <div>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Bi-monthly Check-ins</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Project and Pipeline Reviews</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Co-Marketing (Webinars, Newsletters, Press
                    Releases), Social Media
                    </span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span> Performance base Project</span>
                  </p>
                  <p>
                    <img src={plusicon} alt="" />
                    <span>Compatibility testing for New Releases and Features</span>
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
const Container = styled.div`
max-width:1440px;
padding:0px 146px;
`;
const Heading = styled.div`
  display: flex;
  margin-top: 100px;
  h2 {
    margin-right: 10px;
    color: #084892;
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
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
@media screen and (max-width: 991px) {
padding:0 70px;
}

`;
const ImageDiv = styled.div`
  text-align: right;
  @media screen and (max-width: 991px) {
    margin-top:50px
    padding-right:50px;
  }
  @media screen and (max-width: 768px) {
    text-align:center;
    padding:0;
    }
`;
const Span = styled.span`
  color: rgb(255, 177, 36);
  font-size: 50px;
  font-weight: bold;
`;
const Cardbody = styled.div`
  h3 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #084892;
    text-transform:uppercase;
  }
  p {
    img {
      width: 12px;
      height: 12px;
      
    }
    span {
      margin-left: 10px;
      font-family: Open Sans;
      color: #515151;
    }
  }
`;
const LeftCol = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  flex-direction:column;
  text-align:center;
  }
`;
const RightCol = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction:column;
    text-align:center;
    }
`;

import React from "react";
import { styled } from "frontity";
import StartedImg from "../../assets/images/Trynow1.svg";
const Creating = () => {
  return (
    <StyleDiv>
      <Container>
        <Content>
          <LeftDiv>
            <h2>Try Curriki Studio Now</h2>
            <p>
              Curriki Studio demo envirenment means to give you a preview of how
              your organization can use use our technology. It is completetly
              free. For more information on how to integrate your LMS, contact
              us using the form below.
            </p>
            <button>START CREATING</button>
          </LeftDiv>
          <RightDiv>
            <img src={StartedImg} alt="" />
          </RightDiv>
        </Content>
      </Container>
    </StyleDiv>
  );
};

export default Creating;

const StyleDiv = styled.div`
  background: #084892;
`;
const Content = styled.div`
  display: flex;
`;
const LeftDiv = styled.div`
  h2 {
    color: #ffb124;
    margin-bottom: 1rem;
  }
  p {
    color: #fff;
    margin-bottom: 2rem;
  }
  button {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 5px 40px;
    border-radius: 50px;
    font-weight: bold;
  }
`;
const RightDiv = styled.div``;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 60px 110px 0px 110px;
`;

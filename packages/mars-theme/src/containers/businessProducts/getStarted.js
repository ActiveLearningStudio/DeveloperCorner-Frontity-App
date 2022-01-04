import React from "react";
import { styled, connect } from "frontity";
import PrimaryButton from "../../StyledComponent/PrimaryButton";
import GetPic from "../../assets/images/Companies.png";
const GetStarted = () => {
  return (
    <Container>
      <StyleDiv>
        <LeftDiv>
          <h2>
            Curriki has turnkey tools for you to{" "}
            <span> create, manage and deliver </span>
            interactive training content to employees, at scale.
          </h2>
          <Button title="Get Started">Get Started</Button>
        </LeftDiv>
        <RightDiv>
          <img src={GetPic} alt="Get started picture" />
        </RightDiv>
      </StyleDiv>
    </Container>
  );
};

export default connect(GetStarted);
const Container = styled.div`
max-width:1440px;
padding:0px 146px;
margin: auto;
@media screen and (max-width: 1200px) {
  padding: 0px 100px;
}
@media screen and (max-width: 768px) {
  padding: 0px 40px;
}

  }
`;
const StyleDiv = styled.div`
  display: flex;
  padding: 20px 0px;
`;
const LeftDiv = styled.div`
  margin-top: 50px;
  h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    color: #084892;
    margin-bottom: 3rem;
    span {
      color: rgb(255, 177, 36);
    }
  }
}
`;
const Button = styled.button`
  width: 212px;
  height: 45px;
  background: #084892;
  font-family: rubik;
  color: #fff;
  border: 1px solid #084892;
  box-shadow: 0px 10px 20px -5px rgb(8 72 146 / 35%);
  border-radius: 25px;
  font-weight: bold;
  text-transform: uppercase;
  @media screen and (max-width: 1200px) {
    margin-bottom: 70px;
  }
`;
const RightDiv = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

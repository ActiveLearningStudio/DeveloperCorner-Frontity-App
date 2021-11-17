import React from "react";
import { styled } from "frontity";
const StyledHeading = ({ text }) => {
  return <Heading>{text}</Heading>;
};

export default StyledHeading;
const Heading = styled.h2`
  color: ${(props) => props.color || "#084892"};
  margin-bottom: 40px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;

  color: #084892;
`;

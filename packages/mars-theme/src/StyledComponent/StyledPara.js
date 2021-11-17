import React from "react";
import { styled } from "frontity";
const StyledPara = ({ text }) => {
  return <Paragraph>{text}</Paragraph>;
};

export default StyledPara;
const Paragraph = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #515151;
`;

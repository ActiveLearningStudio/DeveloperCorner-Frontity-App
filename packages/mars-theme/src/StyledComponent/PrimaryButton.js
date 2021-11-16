import React from "react";
import { styled } from "frontity";
const PrimaryButton = ({ title }) => {
  return <Button>{title}</Button>;
};

export default PrimaryButton;
const Button = styled.button`
  width: 212px;
  height: 45px;
  background: #084892;
  font-family: rubik;
  color: #fff;
  border: 1px solid #084892;
  box-shadow: 0px 10px 20px -5px  rgba(8, 72, 146, 0.35);
  border-radius: 25px;
`;

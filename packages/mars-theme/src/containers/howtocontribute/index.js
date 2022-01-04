import React from "react";
import { styled } from "frontity";
import Sidebar from "../../components/Sidebar/index";
import Contribution from './contribution';
const Index = () => {
  return (
    <FlexBox>
      <Sidebar />
      <Contribution />
    </FlexBox>
  );
};

export default Index;
const FlexBox = styled.div`
  display: flex;
`;

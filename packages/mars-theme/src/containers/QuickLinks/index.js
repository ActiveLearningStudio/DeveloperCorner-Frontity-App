import React from "react";
import { styled, css } from "frontity";
import Banner from "../../components/banner/Styledbanner";
import Sidebar from "../../components/Sidebar/index";
import QuickLinks from "./QuickLinks";

const Index = () => {
  return (
    <FlexBox>
      <Sidebar />

      <QuickLinks />
    </FlexBox>
  );
};

export default Index;

const FlexBox = styled.div`
  display: flex;
`;

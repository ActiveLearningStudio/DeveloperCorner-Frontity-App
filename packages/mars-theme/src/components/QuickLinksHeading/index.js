import React from "react";
import { styled, css } from "frontity";
import SearchField from "react-search-field";
import EmailIcon from "../../assets/images/email.png";
import calenderIcon from "../../assets/images/calender.png";
import group from "../../assets/images/Group.png";
const Index = () => {
  return (
    <>
      <Heading>Developer Corner</Heading>
      <LowerHeading>
        <Search>
          <SearchField
            placeholder="Search..."
            searchText="Search Project"
            classNames="test-class"
          />
        </Search>
        <RightContent>
          <Link>
            <img src={EmailIcon} alt="" />
            <a>News letter</a>
          </Link>
          <Link>
            {" "}
            <img src={group} alt="" />
            <a>Forum</a>
          </Link>
          <Link>
            {" "}
            <img src={calenderIcon} alt="" />
            <a>Schedule a demo</a>
          </Link>
        </RightContent>
      </LowerHeading>
      <HeadingBar>
        <Title>Quick Links</Title>
        <Bar></Bar>
      </HeadingBar>
    </>
  );
};

export default Index;
const Heading = styled.h3`
  width: 237px;
  background: #f7faff;
  border-radius: 4px;
  padding: 8px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  align-items: center;
  color: #084892;
`;
const LowerHeading = styled.div`
  width: 1008px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7faff;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 20px;
`;
const Search = styled.div`
  .react-search-field {
    border: none !important;
    border-bottom: 2px solid #084892 !important;
    input {
      font-family: Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #084892 !important;
      background: #f7faff !important;
    }
    button {
      border-left: none !important;
      background: #f7faff !important;
      svg {
        fill: #084892 !important;
        width: 18px !important;
        font-weight: bold;
      }
    }
  }
`;
const RightContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: -15px;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  margin-right: 15px;
  text-decoration: none;
  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    margin-left: 5px;
    color: #084892 !important;
  }
`;
const HeadingBar = styled.div`
  width: 1008px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #f8af2c;
`;
const Bar = styled.div`
  border-bottom: 2px solid #f8af2c;
  height: 5px;
  width: 855px;
  color: #f8af2c;
`;

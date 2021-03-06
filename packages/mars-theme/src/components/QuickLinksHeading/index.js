import React from "react";
import { styled, css } from "frontity";
import SearchField from "react-search-field";
import EmailIcon from "../../assets/images/email.png";
import calenderIcon from "../../assets/images/calender.png";
import group from "../../assets/images/Group.png";
const Index = (props) => {
  const { titlebar } = props;
  return (
    <>
      <Heading>Developers Corner</Heading>
      <LowerHeading>
        <Search>
          <SearchField
            placeholder="Search..."
            searchText="Search content"
            classNames="test-class"
          />
        </Search>
        <RightContent>
          <Link>
            <div>
              <img src={EmailIcon} alt="" />
              <a href="#">News letter</a>
            </div>
          </Link>

          <Link>
            {" "}
            <div className="div-active">
              <img src={group} alt="" />
              <a className="active" href="#">
                Forum
              </a>
            </div>
          </Link>
          <Link>
            {" "}
            <div>
              <img src={calenderIcon} alt="" />
              <a href="#">Schedule a demo</a>
            </div>
          </Link>
        </RightContent>
      </LowerHeading>
      <HeadingBar>
        <Title>{titlebar}</Title>
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
  font-family: "Rubik";
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  align-items: center;
  color: #084892;
`;
const LowerHeading = styled.div`
  max-width: 1008px;
  display: flex;
  flex-wrap: wrap !important;
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
      font-family: "Open Sans";
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
  @media (max-width: 980px) {
    margin-top: 18px;
  }
  @media (max-width: 380px) {
    flex-wrap: wrap;
  }
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  margin-right: 24px;
  text-decoration: none;
  color: #084892 !important;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .div-active {
    background: #e5eeff;
    margin-right: 4px !important;
  }
  a {
    font-family: "Rubik";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    margin-left: 5px;
    color: #084892 !important;
    text-decoration: none;
  }
  @media (max-width: 380px) {
    margin-bottom: 15px;
  }
`;
const HeadingBar = styled.div`
  max-width: 1008px;
  // width: 1008px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #f8af2c;
  width: 218px;
  flex-shrink: 0;
  max-width: 476px;
  margin: 0 12px 0 0;
`;
const Bar = styled.div`
  border-bottom: 2px solid #f8af2c;
  height: 5px;
  width: 100%;
  color: #f8af2c;
`;

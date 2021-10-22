import React from "react";
// import Headings from 'curriki-design-system/dist/utils/Headings/headings';
// import Buttons from 'curriki-design-system/dist/utils/Buttons/buttons';
import Arrow from "../../assets/images/R-arrow.svg";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Forums = () => {
  return (
    <>
      <div className="forum-section">
        <div className="forum-header">
          <div className="forum-nav">
            <a>Home</a>
            <img src={Arrow} alt="arrow" />
            <a>Forums</a>
          </div>
          <div className="forum-search">
            <input className="form-input" type="search" placeholder="Search" />
            <button className="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="forum-table">
          <Table className="table" size="xl">
            <thead>
              <tr>
                <th>Forum</th>
                <th>Topics</th>
                <th>Posts</th>
                <th>Last Post</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>General Discussion</td>
                <td>1</td>
                <td>1</td>
                <td>2 weeks, 1 day ago</td>
              </tr>
              <tr>
                <td>General Discussion</td>
                <td>1</td>
                <td>1</td>
                <td>2 weeks, 1 day ago</td>
              </tr>
              <tr>
                <td>General Discussion</td>
                <td>1</td>
                <td>1</td>
                <td>2 weeks, 1 day ago</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Forums;

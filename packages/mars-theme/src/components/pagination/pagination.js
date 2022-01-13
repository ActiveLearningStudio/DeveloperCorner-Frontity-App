import { React, useEffect } from "react";
import { connect, styled } from "frontity";
import { Pagination } from "react-bootstrap";
import Link from "../Header/link";

const Paginate = ({ state, actions }) => {
  // Get the total posts to be displayed based for the current link

  const { next, previous, page, totalPages } = state.source.get(
    state.router.link
  );
  const pages = [];
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    pages.push(pageNumber);
  }
  // Pre-fetch the the next page if it hasn't been fetched yet.
  useEffect(() => {
    if (next) actions.source.fetch(next);
  }, []);
  return (
    <Pagination>
      <Pagination.Item disabled={!previous ? true : false}>
        <Link link={previous}>&lt;</Link>
      </Pagination.Item>
      {pages.map((pageNum) => {
        const link = "/category/blogs/page/" + pageNum + "/";
        return (
          <Pagination.Item active={page === pageNum ? true : false}>
            <Link link={link}>{pageNum}</Link>
          </Pagination.Item>
        );
      })}
      <Pagination.Item disabled={!next ? true : false}>
        <Link link={next}>&gt;</Link>
      </Pagination.Item>
    </Pagination>
  );
};

export default connect(Paginate);

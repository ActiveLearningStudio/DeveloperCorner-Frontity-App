import React from "react";
import Alert from "react-bootstrap/Alert";
const FetchError = ({ categoryName }) => {
  return (
    <Alert variant="success">
      <Alert.Heading>No article found for this page</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. Please go
        to admin panel and create blogs for {categoryName} category. When you
        will create any blog that will be render here.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure that select blog category during
        publishing.
      </p>
    </Alert>
  );
};

export default FetchError;

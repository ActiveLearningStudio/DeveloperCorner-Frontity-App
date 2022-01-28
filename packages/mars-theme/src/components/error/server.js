import React from "react";
import { styled, connect } from "frontity";
import Alert from "react-bootstrap/Alert";
const ServerError = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got a server error!</Alert.Heading>
      <p>
        This is something about missing/incorrect url in source of your
        website.Please set the correct wordpress site url for fetcing the
        wordpress site data through RESTAPI .
      </p>
    </Alert>
  );
};

export default ServerError;
const Container = styled.div`
  width: 100%;
`;

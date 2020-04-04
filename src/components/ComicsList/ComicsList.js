import React from "react";
import ComicsListItem from "../ComicsListItem";
import { Row, Col } from "react-bootstrap";

import "./ComicsList.scss";

const ComicsList = ({ comics }) => {
  return (
    <Row>
      {comics.map((comic, idx) => (
        <Col key={idx} className={"ComicsList__col"} xs={12}>
          <ComicsListItem comic={comic} />
        </Col>
      ))}
    </Row>
  );
};

export default ComicsList;

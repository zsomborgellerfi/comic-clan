import React from 'react';
import { connect } from 'react-redux';
import ComicsListItem from '../ComicsListItem';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

import './ComicsList.scss';

const ComicsList = ({ comics }) => {
    return (
        <Row>
            {comics.map((comic, idx) =>
                <Col key={idx} className={"ComicsList__col"}>
                    <ComicsListItem comic={comic} />
                </Col>

            )}
        </Row>


    );
};


export default ComicsList;

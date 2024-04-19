import React from 'react';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function SearchScreen() {
  return (
    <div>
      <Helmet>
        <title>Search Content</title>
      </Helmet>
      <div className="box-banner">Banner here</div>

      <Container>
        <Row className="box-header">header</Row>
        <div className="mb-3">
          <Row>
            <Col md={3} className="box-sidebar">
              filtration
            </Col>
            <Col md={9} className="box-content">
              col-content
              <Row className="box-allContents">row all contents</Row>
              <div className="box-pagination">pagination</div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="box-banner mb-5">submission</div>
    </div>
  );
}

import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Rating from './Rating';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Content(prop) {
  const { content } = prop;

  return (
    <div>
      <Card className="mb-4 contentCard">
        {/*  */}

        <Card.Img src={content.image} className="imageFit" />

        <Card.Body className="cardBody">
          {/*  */}
          <div className="nameCostRating">
            <div className="nameCost">
              <Card.Title>{content.name}</Card.Title>
              <Badge>{content.cost}</Badge>
            </div>
            <Rating
              rating={content.rating}
              numReviews={content.numReviews}
            ></Rating>
          </div>
          {/* <Card.Text>{content.rating}</Card.Text> */}

          {/*  */}
          <div className="categoryType">
            <div className="cardCategory">
              {/*  */}
              <Badge pill bg="success">
                {content.categories}
              </Badge>
            </div>
            {/*  */}
            <div className="cardType">
              {content.types.map((type, index) => (
                <Badge pill key={`${content._id}-${index}`}>
                  {type}
                </Badge>
              ))}
            </div>
          </div>
          {/*  */}
        </Card.Body>
        {/*  */}
        <Card.Footer>
          <Row className="footerActions">
            <Col className="vertical-divider">
              <i className="fa-solid fa-bookmark"></i>{' '}
            </Col>
            <Col>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}

/* 

      <Card>
        <div className="crop">
          <Link>
            <Card.Img src={content.image} alt={content.name} />
          </Link>
        </div>
        <Card.Body>
          <Card.Title>{content.name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>

*/

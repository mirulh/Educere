import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Rating from './Rating';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../../utils_frontend';

export default function Content(prop) {
  const navigate = useNavigate();
  const { content } = prop;

  const { state, dispatch: contextDispatch } = useContext(Store);

  const {
    userInfo,
    userSaves: { numSaves, saves },
  } = state;

  const addToSave = async (content) => {
    if (!userInfo) {
      navigate('/signin');
      toast.info('Please sign in first');
      return;
    }
    try {
      const { data } = await axios.post(
        `/api/users/save`,
        {
          contentId: content._id,
          contentName: content.name,
          contentSlug: content.slug,
          contentUrl: content.url,
        },
        { headers: { Authorization: `Bearer ${userInfo.token}` } }
      );
      contextDispatch({
        type: 'UPDATE_SAVES',
        payload: data,
      });
      localStorage.setItem('userSaves', JSON.stringify(data));
    } catch (err) {
      //console.log('save fail');
      toast.error(getError(err));
    }
  };

  console.log('hi dad')

  return (
    <div className="homeBackground">
      <Card className="mb-4 contentCard">
        <Link to={`/content/${content.slug}`}>
          <Card.Img
            variant="top"
            src={content.image}
            className="imageCardFit"
          />
        </Link>

        <Card.Body className="cardBody homeBackground">
          {/*  */}
          <div className="nameCostRating">
            <div className="nameCost">
              <Link
                to={`/content/${content.slug}`}
                className="text-decoration-none link-dark"
              >
                <Card.Title className="content">{content.name}</Card.Title>
              </Link>
              <Badge className="badgeCost">{content.cost}</Badge>
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
              {content.category.map((type, index) => (
                <Badge
                  pill
                  bg="success"
                  key={`${content._id}-${index}`}
                  className="me-1 badgeCategory"
                >
                  {type.label}
                </Badge>
              ))}
            </div>
            <div className="cardType">
              {content.type.map((category, index) => (
                <Badge
                  pill
                  key={`${content._id}-${index}`}
                  className="me-1 badgeType"
                >
                  {category.label}
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
              {/* <i className="fa-solid fa-bookmark"></i> */}
              <Button
                variant={null}
                className="p-0 m-0"
                onClick={() => addToSave(content)}
              >
                {saves && saves.find((c) => c._id === content._id) ? (
                  <i
                    className="fa-solid fa-bookmark"
                    // style={{ color: '#DAA520' }}
                  ></i>
                ) : (
                  <i className="fa-regular fa-bookmark"></i>
                )}
              </Button>
            </Col>
            <Col className=" vertical-divider2">
              <a
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-dark"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
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

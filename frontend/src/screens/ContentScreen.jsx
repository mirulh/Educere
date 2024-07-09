import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { getError } from '../../utils_frontend';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Helmet } from 'react-helmet-async';
import Rating from '../components/Rating';
import Badge from 'react-bootstrap/Badge';
import { Store } from '../Store';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { toast } from 'react-toastify';
import ListGroup from 'react-bootstrap/ListGroup';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, content: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'CREATE_REQUEST':
      return { ...state, loadingCreateReview: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreateReview: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreateReview: false };

    case 'REFRESH_CONTENT':
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default function ContentScreen() {
  const navigate = useNavigate();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  // for rating
  const [hover, setHover] = useState(null);

  const params = useParams();
  const { slug } = params;

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
      console.log('save fail');
      toast.error(getError(err));
    }
  };

  const [{ loading, error, content, loadingCreateReview }, dispatch] =
    useReducer(reducer, {
      content: [],
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(`/api/contents/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
        // console.log(data);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error('Please enter comment and rating');
      return;
    }
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `/api/contents/${content._id}/reviews`,
        { rating, comment, name: userInfo.name },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      dispatch({ type: 'CREATE_SUCCESS' });
      toast.success('Review submitted successfully');
      content.reviews.unshift(data.review);
      content.numReviews = data.numReview;
      content.rating = data.rating;
      dispatch({ type: 'REFRESH_CONTENT', payload: content });
      console.log(content);
      // content.reviews.unshift(data.review);
    } catch (err) {
      toast.error(getError(err));
      dispatch({ type: 'CREATE_FAIL' });
    }
  };

  return (
    <div className="contentBackground">
      <Helmet>
        <title>{content.name}</title>
      </Helmet>
      <Container className="contentContainer">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row className="contentRow">
            <Col md={6} className="contentCol">
              <div className="imageDescription">
                <img
                  src={content.image}
                  className="img-fluid mx-auto d-block imageDescFit"
                />
                <div className="mt-3 mb-3 fontsize positionContainer3">
                  <div className="toBePosition3">
                    <h4 className="mb-3">Description</h4>
                    <p className="sizeDescription">{content.description}</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="contentCol">
              <div className="nameLinkSave">
                <div className="nameLink">
                  <h2 className="mt-3 mb-3">{content.name}</h2>
                  <a
                    href={content.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square fa-xl"></i>
                  </a>
                </div>
                <Button
                  variant={null}
                  className="p-0 m-0"
                  onClick={() => addToSave(content)}
                >
                  {saves && saves.find((c) => c._id === content._id) ? (
                    <i
                      className="fa-solid fa-bookmark fa-2xl fa"
                      style={{ color: '#DAA520' }}
                    ></i>
                  ) : (
                    <i
                      className="fa-regular fa-bookmark fa-2xl"
                      style={{ color: '#DAA520' }}
                    ></i>
                  )}
                </Button>{' '}
              </div>
              <Rating
                rating={content.rating}
                numReviews={content.numReviews}
              ></Rating>
              <hr className="blurry"></hr>

              <div className="mb-3 mt-3">Subject:</div>
              <div className="contentCategory mt-3 mb-5">
                {content.category.map((c, index) => (
                  <Link key={index} to={`/search?category=${c.value}`}>
                    <Badge bg="success" pill className="me-2">
                      {c.label}
                    </Badge>
                  </Link>
                ))}
              </div>
              <hr className="blurry"></hr>
              <div className="mb-3">Tech Stack Offered:</div>
              <div className="contentCategory mt-3 mb-5">
                {content.techStack.map((c, index) => (
                  <Link key={index} to={`/search?techStack=${c.value}`}>
                    <Badge pill bg="warning" text="dark" className="me-2">
                      {c.label}
                    </Badge>
                  </Link>
                ))}
              </div>
              <hr className="blurry"></hr>
              <Row>
                <Col>
                  <div className="mb-3">Content Format:</div>
                  <div className="mb-5">
                    {content.type.map((t, index) => (
                      <Link key={index} to={`/search?type=${t.value}`}>
                        <Badge bg="primary" pill className="me-2">
                          {t.label}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                  <div>{}</div>
                </Col>
                <Col>
                  <div className="mb-3">
                    <span>
                      Certification: &nbsp;
                      <Link to={`/search?hasCert=${content.hasCert}`}>
                        <Badge bg="secondary">
                          {content.hasCert == true ? 'Yes' : 'No'}
                        </Badge>{' '}
                      </Link>
                    </span>
                  </div>
                  <div>
                    <span>
                      Cost: &nbsp;
                      <Link to={`/search?cost=${content.cost}`}>
                        <Badge bg="secondary">{content.cost}</Badge>
                      </Link>{' '}
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={9} className="reviewCol mt-5">
              {userInfo ? (
                <Form onSubmit={submitHandler}>
                  <h4>Write a Review</h4>
                  <Form.Label className="mt-4">General Rating</Form.Label>
                  <Form.Group className="mb-4">
                    {[...Array(5)].map((star, index) => {
                      const currentRating = index + 1;
                      return (
                        <Form.Label key={index}>
                          <Form.Check
                            type="radio"
                            name="option"
                            value={currentRating}
                            onChange={() => setRating(currentRating)}
                          ></Form.Check>
                          <span
                            className={
                              currentRating <= (hover || rating)
                                ? 'fa-solid fa-star fa-xl'
                                : 'fa-regular fa-star fa-xl'
                            }
                            style={{ color: '#ffc107' }}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                          ></span>
                        </Form.Label>
                      );
                    })}
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Leave a comment here"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Form.Group>
                  <div className="mb-3">
                    <Button disabled="" type="submit">
                      Post review
                    </Button>
                  </div>
                </Form>
              ) : (
                <MessageBox variant="primary">
                  Please <Link to={`/signin`}>Sign In</Link>&nbsp;to write a
                  review
                </MessageBox>
              )}
              <div>
                {content.reviews.length === 0 && (
                  <MessageBox>There is no review</MessageBox>
                )}
              </div>
              <ListGroup>
                {content.reviews.map((review) => (
                  <ListGroup.Item
                    key={review._id}
                    className="reviewContainer mb-3"
                  >
                    <div className="nameRatingDate">
                      <div className="nameRating">
                        <strong>
                          <i>{review.name}</i>
                        </strong>
                        <Rating rating={review.rating} caption=" "></Rating>
                      </div>
                      <p>
                        <i>{review.createdAt.substring(0, 10)}</i>
                      </p>
                    </div>
                    <div className="commentDate">
                      <p>{review.comment}</p>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

/* 

rating saved

<Form.Group className="mb-3">
  <Form.Label>Rating</Form.Label>
  <Form.Select
    value={rating}
    onChange={(e) => setRating(e.target.value)}
  >
    <option value="">Select...</option>
    <option value="1">1- Poor</option>
    <option value="2">2- Fair</option>
    <option value="3">3- Good</option>
    <option value="4">4- Very Good</option>
    <option value="5">5- Excellent</option>
  </Form.Select>
</Form.Group>

*/
